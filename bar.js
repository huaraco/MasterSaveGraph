function loadBar(div, categories, budgetData, spendData ) {
    div.highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: categories
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Amount'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Buget',
            color: '#0dccc0',
            data: budgetData,
            pointStart: 0,
            pointPadding: 0,
            pointPlacement: -0.3,
            dataLabels: {
                enabled: false,
                color: '#FFFFFF',
                align: 'center',
                format: '${point.y:.1f}', // one decimal
                y: 30, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }, {
            name: 'Spent',
            color: '#ff6f6f',
            data: spendData,
            pointStart: 0,
            pointPadding: 0,
            pointPlacement: 0,
            dataLabels: {
                enabled: true,
                color: '#0000FF',
                align: 'right',
                format: '{point.percentage:.1f} %', // one decimal
                y: 0, // 10 pixels down from the top
                style: {
                    fontSize: '9px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

}
