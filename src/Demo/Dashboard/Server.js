import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

import serverMemoryUserChart from './chart/server-memory-user-chart';
import serverProcessesChart from './chart/server-processes-chart';
import serverLatencyChart from './chart/server-latency-chart';
import serverCpuUseChart from './chart/server-cpu-use-chart';
import serverCpuProductivityChart from './chart/server-cpu-productivity-chart';

class Server extends React.Component {
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
                    <Col md={6} lg={3}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm='auto'>
                                        <i className="icon feather icon-navigation-2 f-30 text-c-green"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Projects</h6>
                                        <h2 className="m-b-0">205</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm='auto'>
                                        <i className="icon feather icon-mail f-30 text-c-yellow"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Mails</h6>
                                        <h2 className="m-b-0">325</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm='auto'>
                                        <i className="icon feather icon-book f-30 text-c-blue"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Tickets</h6>
                                        <h2 className="m-b-0">379</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm='auto'>
                                        <i className="icon feather icon-users f-30 text-c-red"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Customers</h6>
                                        <h2 className="m-b-0">5984</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">Memory usage</h5>
                                    <div className="ml-auto text-muted-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-muted-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <Chart {...serverMemoryUserChart}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card>
                            <Card.Body className="p-b-30">
                                <div className="d-flex pt-3 p-b-20 no-block">
                                    <div className="align-self-center mr-3">
                                        <Chart {...serverProcessesChart}/>
                                    </div>
                                    <div className="align-self-center mr-auto">
                                        <h2 className="m-b-0 text-uppercase f-18 font-medium lp-5">Processes</h2>
                                        <h6 className="text-muted m-b-0">1,590</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="p-b-30">
                                <div className="p-t-20">
                                    <h2 className="m-b-0 text-uppercase f-18 font-medium lp-5  float-left">Latency</h2>
                                    <h6 className="m-b-0 float-right text-primary">2.3 ms</h6>
                                    <div className="clearfix"/>
                                    <Chart {...serverLatencyChart}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">Average CPU usage</h5>
                                </div>
                                <Chart {...serverCpuUseChart}/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12} md={12}>
                        <Card className="o-income">
                            <Card.Body>
                                <Row className="no-margin">
                                    <Col lg={8} md={12}>
                                        <div className="d-flex panel-main m-b-10 no-block panel-refresh">
                                            <h5 className="card-title m-b-0 align-self-center">CPU productivity</h5>
                                            <div className="ml-auto text-muted-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-muted-blue inline-block refresh mr-15"> <i className="fas fa-sync"/>Update</a></div>
                                        </div>
                                        <ul className="list-inline m-b-10 text-uppercase lp-5 font-medium font-12">
                                            <li className="list-inline-item"><i className="fa fa-square m-r-5 text-warning"/> CPU</li>
                                            <li className="list-inline-item"><i className="fa fa-square m-r-5 text-danger"/> Memory</li>
                                            <li className="list-inline-item"><i className="fa fa-square m-r-5 text-primary"/> Disc (C: D:)</li>
                                        </ul>
                                        <Chart {...serverCpuProductivityChart}/>
                                    </Col>
                                    <Col lg={4} md={12}>
                                        <div className="panel-main pl-5 m-b-10 no-block panel-refresh bordered-left-light bordered-css">
                                            <h5 className="card-title m-b-0 align-self-center">CPU</h5>
                                            <div className="block m-t-10 m-b-40">
                                                <div className="cpu-div-left"> <span className="block f-24 text-danger">10%</span> Using </div>
                                                <div className="cpu-div-right pl-4"> <span className="block f-24 text-primary">2.98 GHz</span> Speed </div>
                                                <div className="clearfix"/>
                                            </div>
                                            <hr/>
                                            <h5 className="card-title m-t-30 m-b-0 align-self-center">Memory</h5>
                                            <div className="block m-t-10 m-b-40">
                                                <div className="cpu-div-left"> <span className="block f-24 text-danger">4.4 Gb</span> Using </div>
                                                <div className="cpu-div-right pl-4"> <span className="block f-24 text-primary">3.6 Gb GHz</span> Available </div>
                                                <div className="clearfix"/>
                                            </div>
                                            <hr/>
                                            <h5 className="card-title m-t-30  m-b-0 align-self-center">Disc (C: D:)</h5>
                                            <div className="block m-t-10 m-b-30">
                                                <div className="cpu-div-left"> <span className="block f-24 text-danger">12%</span> Activity time </div>
                                                <div className="cpu-div-right pl-4"> <span className="block f-24 text-primary">27.5 ms</span> Response time </div>
                                                <div className="clearfix"/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">Process explorer</h5>
                                    <div className="ml-auto text-muted-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-muted-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <Row className="scrollbox">
                                    <Col lg={12} id="slimtest1">
                                        <div className="m-t-10">
                                            <Table responsive bordered hover id="myTable">
                                                <thead>
                                                    <tr>
                                                        <th>Process Name</th>
                                                        <th>User</th>
                                                        <th>Avg. CPU</th>
                                                        <th>Avg. Mem.</th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Database Backup</td>
                                                        <td>Alice Brodwain</td>
                                                        <td>14%</td>
                                                        <td>161 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Form creating in task mana...</td>
                                                        <td>Accountant</td>
                                                        <td>4%</td>
                                                        <td>63 mb</td>
                                                        <td><a href={DEMO.BLANK_LINK}><i className="fas fa-trash-alt text-danger op-5"/></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add new products in shop</td>
                                                        <td>Donald Frankson</td>
                                                        <td>5%</td>
                                                        <td>22 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Form creating in task mana...</td>
                                                        <td>Robert Downing</td>
                                                        <td>4%</td>
                                                        <td>159 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Database backup</td>
                                                        <td>Donald Frankson</td>
                                                        <td>11%</td>
                                                        <td>61 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add new products in shop</td>
                                                        <td>Alice Brodwain</td>
                                                        <td>13%</td>
                                                        <td>23 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add new products in shop</td>
                                                        <td>Alice Brodwain</td>
                                                        <td>13%</td>
                                                        <td>23 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add new products in shop</td>
                                                        <td>Alice Brodwain</td>
                                                        <td>13%</td>
                                                        <td>23 mb</td>
                                                        <td> 1 </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card className="panel-main random-data o-income panel-refresh">
                            <Card.Body className="p-10 panel-wrapper">
                                <div className="d-flex m-t-10 p-l-10 m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">I/O Activity</h5>
                                    <div className="ml-auto text-muted-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-muted-blue inline-block refresh m-r-15"><i className="fas fa-sync"/>Update</a></div>
                                </div>
                                <div className="table-wrapper bookmarking">
                                    <div className="bookmarking-main"> <span><i className="fas fa-circle text-primary"/>Input</span><span><i className="fas fa-circle text-warning"/>Output</span> </div>
                                    <div className="scrollbox">
                                        <Table hover responsive className="m-b-5">
                                            <tbody>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-primary"/>Database backup</span></td>
                                                <td>Beavis</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-warning"/>Form creating in task...</span></td>
                                                <td>Felix</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-warning"/>Add new products in...</span></td>
                                                <td>Neosoft</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-warning"/>Form creating in task...</span></td>
                                                <td>Felix</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-primary"/>Form creating in task...</span></td>
                                                <td>Cannibus</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-warning"/>Database backup</span></td>
                                                <td>Beavis</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-primary"/>Form creating in task...</span></td>
                                                <td>Felix</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-primary"/>Creating form statistics</span></td>
                                                <td>Cannibus</td>
                                            </tr>
                                            <tr>
                                                <td><span className="txt-dark weight-500"><i className="fas fa-circle text-warning"/>Add new products in...</span></td>
                                                <td>Neosoft</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Server;