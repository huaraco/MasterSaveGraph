function pie(div, source, total) {
    div.highcharts({
        colors: ['#0dccc0', '#f8c82d', '#ff6f6f', '#a8d164', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            width: null,
            height: null
        },
        title: {
            text: '$' + total,
            align: 'center',
            verticalAlign: 'middle',
            y: -10
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        fontSize: '15px'
                    }
                },
                showInLegend: true,
                events: {
                    click: function(e) {
                        window.location.assign("http://saveapp.com/showtransactions?category=" + e.point.name)      
                    }
                },
                innerSize: '50%',
                startAngle: 0,
                endAngle: 360,
                // center: ['50%', '75%']
            }
        },
        series: [{
            name: 'Category',
            colorByPoint: true,
            data: source
        }]
    });
}
