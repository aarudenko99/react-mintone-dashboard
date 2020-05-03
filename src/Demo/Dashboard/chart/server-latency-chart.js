export default {
    type: 'bar',
    height: 65,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#ffb74e'],
        plotOptions: {
            bar: {
                columnWidth: '80%'
            }
        },
        yaxis: {
            min: 25,
            max: 70
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        grid: {
            borderColor: '#eee'
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => ''
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [45, 43, 42, 35, 30, 45, 40, 50, 45, 40, 35, 45, 35, 40, 50, 45, 40, 35,
            30, 35, 42, 35, 30, 45, 60, 50, 45, 40, 35, 45, 40, 35, 30, 35, 42]
    }]
}