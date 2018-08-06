google.charts.load('current', {
    'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawFirstConsumption);

function drawFirstConsumption() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1960', 57344],
        ['1961', 62705],
        ['1962', 71216],
        ['1963', 78258],
        ['1964', 87016],
        ['1965', 95878],
        ['1966', 108610],
        ['1967', 119314],
        ['1968', 135509],
        ['1969', 153032],
        ['1970', 171346],
        ['1971', 188564],
        ['1972', 209665],
        ['1973', 237104],
        ['1974', 235482],
        ['1975', 242096],
        ['1976', 252408],
        ['1977', 270767],
        ['1978', 289031]
    ]);

    var options = {
        'title': 'Renewable Energy Consumption In Florida (1960 - 1978)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1960-1978-con'));
    chart.draw(data, options);
}

function drawSecondConsumption() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1978', 289031],
        ['1979', 295551],
        ['1980', 309694],
        ['1981', 317921],
        ['1982', 315744],
        ['1983', 329216],
        ['1984', 353246],
        ['1985', 379307],
        ['1986', 398095],
        ['1987', 417862],
        ['1988', 444382],
        ['1989', 472473],
        ['1990', 489741],
        ['1991', 499299],
        ['1992', 501598],
        ['1993', 521176],
        ['1994', 544365],
        ['1995', 571483],
        ['1996', 586291]
    ]);

    var options = {
        'title': 'Renewable Energy Consumption In Florida (1978-1996)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1978-1996-con'));
    chart.draw(data, options);
}

function drawThirdConsumption() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1996', 586291],
        ['1997', 597240],
        ['1998', 639254],
        ['1999', 638966],
        ['2000', 668216],
        ['2001', 684966],
        ['2002', 718136],
        ['2003', 741696],
        ['2004', 745810],
        ['2005', 767622],
        ['2006', 778685],
        ['2007', 788461],
        ['2008', 771702],
        ['2009', 766848],
        ['2010', 788887],
        ['2011', 768009],
        ['2012', 752941],
        ['2013', 757189],
        ['2014', 771379],
        ['2015', 803865],
        ['2016', 804283]
    ]);

    var options = {
        'title': 'Renewable Energy Consumption In Florida (1996-2016)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1996-2016-con'));
    chart.draw(data, options);
}

window.onload = function () {
    // Event listeners for each button: clear all charts, redraw requested one
    document.getElementById('1960-1978-trigger-con').addEventListener('click', function () {
        document.getElementById('1960-1978-con').innerHTML = ""
        document.getElementById('1978-1996-con').innerHTML = ""
        document.getElementById('1996-2016-con').innerHTML = ""
        drawFirstConsumption();
    })

    document.getElementById('1978-1996-trigger-con').addEventListener('click', function () {
        document.getElementById('1960-1978-con').innerHTML = ""
        document.getElementById('1978-1996-con').innerHTML = ""
        document.getElementById('1996-2016-con').innerHTML = ""
        drawSecondConsumption()
    })

    document.getElementById('1996-2016-trigger-con').addEventListener('click', function () {
        document.getElementById('1960-1978-con').innerHTML = ""
        document.getElementById('1978-1996-con').innerHTML = ""
        document.getElementById('1996-2016-con').innerHTML = ""
        drawThirdConsumption();
    })
}