import React from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col, Card, Collapse, Table, Modal, Button} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import plus from '../../assets/images/icon/plus.png';

class DetailsProject extends React.Component {
    state = {
        accordionKey: 1,
        projectDetails: false,
        projectBrief: false
    };

    render() {
        const { accordionKey } = this.state;

        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col md={4}>
                        <Breadcrumb/>
                    </Col>
                    <Col md={8} className="text-right">
                        <ul className="nav nav-tabs customtab pro-customtab">
                            <li className="nav-item">  <NavLink className="nav-link" to="/dashboard/project/statistics"> <span>Statistics</span></NavLink> </li>
                            <li className="nav-item"> <a className="nav-link active" href={DEMO.BLANK_LINK}><span>Details</span></a> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/task-manager"><span>Task Manager</span></NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/members"><span>Members</span></NavLink> </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <Card>
                            <Card.Body>
                                <Modal size="lg" show={this.state.projectDetails} onHide={() => this.setState({ projectDetails: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h4" className="text-uppercase font-weight-bold">Project Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16 m-0 p-0 font-weight-bold">Description</h4>
                                            </Col>
                                            <Col md={9}>
                                                <textarea className="form-control text-h">TAY is eCommerce project. It’s complete shop with opportunity to buy anything anywhere for 2 minutes. The Kohinoor diamond was found in the mines of southern India, probably in the 13th century. After belonging to several warring groups in southern Asia, it finally ended up in Queen Victoria's.</textarea>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-0 p-0 font-weight-bold">Status</h4>
                                            </Col>
                                            <Col md={6}>
                                                <select className="form-control custom-select" data-placeholder="Choose a Category">
                                                    <option value="Category 1">Category 1</option>
                                                    <option value="Category 2">Category 2</option>
                                                    <option value="Category 3">Category 5</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16 m-0 p-0 font-weight-bold">Start date</h4>
                                            </Col>
                                            <Col md={6}>
                                                <input type="date" className="form-control date-icon"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={3}>
                                                <h4 className="f-16  m-0 p-0 font-weight-bold">End date</h4>
                                            </Col>
                                            <Col md={6}>
                                                <input type="date" className="form-control date-icon"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-0 p-0 font-weight-bold">Members</h4>
                                            </Col>
                                            <Col md={9}>
                                                <ul className="members-projects members-list">
                                                    <li><img src={avatar2} alt="user" className="img-radius"/></li>
                                                    <li className="dashed-div"><a href={DEMO.BLANK_LINK}><img src={plus} alt="" title="" className="img-radius"/></a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success">Save</Button>
                                        <Button variant="secondary" onClick={() => this.setState({ projectDetails: false })}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                                <h5 className="card-title float-left align-self-center tasks statistics text-uppercase">project detail</h5>
                                <a href={DEMO.BLANK_LINK} className="float-right" onClick={() => this.setState({ projectDetails: true })}><i className="fas fa-pencil-alt m-r-5"/>Edit</a>
                                <div className="clearfix"/>
                                <div className="m-t-20 no-block">
                                    <Row className="f-16">
                                        <Col lg={2} md={3} sm={12}> <span className="weight-500 text-dark">Description</span> </Col>
                                        <Col lg={10} md={9} sm={12}>
                                            <p> TAY is eCommerce project. It’s complete shop with opportunity to buy anything anywhere for 2 minutes. The Kohinoor diamond was found in the mines of southern India, probably in the 13th
                                                century. After belonging to several warring groups in southern Asia, it finally ended up in Queen Victoria's. </p>
                                        </Col>
                                    </Row>
                                    <div className="d-flex f-16">
                                        <div className="col-lg-6 p-0 row col-md-12">
                                            <div className="col-lg-4 col-md-3 col-sm-12"> <span className="weight-500 text-dark">Status</span> </div>
                                            <div className="col-lg-8 col-md-4 col-sm-12 p-l-20 ">
                                                <p> Open </p>
                                            </div>
                                            <div className="clearfix"/>
                                            <div className="col-lg-4 col-md-3 col-sm-12"> <span className="weight-500 text-dark">Start date</span> </div>
                                            <div className="col-lg-8 col-md-4 col-sm-12 p-l-20 ">
                                                <p> 12.06.2018, Monday </p>
                                            </div>
                                            <div className="clearfix"/>
                                            <div className="col-lg-4 col-md-3 col-sm-12"> <span className="weight-500 text-dark">Due date</span> </div>
                                            <div className="col-lg-8 col-md-4 col-sm-12 p-l-20 ">
                                                <p> 01.08.2018, Tuesday </p>
                                            </div>
                                            <div className="clearfix"/>
                                        </div>
                                        <div className="col-lg-6 row block col-md-12 members-projects">
                                            <div className="col-lg-12 col-md-12 col-sm-12 p-0 m-b-15"> <span className="weight-500 text-dark">Members</span> </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                                                <ul className="members-list">
                                                    <li><img src={avatar1} alt="user" className="img-radius"/></li>
                                                    <li><img src={avatar2} alt="user" className="img-radius"/></li>
                                                    <li><img src={avatar3} alt="user" className="img-radius"/></li>
                                                    <li><img src={avatar4} alt="user" className="img-radius"/></li>
                                                    <li><img src={avatar5} alt="user" className="img-radius"/></li>
                                                    <li>
                                                        <div className="circle-div">+18</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12} md={12}>
                        <Card>
                            <Card.Body>
                                <Modal size="lg" show={this.state.projectBrief} onHide={() => this.setState({ projectBrief: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h4" className="text-uppercase font-weight-bold">Project Brief</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}/>
                                            <Col md={9}>
                                                <div className="boder-box">+ Add question</div>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15 p-0 font-weight-bold">Title</h4>
                                            </Col>
                                            <Col md={9}>
                                                <input type="text" value="1. What business are you doing?" className="form-control text-dark text-box"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-10">
                                            <Col md={3}>
                                                <h4 className="f-16 m-t-15 p-0 font-weight-bold"> boder-box</h4>
                                            </Col>
                                            <Col md={9}>
                                                <textarea className="form-control text-h2" rows="3">In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force.</textarea>
                                            </Col>
                                        </Row>
                                        <div className="clearfix"/>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15 p-0 font-weight-bold">Title</h4>
                                            </Col>
                                            <Col md={9}>
                                                <input type="text" value="2. What colors do you like?" className="form-control text-box"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15  p-0 font-weight-bold">Option</h4>
                                            </Col>
                                            <Col md={9}>
                                                <textarea rows="3" className="form-control text-h2  "> I like red, orange and brown colors. </textarea>
                                            </Col>
                                        </Row>
                                        <Row className="form-group text-right">
                                            <Col>
                                                <a href={DEMO.BLANK_LINK}><i className="fas fa-pencil-alt m-r-5 op-3"/></a>&nbsp;&nbsp;
                                                <a href={DEMO.BLANK_LINK} className="float-right"><i className="fa fa-trash text-danger op-3"/><span className="sr-only">1</span> </a>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15 p-0 font-weight-bold">Title</h4>
                                            </Col>
                                            <Col md={9}>
                                                <input type="text" value="2. What colors do you like?" className="form-control  text-dark text-box"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-40">
                                            <Col md={3}>
                                                <h4 className="f-16 m-t-15 p-0 font-weight-bold">Option</h4>
                                            </Col>
                                            <Col md={9}>
                                                <textarea rows="3" className="form-control text-h2  text-dark ">I like red, orange and brown colors.</textarea>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15 p-0 font-weight-bold">Title</h4>
                                            </Col>
                                            <Col md={9}>
                                                <input type="text" value="3. What colors do you like?" className="form-control  text-box"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-40">
                                            <Col md={3}>
                                                <h4 className="f-16 m-t-15 p-0 font-weight-bold">Option</h4>
                                            </Col>
                                            <Col md={9}>
                                                <textarea rows="3" className="form-control text-h2">I like red, orange and brown colors.</textarea>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-20">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15 p-0 font-weight-bold">Title</h4>
                                            </Col>
                                            <Col md={9}>
                                                <input type="text" value="4. What colors do you like?" className="form-control text-box"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group m-b-30">
                                            <Col md={3}>
                                                <h4 className="f-16  m-t-15 p-0 font-weight-bold">Option</h4>
                                            </Col>
                                            <Col md={9}>
                                                <textarea rows="3" className="form-control text-h2">I like red, orange and brown colors.</textarea>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success">Save</Button>
                                        <Button variant="secondary" onClick={() => this.setState({ projectBrief: false })}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                                <h5 className="card-title float-left align-self-center text-uppercase">project Brief</h5>
                                <a href={DEMO.BLANK_LINK} className="float-right" onClick={() => this.setState({ projectBrief: true })}><i className="fas fa-pencil-alt m-r-5"/>Edit</a>
                                <div className="clearfix"/>
                                <div className="m-t-10 no-block">
                                    <div id="accordion" className="panel-group">
                                        <Card className="m-b-10">
                                            <Card.Header>
                                                <a className="card-link active"
                                                   href={DEMO.BLANK_LINK}
                                                   onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                                   aria-controls="accordion1"
                                                   aria-expanded={accordionKey === 1}> 1. What business are you doing?
                                                    <i className="fas fa-plus float-right"/>
                                                </a>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 1}>
                                                <Card.Body className="f-16 p-20 m-t-10 text-dark"> In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force. </Card.Body>
                                            </Collapse>
                                        </Card>
                                        <Card className="m-b-10">
                                            <Card.Header>
                                                <a className="card-link"
                                                   href={DEMO.BLANK_LINK}
                                                   onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                                                   aria-controls="accordion2"
                                                   aria-expanded={accordionKey === 2}> 2. What colors do you like?
                                                    <i className="fas fa-plus float-right"/>
                                                </a>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 2}>
                                                <Card.Body className="f-16 m-t-10 text-dark"> In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force. </Card.Body>
                                            </Collapse>
                                        </Card>
                                        <Card className="m-b-10">
                                            <Card.Header>
                                                <a className="card-link"
                                                   href={DEMO.BLANK_LINK}
                                                   onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                                   aria-controls="accordion3"
                                                   aria-expanded={accordionKey === 3}> 3. Do you have some style suggestions?
                                                    <i className="fas fa-plus float-right"/>
                                                </a>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 3}>
                                                <Card.Body className="f-16 m-t-10 text-dark"> In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force. </Card.Body>
                                            </Collapse>
                                        </Card>
                                        <Card className="m-b-10">
                                            <Card.Header className="card-header">
                                                <a className="card-link"
                                                   href={DEMO.BLANK_LINK}
                                                   onClick={() => this.setState({ accordionKey: (accordionKey !== 4) ? 4 : 0 })}
                                                   aria-controls="accordion4"
                                                   aria-expanded={accordionKey === 4}>4. Do you have a logotype or brand identity?
                                                    <i className="fas fa-plus float-right"/>
                                                </a>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 4}>
                                                <Card.Body className="f-16 m-t-10 text-dark"> In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force. </Card.Body>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12} md={12}>
                        <Card>
                            <Card.Body>
                                <h5 className="card-title float-left m-b-40 align-self-center text-uppercase">Attachments</h5>
                                <a href={DEMO.BLANK_LINK} className="float-right"><i className="fas fa-paperclip m-r-5"/>Attach</a>
                                <div className="clearfix"/>
                                <Table responsive className="table color-table primary-table">
                                    <thead>
                                    <tr>
                                        <th>Document Name </th>
                                        <th>Attached by</th>
                                        <th>Date</th>
                                        <th>Size</th>
                                        <th className="icon-color"><i className="fa fa-download" aria-hidden="true"></i></th>
                                        <th className="icon-color2"><i className="fa fa-trash" aria-hidden="true"></i></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="font-bold">1. Documentation.pdf</td>
                                        <td>Brian Summerhoold</td>
                                        <td>25.05.2017, 11:15</td>
                                        <td>2 Mb</td>
                                        <td className="icon-color op-5"><i className="fa fa-download" aria-hidden="true"></i></td>
                                        <td className="icon-color2 op-5"><i className="fa fa-trash text-danger" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">2. Contract.pdf</td>
                                        <td>Brian Summerhoold</td>
                                        <td>25.05.2017, 12:03</td>
                                        <td>1.5 Mb</td>
                                        <td className="icon-color op-5"><i className="fa fa-download" aria-hidden="true"></i></td>
                                        <td className="icon-color2 op-5"><i className="fa fa-trash text-danger" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">3. Logotype.psd</td>
                                        <td>Brian Summerhoold</td>
                                        <td>25.05.2017, 14:26</td>
                                        <td>2 Mb</td>
                                        <td className="icon-color op-5"><i className="fa fa-download" aria-hidden="true"></i></td>
                                        <td className="icon-color2 op-5"><i className="fa fa-trash text-danger" aria-hidden="true"></i></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8} md={12}>
                        <Card>
                            <Card.Body className="position-relative">
                                <h5 className="card-title float-left  align-self-center text-uppercase">Meetings Schedule</h5>
                                <div className="clearfix"/>
                                <Row className="scrollbox">
                                    <Col id="slimtest4">
                                        <div style={{'height': '330px'}}>
                                            <PerfectScrollbar>
                                                <div className="text-light-blue mb-1"> Monday, 26.06.2017 </div>
                                                <Table responsive className="color-table primary-table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="radio radio-custom radio-primary p-0 m-0">
                                                            <input type="radio" name="radio" id="radio12" value="option2"/>
                                                            <label htmlFor="radio12"/>
                                                        </div>
                                                    </td>
                                                    <td className="font-weight-bold">Meetings with Partners Nocla</td>
                                                    <td className="line-h">Astro meeting room,<br/>Sander St. 50/4</td>
                                                    <td>12:00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="radio radio-custom  radio-primary p-0 m-0">
                                                            <input type="radio" name="radio" id="radio13" value="option2"/>
                                                            <label htmlFor="radio13"/>
                                                        </div>
                                                    </td>
                                                    <td className="font-weight-bold">Meetings with Partners Nocla</td>
                                                    <td className="line-h">Astro meeting room,<br/>Sander St. 50/4</td>
                                                    <td>12:00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="radio radio-custom  radio-primary p-0 m-0">
                                                            <input type="radio" name="radio" id="radio15" value="option2"/>
                                                            <label htmlFor="radio15"/>
                                                        </div>
                                                    </td>
                                                    <td className="font-weight-bold">Meetings with Partners Nocla</td>
                                                    <td className="line-h">Astro meeting room,<br/>Sander St. 50/4</td>
                                                    <td>12:00</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                                <div className="clearfix"/>
                                                <div className="text-light-blue mb-1">Thursday, 27.06.2017</div>
                                                <div className="clearfix"/>
                                                <Table responsive className="color-table primary-table">
                                                <tbody>
                                                <tr>
                                                    <td className="font-bold">
                                                        <div className="radio radio-custom  radio-primary">
                                                            <input type="radio" name="radio" id="radio14" value="option2"/>
                                                            <label htmlFor="radio14"/>
                                                        </div>
                                                    </td>
                                                    <td className="font-weight-bold">Business lection in Hotel</td>
                                                    <td>Astro meeting room,<br/>Sander St. 50/4</td>
                                                    <td>12:00</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-bold">
                                                        <div className="radio radio-custom  radio-primary">
                                                            <input type="radio" name="radio" id="radio18" value="option2"/>
                                                            <label htmlFor="radio18"/>
                                                        </div>
                                                    </td>
                                                    <td className="font-weight-bold">Meetings with Partners Nocla</td>
                                                    <td>Astro meeting room,<br/>Sander St. 50/4</td>
                                                    <td>12:00</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-bold">
                                                        <div className="radio radio-custom  radio-primary">
                                                            <input type="radio" name="radio" id="radio16" value="option2"/>
                                                            <label htmlFor="radio16"/>
                                                        </div>
                                                    </td>
                                                    <td className="font-weight-bold">Meetings with Partners Nocla</td>
                                                    <td>Astro meeting room,<br/>Sander St. 50/4</td>
                                                    <td>12:00</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            </PerfectScrollbar>
                                        </div>
                                    </Col>
                                    <div className="clearfix"/>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div id="scrollbox">
                            <Card className="m-0">
                                <Card.Body>
                                    <Col className="p-0" id="slimtest2">
                                        <h5 className="card-title float-left m-t-20 m-r-20 align-self-center text-uppercase">Comments</h5>
                                        <div className="clearfix"/>
                                        <div style={{'height': '350px'}}>
                                            <PerfectScrollbar>
                                                <Row className="comments-bg1">
                                                    <Col sm={3} className="round-img text-center"><img src={avatar2} alt="user" className="img-radius"/></Col>
                                                    <Col sm={9} className="comments">
                                                        <h3>Brian Summerhold </h3>
                                                        <h6> 26 July 2017, 05:15</h6>
                                                        <p className="line-h">On the meeting we said about<br/>time of project, money and other</p>
                                                    </Col>
                                                </Row>
                                                <div className="row comments-bg">
                                                    <div className="col-3 round-img text-center"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                    <div className="col-9 comments">
                                                        <h3>Brian Summerhold </h3>
                                                        <h6> 26 July 2017, 05:15</h6>
                                                        <p className="line-h">On the meeting we said about<br/>time of project, money and other</p>
                                                    </div>
                                                </div>
                                                <div className="row comments-bg1">
                                                    <div className="col-3 round-img text-center"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                    <div className="col-9 comments">
                                                        <h3>Brian Summerhold </h3>
                                                        <h6> 26 July 2017, 05:15</h6>
                                                        <p className="line-h">On the meeting we said about<br/>time of project, money and other</p>
                                                    </div>
                                                </div>
                                                <div className="row comments-bg1">
                                                    <div className="col-3 round-img text-center"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                    <div className="col-9 comments">
                                                        <h3>Brian Summerhold </h3>
                                                        <h6> 26 July 2017, 05:15</h6>
                                                        <p className="line-h">On the meeting we said about<br/>time of project, money and other</p>
                                                    </div>
                                                </div>
                                                <div className="row comments-bg1">
                                                    <div className="col-3 round-img text-center"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                    <div className="col-9 comments">
                                                        <h3>Brian Summerhold </h3>
                                                        <h6> 26 July 2017, 05:15</h6>
                                                        <p className="line-h">On the meeting we said about<br/>time of project, money and other</p>
                                                    </div>
                                                </div>
                                                <div className="row comments-bg1">
                                                    <div className="col-3 round-img text-center"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                    <div className="col-9 comments">
                                                        <h3>Brian Summerhold </h3>
                                                        <h6> 26 July 2017, 05:15</h6>
                                                        <p className="line-h">On the meeting we said about<br/>time of project, money and other</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"/>
                                            </PerfectScrollbar>
                                        </div>
                                    </Col>
                                </Card.Body>
                                <div className="clearfix"/>
                            </Card>
                            <div className="clearfix"/>
                        </div>
                        <div className="clearfix"/>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default DetailsProject;