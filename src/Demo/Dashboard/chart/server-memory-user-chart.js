export default {
    height: 300,
    type: 'bar',
    options: {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%'
            },
        },
        dataLabels: {
            enabled: false
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
        colors: ['#ffb74e', '#fe365f', '#4782fa'],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        grid: {
            borderColor: '#ccc',
            strokeDashArray: 3
        },
        tooltip: {
            y: {
                formatter: (val) => '$ ' + val + ' thousands'
            }
        }
    },
    series: [{
        name: 'TOTAL',
        data: [530, 270, 135, 60]
    }, {
        name: 'USED',
        data: [380, 250, 110, 45]
    }, {
        name: 'FREE',
        data: [275, 210, 80, 15]
    }]
}