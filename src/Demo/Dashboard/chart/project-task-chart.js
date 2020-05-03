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
            width: 1,
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
            strokeColors: ['#7ad835', '#4886ff', '#ffb74e'],
            hover: {
                size: 3
            }
        },
        colors: ['#7ad835', '#4886ff', '#ffb74e'],
        grid: {
            borderColor: '#eee'
        },
        xaxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        }
    },
    series: [
        {
            name: 'DONE',
            data: [50, 130, 80, 70, 180, 105, 250]
        },
        {
            name: 'IN PROCESS',
            data: [80, 100, 60, 200, 150, 100, 150]
        },
        {
            name: 'NEW',
            data: [20, 80, 70, 140, 140, 80, 200]
        }
    ]
}