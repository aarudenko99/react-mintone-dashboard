import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

class AreaZoomChart extends React.Component {
    state = {
        data: []
    };

    UNSAFE_componentWillMount() {
        const self = this;
        axios.get('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json')
            .then(function (response) {
                self.setState({data: response.data});
            });
    }

    render() {
            const options = {
                chart: {
                    zoomType: 'x',
                },
                title: {
                    text: 'USD to EUR exchange rate over time'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Exchange rate'
                    }
                },
                legend: {
                    enabled: true
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#1dc4e9'],
                                [1, '#1de9b6']
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 2,
                        lineColor: '#1dc4e9',
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    data: this.state.data
                }]
            };

            return this.state.data ? <HighchartsReact
                highcharts={Highcharts}
                options={options}
            /> : <p>Loading...</p>
    }
}

export default AreaZoomChart;