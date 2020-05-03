import React from 'react';
import {Row, Col, Card, ProgressBar, Table} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import { Line } from 'peity-react';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import p1 from '../../assets/images/widget/p1.jpg';
import p2 from '../../assets/images/widget/p2.jpg';
import p3 from '../../assets/images/widget/p3.jpg';
import p4 from '../../assets/images/widget/p4.jpg';

import phone1 from '../../assets/images/widget/PHONE1.jpg';
import phone2 from '../../assets/images/widget/PHONE2.jpg';
import phone3 from '../../assets/images/widget/PHONE3.jpg';
import phone4 from '../../assets/images/widget/PHONE4.jpg';
import BasicToDo from "../../App/components/ToDo/BasicToDo";

const initialBasicTodo = [
    {
        note: 'Industry\'s standard dummy text ever since the 1500s',
        complete: true
    },
    {
        note: 'The point of using Lorem Ipsum is that it has a more-or-less',
        complete: false
    },
    {
        note: 'There are many variations of passages of Lorem Ipsum',
        complete: false
    },
    {
        note: 'Sed ut perspiciatis unde omnis iste natus',
        complete: false
    },
    {
        note: 'must explain to you how all this mistaken idea',
        complete: false
    }
];

class WdgtData extends React.Component {
    state = {
        width: 100
    };

    constructor(props) {
        super(props);
        this._element = React.createRef();
    }

    UNSAFE_componentDidMount () {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = () => {
        this.setState({width: this._element.current.clientWidth});
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={12} xl={8}>
                        <Card>
                            <Card.Header>
                                <h5>Last task</h5>
                            </Card.Header>
                            <Card.Body className="widget-last-task">
                                <BasicToDo todoList={initialBasicTodo}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={4}>
                        <Card>
                            <Card.Header>
                                <h5>Browser Status</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="browser-card p-b-15 ">
                                    <p className="d-inline-block m-0 ">Google Crome</p>
                                    <label className="badge badge-primary rounded-pill float-right btn-browser">50%</label>
                                </div>
                                <div className="browser-card border-top p-t-15 p-b-15 ">
                                    <p className="d-inline-block m-0 ">Mozila Firefox</p>
                                    <label className="badge badge-danger rounded-pill float-right btn-browser">12%</label>
                                </div>
                                <div className="browser-card border-top p-t-15 p-b-15 ">
                                    <p className="d-inline-block m-0 ">Apple Safari</p>
                                    <label className="badge badge-warning rounded-pill float-right btn-browser">23%</label>
                                </div>
                                <div className="browser-card border-top p-t-15 p-b-15 ">
                                    <p className="d-inline-block m-0 ">Internet Explorer</p>
                                    <label className="badge badge-success rounded-pill float-right btn-browser">17%</label>
                                </div>
                                <div className="browser-card border-top p-t-15 p-b-15 ">
                                    <p className="d-inline-block m-0 ">Opera Mini</p>
                                    <label className="badge badge-warning rounded-pill float-right btn-browser">07%</label>
                                </div>
                                <div className="browser-card border-top p-t-15">
                                    <p className="d-inline-block m-0 ">Microsoft Edge</p>
                                    <label className="badge badge-primary rounded-pill float-right btn-browser mb-0">28%</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Recent Tickets</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            Application
                                        </th>
                                        <th>Sales</th>
                                        <th>Avg Price</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <h6>Pangong</h6>
                                                <p className="text-muted m-b-0">Powerful Admin Theme</p>
                                            </div>
                                        </td>
                                        <td>16,300</td>
                                        <td>$53</td>
                                        <td className="text-c-blue">$15,652</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <h6>Photoshop</h6>
                                                <p className="text-muted m-b-0">Design Software</p>
                                            </div>
                                        </td>
                                        <td>26,421</td>
                                        <td>$35</td>
                                        <td className="text-c-blue">$18,785</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <h6>Guruable</h6>
                                                <p className="text-muted m-b-0">Best Admin Template</p>
                                            </div>
                                        </td>
                                        <td>8,265</td>
                                        <td>$98</td>
                                        <td className="text-c-blue">$9,652</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <h6>Flatable</h6>
                                                <p className="text-muted m-b-0">Admin App</p>
                                            </div>
                                        </td>
                                        <td>10,652</td>
                                        <td>$20</td>
                                        <td className="text-c-blue">$7,856</td>
                                    </tr>
                                    </tbody>
                                </Table>

                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Header>
                                <h5>Activities</h5>
                            </Card.Header>
                            <Card.Body className="p-t-20">
                                <div className="card-notification">
                                    <div className="card-noti-conatin">
                                        <small>5 mins ago</small>
                                        <p className="text-muted m-b-30">jennifer sent you an attachament</p>
                                    </div>
                                </div>
                                <div className="card-notification">
                                    <div className="card-noti-conatin">
                                        <small>45 mins ago</small>
                                        <p className="text-muted m-b-30">Paul has sent a request for access to the project folder</p>
                                    </div>
                                </div>
                                <div className="card-notification">
                                    <div className="card-noti-conatin">
                                        <small>2 days ago</small>
                                        <p className="text-muted m-b-30">Demin change the dedline on the project</p>
                                    </div>
                                </div>
                                <div className="card-notification">
                                    <div className="card-noti-conatin">
                                        <small>12 mins ago</small>
                                        <p className="text-muted m-b-30">jennifer invite you to join the project</p>
                                    </div>
                                </div>
                                <div className="card-notification">
                                    <div className="card-noti-conatin">
                                        <small>60 mins ago</small>
                                        <p className="text-muted mb-1">Josephine share a folder with you</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={5} md={6}>
                        <Card className="review-resourse">
                            <Card.Header>
                                <h5>Traffic resources</h5>
                            </Card.Header>
                            <Card.Body className="p-t-10 p-b-10">
                                <div className="table-">
                                    <Table hover responsive>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h6>Unique visitors</h6>
                                                </td>
                                                <td>
                                                    <span className="f-18 text-muted">4,562</span>
                                                </td>
                                                <td className="text-right">
                                                    <div ref={this._element}>
                                                        <Line values={[0,5,0,5,7,6,5.5,10,8]} fillColor="rgba(70, 128, 254,0.2)" strokeColor='rgb(70, 128, 254)' width={this.state.width} height={25} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Pageviews</h6>
                                                </td>
                                                <td>
                                                    <span className="f-18 text-muted">679</span>
                                                </td>
                                                <td className="text-right">
                                                    <div ref={this._element}>
                                                        <Line values={[0,5,0,5,7,6,5.5,10,8]} fillColor="rgba(252, 97, 128,0.2)" strokeColor='rgb(252, 97, 128)' width={this.state.width} height={25} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Page/visite</h6>
                                                </td>
                                                <td>
                                                    <span className="f-18 text-muted">2,516</span>
                                                </td>
                                                <td className="text-right">
                                                    <div ref={this._element}>
                                                        <Line values={[0,5,0,5,7,6,5.5,10,8]} fillColor="rgba(147, 190, 82,0.2)" strokeColor='rgb(147, 190, 82)' width={this.state.width} height={25} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Bounce rate</h6>
                                                </td>
                                                <td>
                                                    <span className="f-18 text-muted">67%</span>
                                                </td>
                                                <td className="text-right">
                                                    <div ref={this._element}>
                                                        <Line values={[0,5,0,5,7,6,5.5,10,8]} fillColor="rgba(255, 182, 77,0.2)" strokeColor='rgb(255, 182, 77)' width={this.state.width} height={25} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Visite</h6>
                                                </td>
                                                <td>
                                                    <span className="f-18 text-muted">845</span>
                                                </td>
                                                <td className="text-right">
                                                    <div ref={this._element}>
                                                        <Line values={[0,5,0,5,7,6,5.5,10,8]} fillColor="rgba(254, 138, 125,0.2)" strokeColor='rgb(254, 138, 125)' width={this.state.width} height={25} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={7} md={6}>
                        <Card className="review-task">
                            <Card.Header>
                                <h5>Reviews</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table hover responsive>
                                    <tbody>
                                        <tr>
                                            <td><a href={DEMO.BLANK_LINK}><img className="img-radius wid-40" src={avatar3} alt="chat-user"/></a></td>
                                            <td>
                                                <h6>Josephin John</h6>
                                                <p className="text-muted">Lorem ipsum dolor</p>
                                            </td>
                                            <td>
                                                <p className="review-date">09 Fab</p>
                                                <p className="">09:40 AM</p>
                                            </td>
                                            <td>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on  f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href={DEMO.BLANK_LINK}><img className="img-radius wid-40" src={avatar2} alt="chat-user"/></a></td>
                                            <td>
                                                <h6>Josephin Doe</h6>
                                                <p className="text-muted">Lorem ipsum dolor sit amet</p>
                                            </td>
                                            <td>
                                                <p className="review-date">04 Jan</p>
                                                <p className="">10:45 AM</p>
                                            </td>
                                            <td>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on  f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href={DEMO.BLANK_LINK}><img className="img-radius wid-40" src={avatar3} alt="chat-user"/></a></td>
                                            <td>
                                                <h6>Viral Dhimmar</h6>
                                                <p className="text-muted">Lorem ipsum dolor sit amet</p>
                                            </td>
                                            <td>
                                                <p className="review-date">16 Dec</p>
                                                <p className="">12:00 PM</p>
                                            </td>
                                            <td>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on  f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href={DEMO.BLANK_LINK}><img className="img-radius wid-40" src={avatar4} alt="chat-user"/></a></td>
                                            <td>
                                                <h6>Luciano Durk</h6>
                                                <p className="text-muted">Lorem ipsum consectetur</p>
                                            </td>
                                            <td>
                                                <p className="review-date">04 Jan</p>
                                                <p className="">10:45 AM</p>
                                            </td>
                                            <td>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on  f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-blue"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                                <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-muted"/></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={6} md={12}>
                        <Card className="project-task">
                            <Card.Header>
                                <h5>Time spent : project &amp; task</h5>
                            </Card.Header>
                            <Card.Body className="p-b-10">
                                <Table hover responsive className="mb-0">
                                    <thead>
                                        <tr>
                                            <th>Project & Task</th>
                                            <th className='text-right'>Time Spents</th>
                                            <th style={{width: '30%'}}/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="task-contain">
                                                    <h6 className="bg-c-blue d-inline-block text-center">U</h6>
                                                    <p className="d-inline-block m-l-20">UI Design</p>
                                                </div>
                                            </td>
                                            <td className='text-right'>
                                                <p className="d-inline-block m-r-20">4 : 36</p>
                                            </td>
                                            <td>
                                                <ProgressBar now={80}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="task-contain">
                                                    <h6 className="bg-c-red d-inline-block text-center">R</h6>
                                                    <p className="d-inline-block m-l-20">Redesign Android App</p>
                                                </div>
                                            </td>
                                            <td className='text-right'>
                                                <p className="d-inline-block m-r-20">5 : 15</p>
                                            </td>
                                            <td>
                                                <ProgressBar variant='danger' now={60}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="task-contain">
                                                    <h6 className="bg-c-yellow d-inline-block text-center">L</h6>
                                                    <p className="d-inline-block m-l-20">Logo Design</p>
                                                </div>
                                            </td>
                                            <td className='text-right'>
                                                <p className="d-inline-block m-r-20">6 : 36</p>
                                            </td>
                                            <td>
                                                <ProgressBar now={50} variant='warning'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="task-contain">
                                                    <h6 className="bg-c-green d-inline-block text-center">A</h6>
                                                    <p className="d-inline-block m-l-20">Appestia landing Page</p>
                                                </div>
                                            </td>
                                            <td className='text-right'>
                                                <p className="d-inline-block m-r-20">8 : 00</p>
                                            </td>
                                            <td>
                                                <ProgressBar variant='success' now={50}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="task-contain">
                                                    <h6 className="bg-c-blue d-inline-block text-center">L</h6>
                                                    <p className="d-inline-block m-l-20">Logo Design</p>
                                                </div>
                                            </td>
                                            <td className='text-right'>
                                                <p className="d-inline-block m-r-20">10 : 36</p>
                                            </td>
                                            <td>
                                                <ProgressBar now={50}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6} md={12}>
                        <Card className='past-payment-card'>
                            <Card.Header>
                                <h5>Past payment</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table hover responsive>
                                    <thead>
                                    <tr>
                                        <th>Team Member</th>
                                        <th>Hours</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <a href={DEMO.BLANK_LINK}><img className="img-radius" src={avatar1} alt=""/></a>
                                            <p className="d-inline-block m-l-10 f-w-600">Erwin Brown</p>
                                        </td>
                                        <td>
                                            <p>6:23</p>
                                        </td>
                                        <td>
                                            <p>$20.00/hr</p>
                                        </td>
                                        <td>
                                            <p>23 oct, 2017</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href={DEMO.BLANK_LINK}><img className="img-radius" src={avatar2} alt=""/></a>
                                            <p className="d-inline-block m-l-10 f-w-600">Joseph Villa</p>
                                        </td>
                                        <td>
                                            <p>10:56</p>
                                        </td>
                                        <td>
                                            <p>$25.00/hr</p>
                                        </td>
                                        <td>
                                            <p>25 oct, 2017</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href={DEMO.BLANK_LINK}><img className="img-radius" src={avatar3} alt=""/></a>
                                            <p className="d-inline-block m-l-10 f-w-600">Jekson Durk</p>
                                        </td>
                                        <td>
                                            <p>5:56</p>
                                        </td>
                                        <td>
                                            <p>$23.00/hr</p>
                                        </td>
                                        <td>
                                            <p>01 nov, 2017</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href={DEMO.BLANK_LINK}><img className="img-radius" src={avatar4} alt=""/></a>
                                            <p className="d-inline-block m-l-10 f-w-600">Erwin Brown</p>
                                        </td>
                                        <td>
                                            <p>6:23</p>
                                        </td>
                                        <td>
                                            <p>$16.00/hr</p>
                                        </td>
                                        <td>
                                            <p>05 nov, 2017</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href={DEMO.BLANK_LINK}><img className="img-radius" src={avatar1} alt=""/></a>
                                            <p className="d-inline-block m-l-10  f-w-600">Gregory Durk</p>
                                        </td>
                                        <td>
                                            <p>15:23</p>
                                        </td>
                                        <td>
                                            <p>$40.00/hr</p>
                                        </td>
                                        <td>
                                            <p>15 nov, 2017</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Projects</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            Assigned
                                        </th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th className="text-right">Priority</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>John Deo</h6>
                                                    <p className="text-muted m-b-0">Graphics Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Pangong</td>
                                        <td>Jun, 26</td>
                                        <td className="text-right"><label className="badge badge-light-danger">Low</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>Jenifer Vintage</h6>
                                                    <p className="text-muted m-b-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Mashable</td>
                                        <td>March, 31</td>
                                        <td className="text-right"><label className="badge badge-light-primary">high</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>William Jem</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Flatable</td>
                                        <td>Aug, 02</td>
                                        <td className="text-right"><label className="badge badge-light-success">medium</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>David Jones</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Guruable</td>
                                        <td>Sep, 22</td>
                                        <td className="text-right"><label className="badge badge-light-primary">high</label></td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <div className="text-right m-r-20">
                                    <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Header>
                                <h5>Team Members</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="align-middle m-b-30">
                                    <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-10">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card className="table-card latest-activity-card">
                            <Card.Header>
                                <h5>Latest Order</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order ID</th>
                                        <th>Photo</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>John Deo</td>
                                        <td>#81412314</td>
                                        <td><img src={phone1} alt="" className="img-fluid"/></td>
                                        <td>Moto G5</td>
                                        <td>10</td>
                                        <td>17-2-2017</td>
                                        <td><label className="badge badge-light-warning">Pending</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Jenny William</td>
                                        <td>#68457898</td>
                                        <td><img src={phone2} alt="" className="img-fluid"/></td>
                                        <td>iPhone 8</td>
                                        <td>16</td>
                                        <td>20-2-2017</td>
                                        <td><label className="badge badge-light-primary">Paid</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Lori Moore</td>
                                        <td>#45457898</td>
                                        <td><img src={phone3} alt="" className="img-fluid"/></td>
                                        <td>Redmi 4</td>
                                        <td>20</td>
                                        <td>17-2-2017</td>
                                        <td><label className="badge badge-light-success">Success</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Austin Pena</td>
                                        <td>#62446232</td>
                                        <td><img src={phone4} alt="" className="img-fluid"/></td>
                                        <td>Jio</td>
                                        <td>15</td>
                                        <td>25-4-2017</td>
                                        <td><label className="badge badge-light-danger">Failed</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>

                                    </tbody>
                                </Table>
                                <div className="text-right  m-r-20">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Orders</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className='new-cust-card'>
                            <Card.Header>
                                <Card.Title as='h5'>New Customers</Card.Title>
                            </Card.Header>
                            <div style={{height: '415px'}}>
                                <PerfectScrollbar>
                                    <Card.Body className='p-b-0'>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>30 min ago</span>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar4} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar5} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Shirley Hoe</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>James Alexander</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </PerfectScrollbar>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={8} md={6}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>New Products</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '415px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Image</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>HeadPhone</td>
                                                <td><img src={p1} alt="" className="img-20" /></td>
                                                <td>
                                                    <div><label className="badge badge-light-warning">Pending</label></div>
                                                </td>
                                                <td>$10</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16  text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Iphone 6</td>
                                                <td><img src={p2} alt="" className="img-20"/></td>
                                                <td>
                                                    <div><label className="badge badge-light-danger">Cancel</label></div>
                                                </td>
                                                <td>$20</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16  text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jacket</td>
                                                <td><img src={p3} alt="" className="img-20"/></td>
                                                <td>
                                                    <div><label className="badge badge-light-success">Success</label></div>
                                                </td>
                                                <td>$35</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sofa</td>
                                                <td><img src={p4} alt="" className="img-20"/></td>
                                                <td>
                                                    <div><label className="badge badge-light-danger">Cancel</label></div>
                                                </td>
                                                <td>$85</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Iphone 6</td>
                                                <td><img src={p2} alt="" className="img-20"/></td>
                                                <td>
                                                    <div><label className="badge badge-light-success">Success</label></div>
                                                </td>
                                                <td>$20</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>HeadPhone</td>
                                                <td><img src={p1} alt="" className="img-20"/></td>
                                                <td>
                                                    <div><label className="badge badge-light-warning">Pending</label></div>
                                                </td>
                                                <td>$50</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Iphone 6</td>
                                                <td><img src={p2} alt="" className="img-20"/></td>
                                                <td>
                                                    <div><label className="badge badge-light-danger">Cancel</label></div>
                                                </td>
                                                <td>$30</td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className='testimonial-card table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Testimonial</Card.Title>
                            </Card.Header>
                            <div style={{height: '405px'}}>
                                <PerfectScrollbar>
                                    <Card.Body>
                                        <div className="review-block">
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar1} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">John Deo</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={85} variant='success'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">3.2</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">Alex Thompson</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={50} />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">4.2</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar3} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">John Deo</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={60} variant='danger'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">6.5</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">Shirley Hoe</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={85} variant='warning'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">9.6</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar1} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">James Alexander</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={30} variant='success'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">5.5</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </PerfectScrollbar>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={8} md={6}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Recent Tickets</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover className='m-b-0 pb-0'>
                                    <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Subject</th>
                                        <th>Department</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><label className="badge badge-light-success">open</label></td>
                                        <td>Website down for one week</td>
                                        <td>Support</td>
                                        <td>Today 2:00</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-primary">progress</label></td>
                                        <td>Loosing control on server</td>
                                        <td>Support</td>
                                        <td>Yesterday</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-danger">closed</label></td>
                                        <td>Authorizations keys</td>
                                        <td>Support</td>
                                        <td>27, Aug</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-success">open</label></td>
                                        <td>Restoring default settings</td>
                                        <td>Support</td>
                                        <td>Today 9:00</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-primary">progress</label></td>
                                        <td>Loosing control on server</td>
                                        <td>Support</td>
                                        <td>Yesterday</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-success">open</label></td>
                                        <td>Restoring default settings</td>
                                        <td>Support</td>
                                        <td>Today 9:00</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>New Products</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '405px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Product Code</th>
                                                <th>Customer</th>
                                                <th>Status</th>
                                                <th>Rating</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Sofa</td>
                                                <td>#PHD001</td>
                                                <td>abc@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Computer</td>
                                                <td>#PHD002</td>
                                                <td>cdc@gmail.com</td>
                                                <td><label className="badge badge-light-success">In Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mobile</td>
                                                <td>#PHD003</td>
                                                <td>pqr@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Coat</td>
                                                <td>#PHD004</td>
                                                <td>bcs@gmail.com</td>
                                                <td><label className="badge badge-light-success">In Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Watch</td>
                                                <td>#PHD003</td>
                                                <td>cdc@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sofa</td>
                                                <td>#PHD009</td>
                                                <td>xyz@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Coat</td>
                                                <td>#PHD005</td>
                                                <td>dfg@gmail.com</td>
                                                <td><label className="badge badge-light-success">In Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WdgtData;