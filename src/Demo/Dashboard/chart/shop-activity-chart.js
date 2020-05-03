export default {
    height: 350,
    type: 'area',
    options: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 0
        },
        colors: ['#4886ff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 0.95,
                inverseColors: true,
                stops: [0, 100]
            }
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00'
            ],
        },
        grid: {
            borderColor: '#eee',
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    },
    series: [{
        name: 'series1',
        data: [0, 50, 20, 60, 30, 25, 10]
    }]
}