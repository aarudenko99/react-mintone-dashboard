export default {
    height: 195,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%'
                }
            }
        },
        labels: ['New', 'Return', 'Custom'],
        legend: {
            show: false
        },
        grid: {
            padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        colors: ['#4886ff', '#0e9e4a', '#ff484c'],
    },
    series: [76.7, 15, 30]
}