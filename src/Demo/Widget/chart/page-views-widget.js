export default {
    type: 'bar',
    height: 90,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#ffbf36', '#ffbf36', '#ffbf36', '#ffbf36', '#ffbf36', '#CCCCCC', '#CCCCCC'],
        plotOptions: {
            bar: {
                columnWidth: '60%',
                distributed: true
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
        data: [5, 2, 7, 4, 3, 2, 6]
    }]
}