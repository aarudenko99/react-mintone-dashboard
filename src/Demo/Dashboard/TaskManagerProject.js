import React from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col, Card, Table, Modal, Button} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

import avatar2 from '../../assets/images/user/avatar-2.jpg';

class TaskManagerProject extends React.Component {
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
                            <li className="nav-item"> <a className="nav-link active" href={DEMO.BLANK_LINK}><span>Task Manager</span></a> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/dashboard/project/members"><span>Members</span></NavLink> </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Modal show={this.state.newTask} onHide={() => this.setState({ newTask: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h4" className="text-uppercase font-weight-bold">Assign members</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="p-0">
                                        <Table responsive className="color-table primary-table table2">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                </td>
                                                <td className="font-weight-bold">Roberto Jovanni</td>
                                                <td>developer</td>
                                                <td><input type="radio"/></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                </td>
                                                <td className="font-weight-bold">Roberto Jovanni</td>
                                                <td>developer</td>
                                                <td><input type="radio"/></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                </td>
                                                <td className="font-weight-bold">Roberto Jovanni</td>
                                                <td>developer</td>
                                                <td><input type="radio"/></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                </td>
                                                <td className="font-weight-bold">Roberto Jovanni</td>
                                                <td>developer</td>
                                                <td><input type="radio"/></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                </td>
                                                <td className="font-weight-bold">Roberto Jovanni</td>
                                                <td>developer</td>
                                                <td><input type="radio"/></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img"><img src={avatar2} alt="user" className="img-radius"/></div>
                                                </td>
                                                <td className="font-weight-bold">Roberto Jovanni</td>
                                                <td>developer</td>
                                                <td><input type="radio"/></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                        <div className="clearfix"/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success">Save</Button>
                                        <Button variant="secondary" onClick={() => this.setState({ newTask: false })}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                                <Row>
                                    <Col md={3} sm={3}>
                                        <h5 className="card-title float-left align-self-center text-uppercase">tasks</h5>
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
                                <div className="clearfix"/>
                                <div className="mt-3">
                                    <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-12">
                                        <li><i className="fa fa-circle m-r-5 f-10 text-primary"/> New</li>
                                        <li><i className="fa fa-circle m-r-5 f-10 text-warning"/> In process</li>
                                        <li><i className="fa fa-circle m-r-5 f-10 text-success"/> Done</li>
                                    </ul>
                                </div>
                                <div className="clearfix"/>
                                <Table responsive className="color-table primary-table">
                                    <thead>
                                    <tr>
                                        <th className="w-20"> </th>
                                        <th>Task Name</th>
                                        <th>Assignee</th>
                                        <th>Date</th>
                                        <th/>
                                        <th/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <ul className="list-inline text-uppercase m-0 font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-warning"/></li>
                                            </ul>
                                        </td>
                                        <td>Main menu, different variations </td>
                                        <td className="font-bold">Brian Summerhoold</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-success"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase  m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10  text-warning"/></li>
                                            </ul>
                                        </td>
                                        <td>Left, tight sidebar</td>
                                        <td className="font-bold">John Donovan</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-success"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-warning"/></li>
                                            </ul>
                                        </td>
                                        <td>Left, tight sidebar</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-warning"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-primary"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Content search</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-warning"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-primary"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-primary"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-success"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-primary"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-success"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-success"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-warning"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-success"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-warning"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
                                        <td className="text-light-blue"><a href={DEMO.BLANK_LINK} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul className="list-inline  text-uppercase m-0  font-medium font-12">
                                                <li><i className="fa fa-circle f-10 text-success"/></li>
                                            </ul>
                                        </td>
                                        <td>Style guide</td>
                                        <td className="font-bold">Alice Brodwain</td>
                                        <td>26.06.2017, 04:02</td>
                                        <td className="text-warning"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></td>
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

export default TaskManagerProject;