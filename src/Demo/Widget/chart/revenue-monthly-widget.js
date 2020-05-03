export default {
    type: 'bar',
    height: 30,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#f83f37'],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
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
                    formatter: (seriesName) => {
                        return 'Amount Spent :';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [2, 9, 7, 4, 3, 8, 1]
    }]
}