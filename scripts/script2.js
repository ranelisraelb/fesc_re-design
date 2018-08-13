//1 DOMContentLoaded
//2 Google chart library loaded
//3 get data from API
//4 Data received from the API
//5 Draw chart
// db94cf5c0202d5c76c61e38805bb8373 -->


function onDOMLoad() {
    google.charts.load('current', {
        'packages': ['corechart', 'bar']
    })
    google.charts.setOnLoadCallback(getData);
}
document.addEventListener("DOMContentLoaded", onDOMLoad)

function getData() {
    let request = new XMLHttpRequest()
    let requestURL = "http://api.eia.gov/series/?api_key=db94cf5c0202d5c76c61e38805bb8373&series_id=SEDS.TETCB.FL.A"
    request.open('GET', requestURL, true)
    request.onload = function () {
        if (request.status !== 200) {
            console.log("Something went wrong: ", request)
            return
        }
        let response = JSON.parse(request.response)
        console.log(response.series[0].data)
        drawWholeStretchFirst(response.series[0].data);
    }
    request.error = function (err) {
        console.log("error is: ", err)
        return
    }
    request.send()
}

function drawWholeStretchFirst(getData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows(getData);

    var options = {
        'title': 'Renewable Energy Consumption In Florida (1960 - 2016)',
        'width': 600,
        'height': 400,
    };

    var chart = new google.visualization.LineChart(document.getElementById('energy_consumption'));
    chart.draw(data, options);
}