export default {
    height: 200,
    type: 'bar',
    options: {
        chart: {
            toolbar: {
                show: false
            },
            events: {
                click: function(chart, w, e) {
                    console.log(chart, w, e)
                }
            },
        },
        colors: ['#00acf0', '#f83f37', '#ffbf36'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Collection', 'Fees', 'Jake'],
            labels: {
                style: {
                    colors: ['#00acf0', '#f83f37', '#ffbf36'],
                    fontSize: '14px'
                }
            }
        }
    },
    series: [{
        data: [4025, 2582, 1086]
    }]
}