export default {
    height: 350,
    type: 'line',
    options: {
        chart: {
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        legend: {
            fontSize: '14px',
            position: 'top',
            horizontalAlign: 'left',
            markers: {
                width: 14,
                height: 14,
                radius: 2
            },
            itemMargin: {
                horizontal: 0,
                vertical: 8
            }
        },
        markers: {
            size: 1.5,
            strokeColors: ['#f95476', '#ffb74e', '#4886ff'],
            hover: {
                size: 3
            }
        },
        colors: ['#f95476', '#ffb74e', '#4886ff'],
        grid: {
            borderColor: '#eee'
        },
        xaxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        }
    },
    series: [
        {
            name: 'CPU',
            data: [50, 130, 80, 70, 180, 105, 250]
        },
        {
            name: 'Memory',
            data: [80, 100, 60, 200, 150, 100, 150]
        },
        {
            name: 'DISC',
            data: [20, 80, 70, 140, 140, 80, 200]
        }
    ]
}