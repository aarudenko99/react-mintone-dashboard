import React from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col, Card, Table, Modal, Button} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

class MembersProject extends React.Component {
    state = {
        newTask: false
    };

    render() {
        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col md={4}>
                        <Breadcrumb/>
                    </Col>
                    <Col md={8} className="text-right">
                        <ul className="nav nav-tabs customtab pro-customtab">
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/statistics"><span>Statistics</span></NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/details"> <span>Details</span></NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/task-manager"><span>Task Manager</span></NavLink> </li>
                            <li className="nav-item"> <a className="nav-link active" href={DEMO.BLANK_LINK}><span>Members</span></a> </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Modal show={this.state.newTask} onHide={() => this.setState({ newTask: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h4" className="text-uppercase font-weight-bold">Add members</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="p-5">
                                        <Row className="form-group">
                                            <label className="control-label text-dark font-weight-bold col-md-4">Profile photo</label>
                                            <Col md={8}>
                                                <Row>
                                                    <Col sm={2}>
                                                        <div className=""><img src={avatar2} alt="user" className="wid-40 img-radius"/></div>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <i className="fa fa-upload text-light-blue" aria-hidden="true"/>
                                                        <span className="text-light-blue">Upload photo</span>
                                                        <br/>
                                                        <span className="op-4">not more 1 Mb </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="text-dark font-weight-bold col-md-4">Name</label>
                                            <Col md={8}>
                                                <input type="text" placeholder="Name" className="form-control"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="text-dark font-weight-bold col-md-4">Surname</label>
                                            <Col md={8}>
                                                <input type="text" placeholder="Surname" className="form-control"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="text-dark font-weight-bold col-md-4">Position</label>
                                            <Col md={8}>
                                                <input type="text" placeholder="Surname" className="form-control"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="text-dark font-weight-bold col-md-4">Email address</label>
                                            <Col md={8}>
                                                <input type="text" placeholder="Email address" className="form-control"/>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <label className="text-dark font-weight-bold col-md-4">Phone number</label>
                                            <Col md={8}>
                                                <input type="text" placeholder="Phone number" className="form-control"/>
                                            </Col>
                                        </Row>
                                        <div className="clearfix"/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success">Save</Button>
                                        <Button variant="secondary" onClick={() => this.setState({ newTask: false })}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                                <Row>
                                    <Col md={3} sm={3}>
                                        <h5 className="card-title float-left align-self-center text-uppercase">Members</h5>
                                    </Col>
                                    <Col md={9} sm={9}>
                                        <div className="float-right d-none d-xl-inline-block d-lg-inline-block">
                                            <div className="search">
                                                <span className="fa fa-search"/>
                                                <input placeholder="Search.."/>
                                            </div>
                                            <a href={DEMO.BLANK_LINK} onClick={() => this.setState({ newTask: true })} className="float-right btn waves-effect waves-light btn-rounded btn-primary">Add Task</a>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="clearfix mt-3"/>
                                <Table responsive className="color-table primary-table">
                                    <thead>
                                    <tr>
                                        <th> </th>
                                        <th>Member</th>
                                        <th>Posistion</th>
                                        <th>Email address</th>
                                        <th>Phone</th>
                                        <th> </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar1} alt="user" className="img-radius"/></div>
                                        </td>
                                        <td className="font-bold"> John Donovan </td>
                                        <td>designer</td>
                                        <td>johnnydonovan@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                        </td>
                                        <td className="font-bold"> Alice Brodwain </td>
                                        <td>developer</td>
                                        <td>alicebrodwain@gmail.com</td>
                                        <td>+9 70 93 100 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar3} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold"> Samanta Yakobsen </td>
                                        <td>manager</td>
                                        <td>samantayak@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar4} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold">Brian Summerhoold</td>
                                        <td>developer</td>
                                        <td>briansummer@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar5} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold"> John Donovan </td>
                                        <td>designer</td>
                                        <td>johnnydonovan@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar1} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold"> John Donovan </td>
                                        <td>designer</td>
                                        <td>johnnydonovan@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar2} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold">Rebecca Raiden</td>
                                        <td>developer</td>
                                        <td>johnnydonovan@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar3} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold">Elon Frankson</td>
                                        <td>front-end developer</td>
                                        <td>elonelon@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar4} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold">Tobias MacKeaney</td>
                                        <td>back-end developer</td>
                                        <td>tobimackeaney@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar5} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold"> Jessica Sandmayer</td>
                                        <td>art director</td>
                                        <td>johnnydonovan@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar1} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold">Alexander Fray</td>
                                        <td>art director</td>
                                        <td>alexfray@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="round-img"><img src={avatar2} alt="user" className=""/></div>
                                        </td>
                                        <td className="font-bold"> Roberto Jovanni</td>
                                        <td>developer</td>
                                        <td>roubertojovanni@gmail.com</td>
                                        <td>+9 70 93 123 500</td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <div className="row">
                                    <div className="col-md-6 page-n">Show: <a href={DEMO.BLANK_LINK} className="active">10</a> <a href={DEMO.BLANK_LINK}>20</a> <a href={DEMO.BLANK_LINK}>50</a></div>
                                    <div className="col-md-6 text-right page-n">Prev
                                        <a href={DEMO.BLANK_LINK} className="active">1</a>
                                        <a href={DEMO.BLANK_LINK}>2</a>
                                        <a href={DEMO.BLANK_LINK}>3</a> ...
                                        <a href={DEMO.BLANK_LINK}>10</a>
                                        <a href={DEMO.BLANK_LINK}>11</a>
                                        <a href={DEMO.BLANK_LINK}>12</a>
                                        <a href={DEMO.BLANK_LINK}>Next</a>
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

export default MembersProject;