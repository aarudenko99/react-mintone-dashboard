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
        colors: ['rgb(111, 149, 243)', 'rgb(245, 150, 61)', 'rgb(248, 130, 154)'],
        fill: {
            type: 'solid'
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
        data: [50, 1, 95, 7, 150, 40, 10]
    }, {
        name: 'series1',
        data: [30, 30, 50, 70, 20, 80, 10]
    }, {
        name: 'series1',
        data: [20, 50, 20, 160, 30, 25, 10]
    }]
}