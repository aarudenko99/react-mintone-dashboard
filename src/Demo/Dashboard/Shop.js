import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, Table} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {VectorMap} from 'react-jvectormap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Breadcrumb from "../../App/components/Breadcrumb";

import shopActivityChart from './chart/shop-activity-chart';

import note from "../../assets/images/icon/note.svg";
import badge from "../../assets/images/icon/badge.svg";
import users from "../../assets/images/icon/users.svg";

import product1 from '../../assets/images/product/prod-1.jpg';
import product2 from '../../assets/images/product/prod-2.jpg';
import product3 from '../../assets/images/product/prod-3.jpg';
import product4 from '../../assets/images/product/prod-4.jpg';
import product5 from '../../assets/images/product/prod-5.jpg';

class Shop extends React.Component {
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
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body className="p-30">
                                <div className="d-flex pt-3 pb-2 no-block">
                                    <div className="align-self-center mr-5 ml-4"><img src={note} alt="" title="" width="55"/></div>
                                    <div className="align-slef-center mr-auto">
                                        <h2 className="m-b-2 text-uppercase font-30 font-medium lp-5 text-danger">458</h2>
                                        <h6 className="text-muted m-b-0">Daily orders</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body className="p-30">
                                <div className="d-flex pt-3 pb-2 no-block">
                                    <div className="align-self-center mr-5 ml-4"><img src={badge} alt="" title="" width="55"/></div>
                                    <div className="align-slef-center mr-auto">
                                        <h2 className="m-b-2 text-uppercase font-30 font-medium lp-5 text-primary">$165</h2>
                                        <h6 className="text-muted m-b-0">Daily sales</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card>
                            <Card.Body className="p-30">
                                <div className="d-flex pt-3 pb-2 no-block">
                                    <div className="align-self-center mr-5 ml-4"><img src={users} alt="" title="" width="55"/></div>
                                    <div className="align-slef-center mr-auto">
                                        <h2 className="m-b-2 text-uppercase font-30 font-medium lp-5 text-warning">2167</h2>
                                        <h6 className="text-muted m-b-0">Total users</h6>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center text-uppercase">activity</h5>
                                    <div className="ml-auto">
                                        <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-13 d-none d-xl-inline-block d-lg-inline-block">
                                            <li className="text-c-blue">Last year</li>
                                            <li className="text-muted">Last month</li>
                                            <li className="text-muted">Last week</li>
                                            <li className="text-muted"><i className="flaticon-calendar"/></li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="list-inline m-b-30 text-uppercase lp-5 font-medium font-14">
                                    <li><i className="fas fa-square m-r-5 text-primary"/> Sales</li>
                                    <li><i className="fas fa-square m-r-5 text-danger"/> Orders</li>
                                    <li><i className="fas fa-square m-r-5 text-success"/> New visitors </li>
                                </ul>
                                <Chart {...shopActivityChart}/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <div>
                                <Card.Body className="panel-wrapper">
                                    <div className="d-flex m-b-10 no-block">
                                        <h5 className="card-title m-b-3 mt-3 align-self-center">Popular categories</h5>
                                        <div className="ml-auto text-muted-blue mt-3"> <a href={DEMO.BLANK_LINK} className="pull-left text-muted-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                    </div>
                                    <Table responsive className="color-table m-b-0">
                                        <thead className="bg-transparent">
                                        <tr>
                                            <th>Customer</th>
                                            <th>Delivery type</th>
                                            <th>QTV</th>
                                            <th>Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Alice Brodwain</td>
                                            <td>American Express</td>
                                            <td>15</td>
                                            <td>$85</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <div>
                                <Card.Body className="panel-wrapper">
                                    <div className="d-flex m-b-10 no-block">
                                        <h5 className="card-title m-b-3 mt-3  align-self-center">Top product sales</h5>
                                        <div className="ml-auto text-muted-blue mt-3"> <a href={DEMO.BLANK_LINK} className="pull-left text-muted-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                    </div>
                                    <div style={{height: '440px'}}>
                                        <PerfectScrollbar>
                                            <Table responsive className="color-table">
                                                <tbody>
                                                <tr>
                                                    <td><img src={product1} alt="" title=""/></td>
                                                    <td>Notebook Asus Aspire <br/>$375</td>
                                                    <td><span className="font-24 text-primary">$9 375</span> <br/>25 sales</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={product2} alt="" title=""/></td>
                                                    <td>Notebook Asus Aspire <br/>$375</td>
                                                    <td><span className="font-24 text-primary">$5 612</span><br/>25 sales</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={product3} alt="" title=""/></td>
                                                    <td>Notebook Asus Aspire <br/>$375</td>
                                                    <td><span className="font-24 text-primary">$3 800</span><br/>25 sales</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={product4} alt="" title=""/></td>
                                                    <td>Notebook Asus Aspire <br/>$375</td>
                                                    <td><span className="font-24 text-primary">$3 024</span><br/>25 sales</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={product5} alt="" title=""/></td>
                                                    <td>Notebook Asus Aspire <br/>$375</td>
                                                    <td><span className="font-24 text-primary">$1 200</span><br/>25 sales</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </PerfectScrollbar>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={12} md={12}>
                        <Card className="panel-main o-income panel-refresh">
                            <Card.Body className="panel-wrapper">
                                <div className="d-flex m-b-10 no-block">
                                    <h5 className="card-title m-b-0 align-self-center">Visitors</h5>
                                    <div className="ml-auto text-light-blue"> <a href={DEMO.BLANK_LINK} className="pull-left text-light-blue inline-block refresh mr-15"> <i className="fas fa-sync"/> Update </a> </div>
                                </div>
                                <ul className="list-inline m-t-30 m-b-20 weight-500 text-dark text-uppercase lp-5 font-medium font-12">
                                    <li>1. Ukraine <span className="text-danger">29.5%</span></li>
                                    <li>2. USA <span className="text-primary">29.5%</span></li>
                                    <li>3. Canada <span className="text-warning">29.5%</span></li>
                                    <li>4. Australia <span className="text-info">29.5%</span></li>
                                    <li>5. Russia <span className="text-purple">29.5%</span></li>
                                </ul>
                                <div style={{height: '400px', width: '100%'}}>
                                    <VectorMap
                                        map={"world_mill"}
                                        scaleColors={["#2196F3", "#1B8BF9"]}
                                        normalizeFunction="polynomial"
                                        hoverOpacity={0.7}
                                        hoverColor="!1"
                                        regionStyle={{
                                            initial: {
                                                fill: "#d7e6ff"
                                            }
                                        }}
                                        ref="map"
                                        containerStyle={{
                                            width: "100%",
                                            height: "100%"
                                        }}
                                        containerClassName="set-map"
                                        markerStyle={{
                                            initial: {
                                                r: 9,
                                                fill: "#2196F3",
                                                "fill-opacity": 0.9,
                                                stroke: "#fff",
                                                "stroke-width": 7,
                                                "stroke-opacity": 0.4
                                            },
                                            hover: {
                                                stroke: "#fff",
                                                "fill-opacity": 1,
                                                "stroke-width": 1.5
                                            }
                                        }}
                                        backgroundColor="transparent"
                                        markers={[
                                            {
                                                latLng: [41.9, 12.45],
                                                name: "Vatican City"
                                            },
                                            {
                                                latLng: [43.73, 7.41],
                                                name: "Monaco"
                                            },
                                            {
                                                latLng: [-0.52, 166.93],
                                                name: "Nauru"
                                            },
                                            {
                                                latLng: [-8.51, 179.21],
                                                name: "Tuvalu"
                                            },
                                            {
                                                latLng: [43.93, 12.46],
                                                name: "San Marino"
                                            },
                                            {
                                                latLng: [47.14, 9.52],
                                                name: "Liechtenstein"
                                            },
                                            {
                                                latLng: [7.11, 171.06],
                                                name: "Marshall Islands"
                                            },
                                            {
                                                latLng: [17.3, -62.73],
                                                name: "Saint Kitts and Nevis"
                                            },
                                            {
                                                latLng: [3.2, 73.22],
                                                name: "Maldives"
                                            },
                                            {
                                                latLng: [35.88, 14.5],
                                                name: "Malta"
                                            },
                                            {
                                                latLng: [12.05, -61.75],
                                                name: "Grenada"
                                            },
                                            {
                                                latLng: [13.16, -61.23],
                                                name: "Saint Vincent and the Grenadines"
                                            },
                                            {
                                                latLng: [13.16, -59.55],
                                                name: "Barbados"
                                            },
                                            {
                                                latLng: [17.11, -61.85],
                                                name: "Antigua and Barbuda"
                                            },
                                            {
                                                latLng: [-4.61, 55.45],
                                                name: "Seychelles"
                                            },
                                            {
                                                latLng: [7.35, 134.46],
                                                name: "Palau"
                                            },
                                            {
                                                latLng: [42.5, 1.51],
                                                name: "Andorra"
                                            },
                                            {
                                                latLng: [14.01, -60.98],
                                                name: "Saint Lucia"
                                            },
                                            {
                                                latLng: [6.91, 158.18],
                                                name: "Federated States of Micronesia"
                                            },
                                            {
                                                latLng: [1.3, 103.8],
                                                name: "Singapore"
                                            },
                                            {
                                                latLng: [1.46, 173.03],
                                                name: "Kiribati"
                                            },
                                            {
                                                latLng: [-21.13, -175.2],
                                                name: "Tonga"
                                            },
                                            {
                                                latLng: [15.3, -61.38],
                                                name: "Dominica"
                                            },
                                            {
                                                latLng: [-20.2, 57.5],
                                                name: "Mauritius"
                                            },
                                            {
                                                latLng: [26.02, 50.55],
                                                name: "Bahrain"
                                            },
                                            {
                                                latLng: [0.33, 6.73],
                                                name: "São Tomé and Príncipe"
                                            }
                                        ]}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Shop;