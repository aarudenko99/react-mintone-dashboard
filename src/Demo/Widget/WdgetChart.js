import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import feesCollectionWidget from './chart/fees-collection-widget';
import newUsersWidget from './chart/new-users-widget';
import orderUsersWidget from './chart/order-users-widget';
import pageViesWidget from './chart/page-views-widget';
import powerCardWidget1 from './chart/power-card-widget-1';
import powerCardWidget2 from './chart/power-card-widget-2';
import powerCardWidget3 from './chart/power-card-widget-3';
import revenueDailyWidget from './chart/revenue-daily-widget';
import revenueGenerateWidget from './chart/revenue-genrate-widget';
import revenueMonthlyWidget from './chart/revenue-monthly-widget';
import serveWidget from './chart/serve-widget';
import solidGaugeWidget from './chart/solid-gauge-widget';
import texDeductionWidget from './chart/text-deduction-widget';
import websiteTrafficWidget from './chart/website-traffic-widget';


class WdgetChart extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header className="p-t-20">
                                <div className="card-header-left">
                                    <h5>Power</h5>
                                </div>
                                <div className="card-header-right">
                                    <i className="icofont icofont-spinner-alt-5"/>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-power">
                                <h2>2789</h2><span className="text-muted">kw</span>
                                <Chart {...powerCardWidget1}/>
                                <Row>
                                    <Col sm={4}>
                                        <div className="map-area">
                                            <h6 className="m-0">2876</h6>
                                            <span>kw</span>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="map-area">
                                            <h6 className="m-0">234</h6>
                                            <span>kw</span>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header className="p-t-20">
                                <div className="card-header-left">
                                    <h5>Water</h5>
                                </div>
                                <div className="card-header-right">
                                    <i className="icofont icofont-spinner-alt-5"/>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-power">
                                <h2>7.3</h2><span className="text-muted">m3</span>
                                <Chart {...powerCardWidget2}/>
                                <Row>
                                    <Col sm={4}>
                                        <div className="map-area">
                                            <h6 className="m-0">4.5</h6>
                                            <span>m3</span>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="map-area">
                                            <h6 className="m-0">0.5</h6>
                                            <span>m3</span>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={4}>
                        <Card>
                            <Card.Header className="p-t-20">
                                <div className="card-header-left">
                                    <h5>Power</h5>
                                </div>
                                <div className="card-header-right">
                                    <i className="icofont icofont-spinner-alt-5"/>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-power">
                                <h2>7.3</h2><span className="text-muted">mpg</span>
                                <Chart {...powerCardWidget3}/>
                                <Row>
                                    <Col sm={4}>
                                        <div className="map-area">
                                            <h6 className="m-0">15.6</h6>
                                            <span>mpg</span>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="map-area">
                                            <h6 className="m-0">234</h6>
                                            <span>kw</span>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} xl={8}>
                        <Card className="serve-card">
                            <Card.Header>
                                <h5>Serve</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="serve-text d-inline-block p-b-10">
                                    <h2 className="d-inline-block m-r-15 f-w-600">839</h2>
                                    <i className="fas fa-caret-down text-c-green f-20"/>
                                </div>
                                <div className="serve-text float-right">
                                    <h4 className="d-inline-block m-r-15 f-18 text-muted">Week</h4>
                                    <i className="fas fa-caret-down text-c-green f-20"/>
                                </div>
                                <h6 className="text-muted">Responded <span className="text-c-green">+40 </span>this week</h6>
                                <Row className="serve-chart-list">
                                    <Col sm={4}>
                                        <h6 className="p-b-10">Peak Zone</h6>
                                        <h6>Average Zone</h6>
                                    </Col>
                                    <Col sm={8}>
                                        <Chart {...serveWidget}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={4}>
                        <Card className="invite-card">
                            <Card.Header>
                                <h5>Invites goal</h5>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <div className="invite-card-chart">
                                    <Chart {...solidGaugeWidget} />
                                    <div className="invite-card-cont">
                                        <i className="fas fa-paper-plane text-c-green"/>
                                        <span className="f-50">391</span>
                                        <hr/>
                                    </div>
                                </div>
                                <h6 className="f-w-600">You are on track!</h6>
                                <p className="text-muted m-b-0">You are close to your 528 invites goal</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Header>
                                <h5>Fees collection</h5>
                            </Card.Header>
                            <Card.Body className="fees-card">
                                <Row>
                                    <Col sm={4}>
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="legend-icon">
                                                    <span className="bg-c-blue"/>
                                                </div>
                                                <div className="legend-cont">
                                                    <p>$4,025</p>
                                                    <span>Collection</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="legend-icon">
                                                    <span className="bg-c-red"/>
                                                </div>
                                                <div className="legend-cont">
                                                    <p>$3,782</p>
                                                    <span>Fees</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="legend-icon">
                                                    <span className="bg-c-yellow"/>
                                                </div>
                                                <div className="legend-cont">
                                                    <p>$3,586</p>
                                                    <span>Expence</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>
                                    <div className="col-sm-8">
                                        <Chart {...feesCollectionWidget}/>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Header className="p-b-0">
                                <h5>Website traffic</h5>
                            </Card.Header>
                            <Card.Body className="web-trafic p-t-0">
                                <Row>
                                    <Col sm={5}>
                                        <Chart {...websiteTrafficWidget}/>
                                    </Col>
                                    <Col sm={7}>
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="legend-icon">
                                                    <span className="bg-c-blue"/>
                                                </div>
                                                <div className="legend-cont">
                                                    <p>Bounce</p>
                                                    <span>2834</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="legend-icon">
                                                    <span className="bg-c-red"/>
                                                </div>
                                                <div className="legend-cont">
                                                    <p>Registered</p>
                                                    <span>1254</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="legend-icon">
                                                    <span className="bg-c-yellow"/>
                                                </div>
                                                <div className="legend-cont">
                                                    <p>Visitors</p>
                                                    <span>4623</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={12} xl={6}>
                        <Card className="status-revenue-card ">
                            <Card.Header>
                                <h5>Revenue status</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col sm={6} className="b-r-default">
                                        <Row className="status-rev-chart">
                                            <Col sm={6} className="m-b-40">
                                                <Chart {...revenueDailyWidget}/>
                                            </Col>
                                            <Col sm={6} className="text-right">
                                                <i className="fas fa-caret-up text-muted f-16"/>
                                                <p className="text-muted f-16 d-inline-block f-w-400 m-l-10 m-b-0 ">+1.6%</p>
                                            </Col>
                                        </Row>
                                        <h2>$27,674</h2>
                                        <p className="text-muted m-b-0 f-w-400 ">Revenue daily</p>
                                    </Col>
                                    <Col sm={6}>
                                        <Row className="status-rev-chart">
                                            <Col sm={6} className="m-b-30">
                                                <Chart {...revenueMonthlyWidget}/>
                                            </Col>
                                            <Col sm={6} className="text-right">
                                                <i className="fas fa-caret-down text-muted f-16"/>
                                                <p className="text-muted f-16 d-inline-block f-w-400 m-l-10 m-b-0 ">- 0.9%</p>
                                            </Col>
                                        </Row>
                                        <h2>17,563</h2>
                                        <p className="text-muted m-b-0 f-w-400 ">Revenue weekly</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Header>
                                <h5>New users</h5>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <Row className="justify-content-center">
                                    <Col md={8}>
                                        <Chart {...newUsersWidget}/>
                                    </Col>
                                    <Col md={12}>
                                        <div className="text-center">
                                            <h4 className="f-w-400 f-20 m-t-10 ">4,567 Daily</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Header>
                                <h5>Page views</h5>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <Row className="justify-content-center">
                                    <Col md={8}>
                                        <Chart {...pageViesWidget}/>
                                    </Col>
                                    <Col md={12}>
                                        <div className="text-center">
                                            <h4 className="f-w-400 f-20 m-t-10">3,562 Today</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={6} xl={4}>
                        <Card className="revenue-map">
                            <Card.Header>
                                <h5>Tax deduction</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="row">
                                    <Col sm={8}>
                                        <h2>$567</h2>
                                        <span className="text-muted f-18 d-block">January 2017</span>
                                        <p className="text-muted m-b-0 p-t-40">Total tax deduction</p>
                                        <span className="m-l-5 f-w-400">$23,567</span>
                                    </Col>
                                    <Col sm={4}>
                                        <Chart {...texDeductionWidget}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="revenue-map">
                            <Card.Header>
                                <h5>Order</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="row">
                                    <Col sm={6}>
                                        <h2>456</h2>
                                        <span className="text-muted f-18 d-block">January 2017</span>
                                        <p className="text-muted m-b-0 p-t-40">Total order</p><span className="m-l-5 f-w-400">2,567</span>
                                    </Col>
                                    <Col sm={4} className='text-center m-t-10'>
                                        <Chart {...orderUsersWidget}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="revenue-map">
                            <Card.Header>
                                <h5>Revenue Generate</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="row">
                                    <Col sm={8}>
                                        <h2>$756</h2>
                                        <span className="text-muted f-18 d-block">January 2017</span>
                                        <p className="text-muted m-b-0 p-t-40">Last weeks revenue</p>
                                        <span className="m-l-5 f-w-400">$56,678</span>
                                    </Col>
                                    <Col sm={4}>
                                        <Chart {...revenueGenerateWidget}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WdgetChart;