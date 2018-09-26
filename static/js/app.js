// from data.js
var tableData = data;

var filterbtnObj = d3.select('#filter-btn');

filterbtnObj.on('click', function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filteredData = tableData;

    // Select the input element of id datetime and get the raw HTML node
    var datetimeElement = d3.select("#datetime");
    // Get the value property of the datetime element
    var datetimeValue = datetimeElement.property("value");
    if (datetimeValue) {
        // filter by datetime
        filteredData = filteredData.filter(data => data.datetime === datetimeValue );
    }

    // Select the input element of id city and get the raw HTML node
    var cityElement = d3.select("#city");
    // Get the value property of the city element
    var cityValue = cityElement.property("value");
    if (cityValue) {
        // filter by city
        filteredData = filteredData.filter(data => data.city === cityValue.toLowerCase());
    }

    // Select the input element of id state and get the raw HTML node
    var stateElement = d3.select("#state");
    // Get the value property of the state element
    var stateValue = stateElement.property("value");
    if (stateValue) {
        // filter by state
        filteredData = filteredData.filter(data => data.state == stateValue.toLowerCase());
    }

    // Select the input element of id country and get the raw HTML node
    var countryElement = d3.select("#country");
    // Get the value property of the country element
    var countryValue = countryElement.property("value");
    if (countryValue) {
        // filter by country
        filteredData = filteredData.filter(data => data.country === countryValue.toLowerCase());
    }

    // Select the input element of id shape and get the raw HTML node
    var shapeElement = d3.select("#shape");
    // Get the value property of the datetime element
    var shapeValue = shapeElement.property("value");
    if (shapeValue) {
        // filter by shape
        filteredData = filteredData.filter(data => data.shape === shapeValue.toLowerCase());
    }

    // Use D3 to select the table body
    var tbody = d3.select("tbody");
    tbody.text('');
  
    // Iterate through each filteredData object and 
    filteredData.forEach(data => {

        // Append one table row per data
        var row = tbody.append("tr");
    
        // append one cell for the each key/value of the object
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    
    });

});

var showAllbtnObj = d3.select('#show-all-btn');

showAllbtnObj.on('click', function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filteredData = tableData;

    // Use D3 to select the table body
    var tbody = d3.select("tbody");
    tbody.text('');
  
    // Iterate through each filteredData object and 
    filteredData.forEach(data => {

        // Append one table row per data
        var row = tbody.append("tr");
    
        // append one cell for the each key/value of the object
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    
    });
});