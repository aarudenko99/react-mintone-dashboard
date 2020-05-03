import React from 'react';
import {Row, Col, Card, ProgressBar} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import DEMO from "../../store/constant";

import profileCover from '../../assets/images/widget/profile-person1.jpg';

class UserProfile extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col lg={3} md={3} className="mail-list">
                        <Card>
                            <Card.Body>
                                <a href={DEMO.BLANK_LINK} className="btn btn-rounded btn-primary waves-effect waves-light btn-block">Edit Profile</a>
                            </Card.Body>
                            <ul className="list-group list-group-full">
                                <li className="list-group-item"><a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-user"/> Profile</a> </li>
                                <li className="list-group-item"><a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-file-text"/> Biography</a> </li>
                                <li className="list-group-item"><a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-file"/> Skills</a></li>
                                <li className="list-group-item"><a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-briefcase"/> Experience</a></li>
                                <li className="list-group-item"><a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-map"/> Education</a> </li>
                                <li className="list-group-item"><a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-settings"/> Settings</a></li>
                            </ul>
                        </Card>
                    </Col>
                    <Col lg={9} md={9}>
                        <Card>
                            <Card.Body className="card2 pt-3">
                                <Row>
                                    <Col lg={6} md={9} className="f-18 font-weight-bold text-uppercase">Profile</Col>
                                    <Col lg={6} md={9} className="text-right f-16 font-weight-bold text-uppercase profile-social">
                                        <ul>
                                            <li><a href={DEMO.BLANK_LINK} className="icoFacebook" title="Facebook"><i className="feather icon-facebook"/></a></li>
                                            <li><a href={DEMO.BLANK_LINK} className="icoTwitter" title="Twitter"><i className="feather icon-twitter"/> </a></li>
                                            <li><a href={DEMO.BLANK_LINK} className="icoGoogle" title="Google +"><i className="feather icon-github"/></a></li>
                                            <li><a href={DEMO.BLANK_LINK} className="icoGoogle" title="Google +"><i className="feather icon-credit-card"/></a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <Row>
                                    <Col md={4} className="m-b-20 text-center"><img src={profileCover} className="img-fluid" alt="" title=""/></Col>
                                    <Col md={8}>
                                        <h2 className="f-24 font-medium">Brian Summerhoold</h2>
                                        <p className="m-b-20">Online</p>
                                        <div className="row mb-2">
                                            <div className="col-3 font-weight-bold text-dark">Position</div>
                                            <div className="col">content manager</div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-3 font-weight-bold text-dark">Age</div>
                                            <div className="col">25 years</div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-3 font-weight-bold text-dark">Address</div>
                                            <div className="col">New York, Lancer St. 15/10, USA</div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-3 font-weight-bold text-dark">Phone</div>
                                            <div className="col">+9 70 12 102 500</div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-3 font-weight-bold text-dark">Email</div>
                                            <div className="col"><a href="mailto:johndonov@gmail.com" className="text-inverse">johndonov@gmail.com</a></div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-3 font-weight-bold text-dark">Web site</div>
                                            <div className="col"><a href={DEMO.BLANK_LINK} className="text-inverse">joedonovan.com</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="card2 pt-5">
                                <Row>
                                    <Col lg={12} md={12} className="f-18 font-weight-bold text-uppercase">biography</Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <Row>
                                    <Col md={12} className="f-16">
                                        <p> Glenn was born in Ohio in 1921. In his early life he was a fighter pilot in the Marine Corps during World War II and the Korean War. After the war he attended classes at the University of Maryland where he got a
                                            degree in chemistry.
                                            <br/>
                                            <br/>
                                                Towards the end of the 1950s it had become clear that America was in fierce competition with the Soviet Union to send a man into space and bring him safely back to Earth. NASA chose 7 test pilots who would become
                                                astronauts in the Mercury program and John Glenn was one of them.
                                            <br/>
                                            <br/>
                                                John Glenn was one of NASA’s first astronauts and the first American to orbit the Earth. He belonged to the “Mercury 7”.
                                        </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="card2 pt-5">
                                <Row>
                                    <Col lg={12} md={12} className="f-18 font-weight-bold text-uppercase">SKILL</Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className="pb-5">
                                <Row>
                                    <Col lg={6} md={6}>
                                        <h5 className="f-14 text-inverse">Photoshop<span className="pull-right">55%</span></h5>
                                        <ProgressBar now={55} style={{'height': '6px'}}/>
                                        <h5 className="f-14 m-t-20 text-inverse">Illustrator<span className="pull-right">64%</span></h5>
                                        <ProgressBar now={64} style={{'height': '6px'}}/>
                                        <h5 className="f-14 m-t-20 text-inverse">InDesign<span className="pull-right">35%</span></h5>
                                        <ProgressBar now={35} style={{'height': '6px'}}/>
                                        <h5 className="f-14 m-t-20 text-inverse">Powerpoint<span className="pull-right">95%</span></h5>
                                        <ProgressBar now={95} style={{'height': '6px'}}/>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <h5 className="f-14 text-inverse">Wordpress<span className="pull-right">55%</span></h5>
                                        <ProgressBar now={55} style={{'height': '6px'}}/>
                                        <h5 className="f-14 m-t-30 text-inverse">Drupal<span className="pull-right">64%</span></h5>
                                        <ProgressBar now={64} style={{'height': '6px'}}/>
                                        <h5 className="f-14 m-t-30 text-inverse">English<span className="pull-right">95%</span></h5>
                                        <ProgressBar now={95} style={{'height': '6px'}}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="card2 pt-5">
                                <Row>
                                    <Col lg={12} md={12} className="f-18 font-weight-bold text-uppercase">Experience</Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <Row>
                                    <Col className="f-14 font-weight-bold m-b-20"><span className="fa fa-circle text-danger circle-tab mr-3"/> September 2015 - Now </Col>
                                    <Col className="m-b-20">
                                        <span className="font-bold">Web agency Styler</span>
                                        <div className="clearfix"/>
                                        <span className="mt-2 d-block m-b-10">content manager</span>
                                    </Col>
                                    <Col className="font-weight-bold m-b-20"> Working with CMS Wordpress. </Col>
                                </Row>
                                <div className="boder-li"/>
                                <Row>
                                    <Col className="f-14 font-weight-bold m-b-20"><span className="fa fa-circle text-danger circle-tab mr-3"/> May 2013 - September 2015 </Col>
                                    <Col> <span className="font-bold text-dark">Google corporation </span> <span className="mt-2 d-block">copywriter</span> </Col>
                                    <Col className="font-weight-bold m-b-20">Learned the basics of programming and made many different projects.</Col>
                                </Row>
                                <div className="boder-li"/>
                                <Row className="row">
                                    <Col className="f-14 font-weight-bold m-b-20"><span className="fa fa-circle text-danger circle-tab mr-3"/> March 2012 - May 2013</Col>
                                    <Col> <span className="font-bold text-dark">London web studio</span><br/>
                                        <span className="mt-2 d-block">client manager</span>
                                    </Col>
                                    <Col className="font-weight-bold m-b-20">Worked with different teams and clients. Improved my communication skills.</Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="card2 pt-5 pb-2">
                                <Row>
                                    <Col className="f-18 font-weight-bold text-uppercase">Education</Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <Row>
                                    <Col className="f-14 font-weight-bold m-b-20"><span className="fa fa-circle text-danger circle-tab mr-3"/> April 2014 - November 2016</Col>
                                    <Col>
                                        <span className="font-bold text-dark">Computer engineering</span>
                                        <div className="clearfix"/>
                                        <span className="mt-2 d-block">Master</span>
                                    </Col>
                                    <Col className="font-weight-bold m-b-20">London School of Economics and Political Science</Col>
                                </Row>
                                <div className="boder-li"/>
                                <Row>
                                    <Col className="font-weight-bold m-b-20"><span className="fa fa-circle text-danger circle-tab mr-3"/>September 2012 - April 2014</Col>
                                    <Col>
                                        <span className="font-bold text-dark">Google corporation </span>
                                        <div className="clearfix"/>
                                        <span className="mt-2 d-block">Bachelor</span>
                                    </Col>
                                    <Col className="font-weight-bold">Imperial College London</Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UserProfile