import React from 'react';
import {Row, Col, Card, ProgressBar, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar2 from '../../assets/images/user/avatar-2.jpg'
import avatar3 from '../../assets/images/user/avatar-3.jpg'
import avatar4 from '../../assets/images/user/avatar-4.jpg'

class WdgtStatistic extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Header>
                                <div className="card-header-left">
                                    <h5>Sales</h5>
                                </div>
                                <div className="card-header-right">
                                    <i className="icofont icofont-spinner-alt-5"/>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-b-30">
                                <h2>$ 17,400</h2>
                                <p className="text-muted m-b-10">Total revenue</p>
                                <Row>
                                    <Col sm={6} xs={12}>
                                        <p className="text-c-green f-16 m-0 f-w-400">472</p>
                                        <span className="text-muted">Deals added</span>
                                        <div className="m-t-20">
                                            <ProgressBar now={69} variant='success'/>
                                        </div>
                                    </Col>
                                    <Col sm={6} xs={12}>
                                        <p className="text-c-blue f-16 m-0 f-w-400">89</p>
                                        <span className="text-muted">Deals won</span>
                                        <div className="m-t-20">
                                            <ProgressBar now={58} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Header>
                                <h5>Customer satisfaction</h5>
                            </Card.Header>
                            <Card.Body>
                                <h2 className="text-c-green m-0 text-center f-w-400">89.73%</h2>
                                <div className="m-t-30 m-b-30">
                                    <ProgressBar variant='success' now={85}/>
                                </div>
                                <Row>
                                    <Col sm={6} md={4} className="text-center">
                                        <p className="text-muted m-b-5 f-14">previous</p>
                                        <h6 className="">56.75</h6>
                                    </Col>
                                    <Col sm={6} md={4} className="text-center">
                                        <p className="text-muted m-b-5 f-14">% Change</p>
                                        <h6 className="">+12.60</h6>
                                    </Col>
                                    <Col sm={12} md={4} className="text-center">
                                        <p className="text-muted m-b-5 f-14">Trend</p>
                                        <h6 className="">23.78</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={4}>
                        <Card className="online-form">
                            <Card.Header>
                                <h5>Online forms</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col sm={6} className="m-b-10">
                                        <h3>68</h3>
                                        <p className="text-muted m-0">New submissions</p>
                                    </Col>
                                    <Col sm={6} className="m-b-10">
                                        <h3>234</h3>
                                        <p className="text-muted m-0">New contacts</p>
                                    </Col>
                                </Row>
                                <div className="border-top m-t-5 p-t-10">
                                    <Row>
                                        <Col sm={4} className="m-t-5">
                                            <span className="f-16 f-w-400 m-0">472</span>
                                            <p className="text-muted m-b-0">Active forms</p>
                                        </Col>
                                        <Col sm={4} className="m-t-5">
                                            <span className="f-16 f-w-400 m-0">623</span>
                                            <p className="text-muted m-b-0">Forms views</p>
                                        </Col>
                                        <Col sm={4} className="m-t-5">
                                            <span className="f-16 f-w-400 m-0">34.6%</span>
                                            <p className="text-muted m-b-0">Conversion</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card className="profile-view">
                            <Card.Body>
                                <h5>Profile views</h5>
                                <strong className="text-center p-t-40 p-b-30 m-0 f-40 f-w-400 d-block">828</strong>
                                <Row>
                                    <Col className="text-center">
                                        <p className="text-muted m-b-0">By Company</p>
                                        <span className="text-c-green">456</span>
                                    </Col>
                                    <Col className="text-center">
                                        <p className="text-muted m-b-0">By Other</p>
                                        <span className="text-c-blue">125</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="profile-view">
                            <Card.Body>
                                <h5>Connection</h5>
                                <div className="p-t-50 p-b-30 text-center">
                                    <i className="feather icon-users f-50"/>
                                </div>
                                <Row>
                                    <Col className="text-center">
                                        <p className="text-muted m-b-0">Followings</p>
                                        <span className="text-c-green">456</span>
                                    </Col>
                                    <Col className="text-center">
                                        <p className="text-muted m-b-0">Follows</p>
                                        <span className="text-c-blue">125</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Header>
                                <div className="card-header-left">
                                    <h5>Referrals</h5>
                                </div>
                                <div className="card-header-right">
                                    <i className="icofont icofont-spinner-alt-5"/>
                                </div>
                            </Card.Header>
                            <Card.Body className="w-100">
                                <h2 className="f-40 m-b-20">38.1% </h2>
                                <div className="card-progress p-t-10">
                                    <Row>
                                        <Col sm={2} className="text-right">
                                            <label className="text-muted ">March</label>
                                        </Col>
                                        <Col sm={8}>
                                            <ProgressBar now={50.3}/>
                                        </Col>
                                        <Col sm={2}>
                                            <label className="text-muted ">50.3%</label>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="card-progress p-t-10">
                                    <Row>
                                        <Col sm={2} className="text-right">
                                            <label className="text-muted">February</label>
                                        </Col>
                                        <Col sm={8}>
                                            <ProgressBar variant='danger' now={42.7}/>
                                        </Col>
                                        <Col sm={2}>
                                            <label className="text-muted">42.7%</label>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="card-progress p-t-10">
                                    <Row>
                                        <Col sm={2} className="text-right">
                                            <label className="text-muted">January</label>
                                        </Col>
                                        <Col sm={8}>
                                            <ProgressBar variant='warning' now={78.4}/>
                                        </Col>
                                        <Col sm={2}>
                                            <label className="text-muted">78.4%</label>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} xl={6}>
                        <Row>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm='auto'>
                                                <i className="icon feather icon-book f-30 text-c-purple"/>
                                            </Col>
                                            <Col sm='auto'>
                                                <h6 className="text-muted m-b-10">Tickets Answered</h6>
                                                <h2 className="m-b-0">379</h2>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm='auto'>
                                                <i className="icon feather icon-navigation-2 f-30 text-c-green"/>
                                            </Col>
                                            <Col sm='auto'>
                                                <h6 className="text-muted m-b-10">Projects Launched</h6>
                                                <h2 className="m-b-0">205</h2>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm='auto'>
                                                <i className="icon feather icon-users f-30 text-c-red"/>
                                            </Col>
                                            <Col sm='auto'>
                                                <h6 className="text-muted m-b-10">Happy Customers</h6>
                                                <h2 className="m-b-0">5984</h2>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm='auto'>
                                                <i className="icon feather icon-award f-30 text-c-blue"/>
                                            </Col>
                                            <Col sm='auto'>
                                                <h6 className="text-muted m-b-10">Unique Innovation</h6>
                                                <h2 className="m-b-0">325</h2>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <Card className="text-center order-visitor-card">
                                    <Card.Body>
                                        <h6 className="m-b-0">Total Subscription</h6>
                                        <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-down m-r-15 text-c-red"/>7652</h4>
                                        <p className="m-b-0">48% From Last 24 Hours</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="text-center order-visitor-card">
                                    <Card.Body>
                                        <h6 className="m-b-0">Order Status</h6>
                                        <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-up m-r-15 text-c-green"/>6325</h4>
                                        <p className="m-b-0">36% From Last 6 Months</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="text-center order-visitor-card">
                                    <Card.Body>
                                        <h6 className="m-b-0">Unique Visitors</h6>
                                        <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-down m-r-15 text-c-red"/>652</h4>
                                        <p className="m-b-0">36% From Last 6 Months</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="text-center order-visitor-card">
                                    <Card.Body>
                                        <h6 className="m-b-0">Monthly Earnings</h6>
                                        <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-up m-r-15 text-c-green"/>5963</h4>
                                        <p className="m-b-0">36% From Last 6 Months</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} xl={6}>
                        <Card className="widget-card-user">
                            <Card.Body className="p-b-0">
                                <div className="card-user">
                                    <span className="badge badge-success float-right">NEW</span>
                                    <img src={avatar2} alt="" className="img-radius wid-80"/>
                                    <h4 className="p-t-10 p-b-10 m-t-0">Irina Shayk</h4>
                                    <span className="text-c-green f-14">California USA</span>
                                    <p className="text-muted p-t-10 p-b-10 m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top bg-light">
                                <Row>
                                    <Col sm={4} className="footer-menu text-center border-right">
                                        <p className="text-muted f-w-400 m-0 f-16">Project</p>
                                        <span className="f-14 f-w-400">345</span>
                                    </Col>
                                    <Col sm={4} className="footer-menu text-center border-right">
                                        <p className="text-muted f-w-400 m-0 f-16">Messages</p>
                                        <span className="f-14 f-w-400">3567</span>
                                    </Col>
                                    <Col sm={4} className="footer-menu text-center">
                                        <p className="text-muted f-w-400 m-0 f-16">Views</p>
                                        <span className="f-14 f-w-400">563</span>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                        <Card className="total-request-card">
                            <Card.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={2} className="text-right">
                                                <i className="fas fa-caret-down text-c-red f-24"/>
                                            </Col>
                                            <Col sm={10}>
                                                <div className="request-contain">
                                                    <h2 className="f-40">3,281</h2>
                                                    <h6 className="text-muted f-w-400 p-b-10 p-t-10">Standard scans</h6>
                                                    <ProgressBar now={50} variant='danger'/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={2} className="text-right">
                                                <i className="fas fa-caret-up text-c-green f-24"/>
                                            </Col>
                                            <Col sm={10}>
                                                <div className="request-contain">
                                                    <h2 className="f-40">3,281</h2>
                                                    <h6 className="text-muted f-w-400 p-b-10 p-t-10">Team scans</h6>
                                                    <ProgressBar now={50} variant='success'/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} xl={4}>
                        <Card className="card-contact-box ">
                            <Card.Body>
                                <div className="card-contain text-center ">
                                    <img src={avatar2} alt="" className="img-radius m-t-20"/>
                                    <h6 className="f-w-400 f-20 p-b-5 m-0 p-t-15 ">Gregory Johan</h6>
                                    <a href={DEMO.BLANK_LINK}>gregory.johan@demo.com</a>
                                    <p className="text-muted p-b-25 m-0 p-t-5 ">Software Developer</p>
                                    <div className="contain-card p-t-30 p-b-10 ">
                                        <a href={DEMO.BLANK_LINK}><img src={avatar2} data-toggle="tooltip" title="Alia" alt="" className="wid-40 img-radius"/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar3} data-toggle="tooltip" title="Suzen" alt="" className="wid-40 img-radius m-l-5"/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar4} data-toggle="tooltip" title="Lary Doe" alt="" className="wid-40 img-radius m-l-5"/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar2} data-toggle="tooltip" title="Josephin Doe" alt="" className="wid-40 img-radius m-l-5"/></a>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="border-top bg-light">
                                <Row className="m-0">
                                    <Col sm={6} className="f-btn text-center border-right p-t-15 p-b-15 ">
                                        <a href={DEMO.BLANK_LINK}>
                                            <i className="fas fa-envelope text-muted m-r-5"/>
                                            <p className="text-muted m-0 text-uppercase d-inline-block ">Messages</p>
                                        </a>
                                    </Col>
                                    <Col sm={6} className="f-btn text-center p-t-15 p-b-15 ">
                                        <a href={DEMO.BLANK_LINK}>
                                            <i className="fas fa-user text-muted m-r-5"/>
                                            <p className="text-muted m-0 text-uppercase d-inline-block ">View Profile</p>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="quater-card">
                            <Card.Body>
                                <h6 className="text-muted m-b-15">This Quarter</h6>
                                <h4>$3,9452.50</h4>
                                <p className="text-muted">$3,9452.50</p>
                                <h5 className="m-t-20 mb-1">87</h5>
                                <p className="text-muted mb-2">Online Revenue<span className="float-right">80%</span></p>
                                <ProgressBar now={80}/>
                                <h5 className="m-t-20 mb-1">68</h5>
                                <p className="text-muted mb-2">Offline Revenue<span className="float-right">50%</span></p>
                                <ProgressBar now={50} variant='success'/>
                                <h5 className="m-t-20 mb-1">68</h5>
                                <p className="text-muted mb-2">Dealer Revenue<span className="float-right">30%</span></p>
                                <ProgressBar now={30} variant='danger'/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <h5>Overdue tasks</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h2 className="m-0"><i className="feather icon-arrow-up text-c-green"/>4</h2>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="text-c-green m-0">15%</h5>
                                        <span className="d-block">Last Month:6</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm='auto'>
                                        <span>Revenue</span>
                                    </Col>
                                    <Col className="text-right">
                                        <Dropdown className="btn-group">
                                            <Dropdown.Toggle variant='secondary'>This Year</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <a className="dropdown-item" href={DEMO.BLANK_LINK}>1 Week</a>
                                                <a className="dropdown-item" href={DEMO.BLANK_LINK}>2 Month</a>
                                                <a className="dropdown-item" href={DEMO.BLANK_LINK}>4 Year</a>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <div className="mt-4">
                                    <ProgressBar now={60} style={{height: '10px'}}/>
                                </div>
                                <Row>
                                    <Col sm='auto'>
                                        <span className="text-uppercase mt-2 d-block">Earning</span>
                                        <h5 className="mb-0">$6.455</h5>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-uppercase mt-2 d-block">Expense</span>
                                        <h5 className="mb-0">$3.869</h5>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm='auto'>
                                        <span className="text-uppercase d-block">budget</span>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-uppercase d-block">Earning</span>
                                        <h5 className="mb-0">$5,569 of $1,000</h5>
                                    </Col>
                                </Row>
                                <div className="mt-2">
                                    <ProgressBar variant='success' now={50} style={{height: '10px'}}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WdgtStatistic;