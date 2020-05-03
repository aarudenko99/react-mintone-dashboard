export default {
    height: 350,
    type: 'area',
    options: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 0
        },
        colors: ['#fb5a14'],
        fill: {
            type: 'solid'
        },
        xaxis: {
            type: 'year',
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016'
            ],
        },
        grid: {
            borderColor: '#eee',
        }
    },
    series: [{
        name: 'series1',
        data: [0, 130, 80, 70, 180, 105, 250]
    }]
}