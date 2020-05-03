import React from 'react';
import Chart from "react-apexcharts";
import {NavLink} from 'react-router-dom';
import {Row, Col, Card, ProgressBar} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

import projectTaskChart from './chart/project-task-chart';

class StatisticsProject extends React.Component {
    render() {
        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col md={4}>
                        <Breadcrumb/>
                    </Col>
                    <Col md={8} className="text-right">
                        <ul className="nav nav-tabs customtab pro-customtab">
                            <li className="nav-item"> <a className="nav-link active" href={DEMO.BLANK_LINK}><span>Statistics</span></a> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/details"> <span>Details</span></NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/task-manager"><span>Task Manager</span></NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/members"><span>Members</span></NavLink> </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="p-10 no-block text-center">
                                    <div className="align-slef-center">
                                        <h2 className="m-b-0">68%</h2>
                                        <h6 className="text-muted m-b-25">Tasks done</h6>
                                    </div>
                                    <ProgressBar variant="success" now={80} style={{'height': '5px'}} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="p-10 no-block text-center">
                                    <div className="align-slef-center">
                                        <h2 className="m-b-0">31%</h2>
                                        <h6 className="text-muted m-b-25">In process Tasks</h6>
                                    </div>
                                    <ProgressBar variant="warning" now={31} style={{'height': '5px'}} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card>
                            <Card.Body>
                                <div className="p-10 no-block text-center">
                                    <div className="align-slef-center">
                                        <h2 className="m-b-0">21%</h2>
                                        <h6 className="text-muted m-b-25">Tasks done</h6>
                                    </div>
                                    <ProgressBar now={21} style={{'height': '5px'}} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="d-flex m-b-10 no-block">
                                            <h5 className="card-title m-b-0 align-self-center text-uppercase">tasks statistics</h5>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} className="text-right">
                                        <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-12">
                                            <li>Last week</li>
                                            <li>Last month</li>
                                            <li><i className="flaticon-calendar text-primary f-16"/></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className="clearfix"/>
                                <Chart {...projectTaskChart}/>
                                <div className="clearfix"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default StatisticsProject;