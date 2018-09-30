// from data.js
var tableData = data;

// function to fill the tbody element
function fillTbody(tdData) {

    // Use D3 to select the table body
    var resultCountObj = d3.select("#results-count");
    resultCountObj.text('Total Rows: ' + tdData.length);

    // Use D3 to select the table body
    var tbody = d3.select("tbody");
    tbody.text('');

    // Iterate through each filteredData object and 
    tdData.forEach(data => {

        // Append one table row per data
        var row = tbody.append("tr");

        // append one cell for the each key/value of the object
        Object.values(data).forEach(item => {
            row.append("td").text(item);
        });
    });
}

// Function to handle event change on form
function handleChangeEvent() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filteredData = tableData;

    // Get all Input elements
    var allInput = d3.selectAll('input');
    allInput.nodes().forEach(eachInput => {
        var inputId = eachInput.id;
        var inputValue = eachInput.value;
        var re = new RegExp('^' + inputValue.toLowerCase());
        
        if (inputId == 'datetime' && inputValue) {
            // filter by datetime
            filteredData = filteredData.filter(data => data.datetime.match(re));
        }
    
        if (inputId == 'city' && inputValue) {
            // filter by datetime
            filteredData = filteredData.filter(data => data.city.match(re));
        }
    
        if (inputId == 'state' && inputValue) {
            // filter by state
            filteredData = filteredData.filter(data => data.state.match(re));
        }
    });
    
    // Get all select elements
    var allSelect = d3.selectAll('select');
    allSelect.nodes().forEach(eachSelect => {
        var selectId = eachSelect.id;
        var selectValue = eachSelect.value;
        if (selectId == 'country-dd' && selectValue) {
            // filter by country
            filteredData = filteredData.filter(data => data.country == selectValue);
        }
    
        if (selectId == 'shape-dd' && selectValue) {
            // filter by shape
            filteredData = filteredData.filter(data => data.shape == selectValue);
        }
    });

    fillTbody(filteredData);
}

// function to clear all input value
function clearAllInput() {
    var allInput = d3.selectAll('input');
    allInput.nodes().forEach(eachInput => {
        eachInput.value = '';
    });

    var allSelect = d3.selectAll('select');
    allSelect.nodes().forEach(eachSelect => {
        eachSelect.value = '';
    });

}

// form event listener
var form = d3.select('form');
form.on('change keyup', handleChangeEvent);

var clearAllBtnObj = d3.select('#clear-all-btn');
clearAllBtnObj.on('click', function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    clearAllInput();
    fillTbody(tableData);
});

// Dynamic unique Countries in the drop-down
var selectCountryObj = d3.select('#country-dd');
var uniqueCountries = Array.from(new Set(tableData.map(d => d.country)));
uniqueCountries.forEach(countryValue => {
    selectCountryObj.append('option').attr('value', countryValue).text(countryValue);
});

// Dynamic Shape in the select drop-down for shapes
var selectShapeObj = d3.select('#shape-dd');
var uniqueShapes = Array.from(new Set(tableData.map(d => d.shape)));
uniqueShapes.forEach(shapeValue => {
    selectShapeObj.append('option').attr('value', shapeValue).text(shapeValue);
});

// initail call to fillTbody with all the data.
fillTbody(tableData);