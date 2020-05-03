export default {
    height: 210,
    type: 'bar',
    options: {
        chart: {
            toolbar: {
                show: false
            }
        },
        colors: ['#cccccc', '#cccccc', '#cccccc', '#cccccc', '#cccccc', '#22af47', '#22af47'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
                endingShape: 'rounded'
            }
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
                style: {
                    colors: ['#cccccc', '#cccccc', '#cccccc', '#cccccc', '#cccccc', '#22af47', '#22af47'],
                    fontSize: '14px'
                }
            },
            axisBorder: {
                show: false,
            },
        }
    },
    series: [{
        data: [21, 22, 10, 16, 21, 13, 28]
    }]
}