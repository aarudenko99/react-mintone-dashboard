import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import {VectorMap} from 'react-jvectormap';

import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/components/Breadcrumb";

import analyticsSessionChart from './chart/analytics-session-chart';
import analyticsVisitorAgeChart from './chart/analytics-visitor-age-chart';
import analyticsVisitorGenderChart from './chart/analytics-visitor-gender-chart';
import DEMO from "../../store/constant";

class Analytics extends React.Component {

    render() {
        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col md={6}>
                        <Breadcrumb/>
                    </Col>
                    <Col md={6} className="text-right">
                        <button type="button" className="btn btn-primary m-r-5"><i className="feather icon-plus"/> Filter</button>
                        <button type="button" className="btn btn-outline-primary"><i className="feather icon-rotate-cw"/> Reload</button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="m-b-10">
                                    <Row>
                                        <Col md={4}>
                                            <h5 className="card-title m-b-0 align-self-center text-uppercase">Sessions</h5>
                                        </Col>
                                        <Col md={8} className="text-right">
                                            <div className="ml-auto text-light-blue">
                                                <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-12">
                                                    <li>Last year</li>
                                                    <li>Last month</li>
                                                    <li>Last week</li>
                                                    <li><i className="flaticon-calendar"/></li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-12">
                                    <li><i className="fa fa-square m-r-5 text-warning"/> Sales</li>
                                    <li><i className="fa fa-square m-r-5 text-pink"/> Orders</li>
                                    <li><i className="fa fa-square m-r-5 text-primary"/> New visitors </li>
                                </ul>
                                <Chart {...analyticsSessionChart}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">top 5 pages</h5>
                                    <div className="ml-auto text-light-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-light-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <Row>
                                    <Col className="text-center">
                                        <ReactMinimalPieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            background="#e5e5e5"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#13dafe',
                                                    value: 35
                                                }
                                            ]}
                                            label
                                            labelPosition={0}
                                            labelStyle={{
                                                fontSize: '12px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={7}
                                            paddingAngle={0}
                                            radius={25}
                                            ratio={1}
                                            rounded={true}
                                            startAngle={0}
                                            totalValue={100}
                                        />
                                        <p className="font-16 font-weight-bold">Shop catalog</p>
                                    </Col>
                                    <Col className="text-center">
                                        <ReactMinimalPieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            background="#e5e5e5"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#00c292',
                                                    value: 35
                                                }
                                            ]}
                                            label
                                            labelPosition={0}
                                            labelStyle={{
                                                fontSize: '12px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={7}
                                            paddingAngle={0}
                                            radius={25}
                                            ratio={1}
                                            rounded={true}
                                            startAngle={0}
                                            totalValue={100}
                                        />
                                        <p className="font-16 font-weight-bold">Main page</p>
                                    </Col>
                                    <Col className="text-center">
                                        <ReactMinimalPieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            background="#e5e5e5"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#6164c1',
                                                    value: 35
                                                }
                                            ]}
                                            label
                                            labelPosition={0}
                                            labelStyle={{
                                                fontSize: '12px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={7}
                                            paddingAngle={0}
                                            radius={25}
                                            ratio={1}
                                            rounded={true}
                                            startAngle={0}
                                            totalValue={100}
                                        />
                                        <p className="font-16 font-weight-bold">Customer page</p>
                                    </Col>
                                    <Col className="text-center">
                                        <ReactMinimalPieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            background="#e5e5e5"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#13dafe',
                                                    value: 35
                                                }
                                            ]}
                                            label
                                            labelPosition={0}
                                            labelStyle={{
                                                fontSize: '12px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={7}
                                            paddingAngle={0}
                                            radius={25}
                                            ratio={1}
                                            rounded={true}
                                            startAngle={0}
                                            totalValue={100}
                                        />
                                        <p className="font-16 font-weight-bold">Readonly</p>
                                    </Col>
                                    <Col className="text-center">
                                        <ReactMinimalPieChart
                                            animate={false}
                                            animationDuration={500}
                                            animationEasing="ease-out"
                                            background="#e5e5e5"
                                            cx={50}
                                            cy={50}
                                            data={[
                                                {
                                                    color: '#99d683',
                                                    value: 35
                                                }
                                            ]}
                                            label
                                            labelPosition={0}
                                            labelStyle={{
                                                fontSize: '12px'
                                            }}
                                            lengthAngle={360}
                                            lineWidth={7}
                                            paddingAngle={0}
                                            radius={25}
                                            ratio={1}
                                            rounded={true}
                                            startAngle={0}
                                            totalValue={100}
                                        />
                                        <p className="font-16 font-weight-bold">Products</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">visitors Age</h5>
                                    <div className="ml-auto text-light-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-light-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <Chart {...analyticsVisitorAgeChart}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">visitors gender</h5>
                                    <div className="ml-auto text-light-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-light-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-12">
                                    <li><i className="fa fa-square m-r-5 text-primary"/> Male</li>
                                    <li><i className="fa fa-square m-r-5 text-warning"/> Female</li>
                                    <li><i className="fa fa-square m-r-5 text-purple"/> Undefined</li>
                                    <li><i className="fa fa-square m-r-5 text-success"/> Suits</li>
                                </ul>
                                <Chart {...analyticsVisitorGenderChart}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">Visitors</h5>
                                    <div className="ml-auto text-light-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-light-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <div style={{height: '400px', width: '100%'}}>
                                    <VectorMap
                                        map={"world_mill"}
                                        scaleColors={["#2196F3", "#1B8BF9"]}
                                        normalizeFunction="polynomial"
                                        hoverOpacity={0.7}
                                        hoverColor="!1"
                                        regionStyle={{
                                            initial: {
                                                fill: "#d7e6ff"
                                            }
                                        }}
                                        ref="map"
                                        containerStyle={{
                                            width: "100%",
                                            height: "100%"
                                        }}
                                        containerClassName="set-map"
                                        markerStyle={{
                                            initial: {
                                                r: 9,
                                                fill: "#2196F3",
                                                "fill-opacity": 0.9,
                                                stroke: "#fff",
                                                "stroke-width": 7,
                                                "stroke-opacity": 0.4
                                            },
                                            hover: {
                                                stroke: "#fff",
                                                "fill-opacity": 1,
                                                "stroke-width": 1.5
                                            }
                                        }}
                                        backgroundColor="transparent"
                                        markers={[
                                            {
                                                latLng: [41.9, 12.45],
                                                name: "Vatican City"
                                            },
                                            {
                                                latLng: [43.73, 7.41],
                                                name: "Monaco"
                                            },
                                            {
                                                latLng: [-0.52, 166.93],
                                                name: "Nauru"
                                            },
                                            {
                                                latLng: [-8.51, 179.21],
                                                name: "Tuvalu"
                                            },
                                            {
                                                latLng: [43.93, 12.46],
                                                name: "San Marino"
                                            },
                                            {
                                                latLng: [47.14, 9.52],
                                                name: "Liechtenstein"
                                            },
                                            {
                                                latLng: [7.11, 171.06],
                                                name: "Marshall Islands"
                                            },
                                            {
                                                latLng: [17.3, -62.73],
                                                name: "Saint Kitts and Nevis"
                                            },
                                            {
                                                latLng: [3.2, 73.22],
                                                name: "Maldives"
                                            },
                                            {
                                                latLng: [35.88, 14.5],
                                                name: "Malta"
                                            },
                                            {
                                                latLng: [12.05, -61.75],
                                                name: "Grenada"
                                            },
                                            {
                                                latLng: [13.16, -61.23],
                                                name: "Saint Vincent and the Grenadines"
                                            },
                                            {
                                                latLng: [13.16, -59.55],
                                                name: "Barbados"
                                            },
                                            {
                                                latLng: [17.11, -61.85],
                                                name: "Antigua and Barbuda"
                                            },
                                            {
                                                latLng: [-4.61, 55.45],
                                                name: "Seychelles"
                                            },
                                            {
                                                latLng: [7.35, 134.46],
                                                name: "Palau"
                                            },
                                            {
                                                latLng: [42.5, 1.51],
                                                name: "Andorra"
                                            },
                                            {
                                                latLng: [14.01, -60.98],
                                                name: "Saint Lucia"
                                            },
                                            {
                                                latLng: [6.91, 158.18],
                                                name: "Federated States of Micronesia"
                                            },
                                            {
                                                latLng: [1.3, 103.8],
                                                name: "Singapore"
                                            },
                                            {
                                                latLng: [1.46, 173.03],
                                                name: "Kiribati"
                                            },
                                            {
                                                latLng: [-21.13, -175.2],
                                                name: "Tonga"
                                            },
                                            {
                                                latLng: [15.3, -61.38],
                                                name: "Dominica"
                                            },
                                            {
                                                latLng: [-20.2, 57.5],
                                                name: "Mauritius"
                                            },
                                            {
                                                latLng: [26.02, 50.55],
                                                name: "Bahrain"
                                            },
                                            {
                                                latLng: [0.33, 6.73],
                                                name: "São Tomé and Príncipe"
                                            }
                                        ]}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Analytics;