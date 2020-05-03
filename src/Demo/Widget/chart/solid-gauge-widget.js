export default {
    height: 300,
    type: 'radialBar',
    options: {
        chart: {
            offsetY: -10,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'solid',
            colors: ['#22af47'],
            opacity: 1,
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: "80%",
                },
                dataLabels: {
                    name: {
                        fontSize: '0',
                    },
                    value: {
                        fontSize: '0',
                    }
                }
            }
        },
    },
    series: [67]
}