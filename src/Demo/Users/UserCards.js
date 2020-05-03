import React from 'react';
import {Row, Col, Card, Dropdown, Carousel} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import slider5 from '../../assets/images/widget/slider5.jpg';
import slider7 from '../../assets/images/widget/slider7.jpg';
import slider6 from '../../assets/images/widget/slider6.jpg';

import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

class UserCards extends React.Component {
    render() {
        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col>
                        <Breadcrumb/>
                    </Col>
                </Row>
                <Row className='mb-n4'>
                    <Col md={4}>
                        <h6 className="text-center my-3">Option selected</h6>
                        <Card className='user-card user-card-1'>
                            <Card.Header className='border-0 p-2 pb-0'>
                                <div className="cover-img-block">
                                    <img src={slider6} alt="" className="img-fluid"/>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                <div className="user-about-block text-center">
                                    <Row className="align-items-end">
                                        <Col className='text-left pb-3'>
                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star-on text-c-yellow f-20"/></a>
                                        </Col>
                                        <Col><img className="img-radius img-fluid wid-80" src={avatar3} alt="User"/></Col>
                                        <Col className='text-right pb-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                    <i className="feather icon-more-horizontal"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-1 mt-3">Sara Soudein</h6>
                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-0">been the industry's standard</p>
                                </div>
                                <hr className="wid-80 b-wid-3 my-4"/>
                                <Row className="text-center">
                                    <Col>
                                        <h6 className="mb-1">37</h6>
                                        <p className="mb-0">Mails</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">2749</h6>
                                        <p className="mb-0">Followers</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">678</h6>
                                        <p className="mb-0">Following</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <h6 className="text-center my-3">Slider</h6>
                        <Card className='user-card user-card-1'>
                            <Card.Header className='border-0 p-2 pb-0'>
                                <div className="cover-img-block">
                                    <Carousel indicators={false}>
                                        <Carousel.Item>
                                            <img src={slider5} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={slider6} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={slider7} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                <div className="user-about-block text-center">
                                    <Row className="align-items-end">
                                        <Col className='text-left pb-3'>
                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star text-c-yellow f-20"/></a>
                                        </Col>
                                        <Col><img className="img-radius img-fluid wid-80" src={avatar4} alt="User"/></Col>
                                        <Col className='text-right pb-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                    <i className="feather icon-more-horizontal"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-1 mt-3">Joseph William</h6>
                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-0">been the industry's standard</p>
                                </div>
                                <hr className="wid-80 b-wid-3 my-4"/>
                                <Row className="text-center">
                                    <Col>
                                        <h6 className="mb-1">37</h6>
                                        <p className="mb-0">Mails</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">2749</h6>
                                        <p className="mb-0">Followers</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">678</h6>
                                        <p className="mb-0">Following</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <h6 className="text-center my-3">Hover data</h6>
                        <Card className='user-card user-card-1'>
                            <Card.Header className='border-0 p-2 pb-0'>
                                <div className="cover-img-block">
                                    <img src={slider7} alt="" className="img-fluid"/>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                <div className="user-about-block text-center">
                                    <Row className="align-items-end">
                                        <Col/>
                                        <Col>
                                            <div className="position-relative d-inline-block">
                                                <img className="img-radius img-fluid wid-80" src={avatar1} alt="User"/>
                                                <div className="certificated-badge">
                                                    <i className="fas fa-certificate text-c-blue bg-icon"/>
                                                    <i className="fas fa-check front-icon text-white"/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col/>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-1 mt-3">John Doe</h6>
                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-0">been the industry's standard</p>
                                </div>
                                <hr className="wid-80 b-wid-3 my-4"/>
                                <Row className="text-center">
                                    <Col>
                                        <h6 className="mb-1">37</h6>
                                        <p className="mb-0">Mails</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">2749</h6>
                                        <p className="mb-0">Followers</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">678</h6>
                                        <p className="mb-0">Following</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className='hover-data text-white btn-page'>
                                <div className="">
                                    <h4 className="text-white">Hire Me?</h4>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-3">been the industry's standard</p>
                                    <button type="button" className="btn waves-effect waves-light btn-warning"><i className="feather icon-link"/> Meating</button>
                                    <button type="button" className="btn waves-effect waves-light btn-danger"><i className="feather icon-download"/> Resume</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <h6 className="text-center my-3">Left</h6>
                        <Card className='user-card user-card-2 shape-left'>
                            <Card.Header className='border-0 p-2 pb-0'>
                                <div className="cover-img-block">
                                    <img src={slider5} alt="" className="img-fluid"/>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                <div className="user-about-block text-center">
                                    <Row className="align-items-end">
                                        <Col className='text-left pb-3'>
                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star-on text-c-yellow f-20"/></a>
                                        </Col>
                                        <Col><img className="img-radius img-fluid wid-80" src={avatar1} alt="User"/></Col>
                                        <Col className='text-right pb-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                    <i className="feather icon-more-horizontal"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-1 mt-3">Lary Doe</h6>
                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-0">been the industry's standard</p>
                                </div>
                                <hr className="wid-80 b-wid-3 my-4"/>
                                <Row className="text-center">
                                    <Col>
                                        <h6 className="mb-1">37</h6>
                                        <p className="mb-0">Mails</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">2749</h6>
                                        <p className="mb-0">Followers</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">678</h6>
                                        <p className="mb-0">Following</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <h6 className="text-center my-3">Center slider</h6>
                        <Card className='user-card user-card-2 shape-center'>
                            <Card.Header className='border-0 p-2 pb-0'>
                                <div className="cover-img-block">
                                    <Carousel indicators={false}>
                                        <Carousel.Item>
                                            <img src={slider6} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={slider7} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={slider5} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                <div className="user-about-block text-center">
                                    <Row className="align-items-end">
                                        <Col className='text-left pb-3'>
                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star text-c-yellow f-20"/></a>
                                        </Col>
                                        <Col><img className="img-radius img-fluid wid-80" src={avatar5} alt="User"/></Col>
                                        <Col className='text-right pb-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                    <i className="feather icon-more-horizontal"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-1 mt-3">Suzen</h6>
                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-0">been the industry's standard</p>
                                </div>
                                <hr className="wid-80 b-wid-3 my-4"/>
                                <Row className="text-center">
                                    <Col>
                                        <h6 className="mb-1">37</h6>
                                        <p className="mb-0">Mails</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">2749</h6>
                                        <p className="mb-0">Followers</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">678</h6>
                                        <p className="mb-0">Following</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <h6 className="text-center my-3">Right slider</h6>
                        <Card className='user-card user-card-2 shape-right'>
                            <Card.Header className='border-0 p-2 pb-0'>
                                <div className="cover-img-block">
                                    <Carousel indicators={false}>
                                        <Carousel.Item>
                                            <img src={slider7} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={slider5} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={slider6} alt="" className="img-fluid"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                <div className="user-about-block text-center">
                                    <Row className="align-items-end">
                                        <Col className='text-left pb-3'>
                                            <a href={DEMO.BLANK_LINK} className='text-c-yellow'><i className="icon feather icon-star text-c-yellow f-20"/></a>
                                        </Col>
                                        <Col><img className="img-radius img-fluid wid-80" src={avatar1} alt="User"/></Col>
                                        <Col className='text-right pb-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                    <i className="feather icon-more-horizontal"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Another action</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-1 mt-3">John Doe</h6>
                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                    <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                    <p className="mb-0">been the industry's standard</p>
                                </div>
                                <hr className="wid-80 b-wid-3 my-4"/>
                                <Row className="text-center">
                                    <Col>
                                        <h6 className="mb-1">37</h6>
                                        <p className="mb-0">Mails</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">2749</h6>
                                        <p className="mb-0">Followers</p>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-1">678</h6>
                                        <p className="mb-0">Following</p>
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

export default UserCards