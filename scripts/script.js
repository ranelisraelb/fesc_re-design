google.charts.load('current', {
    'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawWholeStretch);

function drawWholeStretch() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1960', 35680],
        ['1961', 34417],
        ['1962', 35826],
        ['1963', 38613],
        ['1964', 39016],
        ['1965', 39916],
        ['1966', 42760],
        ['1967', 44550],
        ['1968', 49556],
        ['1969', 51489],
        ['1970', 51035],
        ['1971', 49968],
        ['1972', 54389],
        ['1973', 56250],
        ['1974', 52429],
        ['1975', 50007],
        ['1976', 56507],
        ['1977', 59953],
        ['1978', 65357],
        ['1978', 65357],
        ['1979', 69419],
        ['1980', 90049],
        ['1981', 83117],
        ['1982', 104674],
        ['1983', 91705],
        ['1984', 108740],
        ['1985', 110698],
        ['1986', 116356],
        ['1987', 107606],
        ['1988', 113802],
        ['1989', 232261],
        ['1990', 198986],
        ['1991', 212955],
        ['1992', 230779],
        ['1993', 217028],
        ['1994', 215563],
        ['1995', 220211],
        ['1996', 240343],
        ['1996', 240343],
        ['1997', 231308],
        ['1998', 205485],
        ['1999', 204114],
        ['2000', 194952],
        ['2001', 158038],
        ['2002', 174327],
        ['2003', 188473],
        ['2004', 179462],
        ['2005', 183175],
        ['2006', 185564],
        ['2007', 190489],
        ['2008', 195232],
        ['2009', 213642],
        ['2010', 223518],
        ['2011', 222956],
        ['2012', 220020],
        ['2013', 229666],
        ['2014', 226863],
        ['2015', 234192]
    ]);

    var options = {
        'title': 'Renewable Energy Production In Florida (1960 - 2015)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1960-1978'));
    chart.draw(data, options);
}

function drawFirstStretch() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1960', 35680],
        ['1961', 34417],
        ['1962', 35826],
        ['1963', 38613],
        ['1964', 39016],
        ['1965', 39916],
        ['1966', 42760],
        ['1967', 44550],
        ['1968', 49556],
        ['1969', 51489],
        ['1970', 51035],
        ['1971', 49968],
        ['1972', 54389],
        ['1973', 56250],
        ['1974', 52429],
        ['1975', 50007],
        ['1976', 56507],
        ['1977', 59953],
        ['1978', 65357]
    ]);

    var options = {
        'title': 'Renewable Energy Production In Florida (1960 - 1978)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1960-1978'));
    chart.draw(data, options);
}

function drawSecondStretch() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1978', 65357],
        ['1979', 69419],
        ['1980', 90049],
        ['1981', 83117],
        ['1982', 104674],
        ['1983', 91705],
        ['1984', 108740],
        ['1985', 110698],
        ['1986', 116356],
        ['1987', 107606],
        ['1988', 113802],
        ['1989', 232261],
        ['1990', 198986],
        ['1991', 212955],
        ['1992', 230779],
        ['1993', 217028],
        ['1994', 215563],
        ['1995', 220211],
        ['1996', 240343]
    ]);

    var options = {
        'title': 'Renewable Energy Production In Florida (1978-1996)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1978-1996'));
    chart.draw(data, options);
}

function drawThirdStretch() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Billion BTU');
    data.addRows([
        ['1996', 240343],
        ['1997', 231308],
        ['1998', 205485],
        ['1999', 204114],
        ['2000', 194952],
        ['2001', 158038],
        ['2002', 174327],
        ['2003', 188473],
        ['2004', 179462],
        ['2005', 183175],
        ['2006', 185564],
        ['2007', 190489],
        ['2008', 195232],
        ['2009', 213642],
        ['2010', 223518],
        ['2011', 222956],
        ['2012', 220020],
        ['2013', 229666],
        ['2014', 226863],
        ['2015', 234192]
    ]);

    var options = {
        'title': 'Renewable Energy Production In Florida (1996-2015)',
        'width': 400,
        'height': 300,
    };

    var chart = new google.visualization.LineChart(document.getElementById('1996-2015'));
    chart.draw(data, options);
}

window.onload = function () {
    // Event listeners for each button: clear all charts, redraw requested one
    document.getElementById('1960-2015-trigger').addEventListener('click', function () {
        document.getElementById('1960-2015').innerHTML = ""
        document.getElementById('1960-1978').innerHTML = ""
        document.getElementById('1978-1996').innerHTML = ""
        document.getElementById('1996-2015').innerHTML = ""
        drawWholeStretch();
    })
    document.getElementById('1960-1978-trigger').addEventListener('click', function () {
        document.getElementById('1960-2015').innerHTML = ""
        document.getElementById('1960-1978').innerHTML = ""
        document.getElementById('1978-1996').innerHTML = ""
        document.getElementById('1996-2015').innerHTML = ""
        drawFirstStretch();
    })

    document.getElementById('1978-1996-trigger').addEventListener('click', function () {
        document.getElementById('1960-2015').innerHTML = ""
        document.getElementById('1960-1978').innerHTML = ""
        document.getElementById('1978-1996').innerHTML = ""
        document.getElementById('1996-2015').innerHTML = ""
        drawSecondStretch()
    })

    document.getElementById('1996-2015-trigger').addEventListener('click', function () {
        document.getElementById('1960-2015').innerHTML = ""
        document.getElementById('1960-1978').innerHTML = ""
        document.getElementById('1978-1996').innerHTML = ""
        document.getElementById('1996-2015').innerHTML = ""
        drawThirdStretch();
    })
}