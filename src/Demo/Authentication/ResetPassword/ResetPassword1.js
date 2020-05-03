import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/components/Breadcrumb";
import logoDark from '../../../assets/images/logo-dark.png';

class ResetPassword1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content text-center">
                        <img src={logoDark} alt="" className="img-fluid mb-4"/>
                        <div className="card">
                            <div className="row align-items-center ">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h4 className="mb-3 f-w-400">Reset your password</h4>
                                        <div className="input-group mb-4">
                                            <input type="email" className="form-control" placeholder="Email address"/>
                                        </div>
                                        <button className="btn btn-block btn-primary mb-4 rounded-pill">Reset password</button>
                                        <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1" className="f-w-400">Signup</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg width="100%" height="250px" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave bg-wave">
                        <title>Wave</title>
                        <defs/>
                        <path id="feel-the-wave" d="M 0 108.47254258435183 C 320 185.83563089312676 320 185.83563089312676 640 147.1540867387393 C 960 108.47254258435181 960 108.47254258435181 1280 183.85517347960982 C 1600 259.23780437486784 1600 259.23780437486784 1920 168.36490149144052 L 1920 688 L 0 688 Z" fill="rgba(72, 134, 255, 4)"/>
                    </svg>
                    <svg width="100%" height="250px" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave bg-wave">
                        <title>Wave</title>
                        <defs/>
                        <path id="feel-the-wave-two" d="M 0 128.95884754877417 C 191.99999999999986 75.29018602806744 191.99999999999986 75.29018602806744 383.9999999999997 102.12451678842082 C 575.9999999999995 128.95884754877417 575.9999999999995 128.95884754877417 767.9999999999994 71.76334854836878 C 959.9999999999993 14.567849547963363 959.9999999999993 14.567849547963363 1151.999999999999 88.27687726697178 C 1343.999999999999 161.98590498598023 1343.999999999999 161.98590498598023 1535.9999999999989 124.25156009802788 C 1727.9999999999986 86.51721521007553 1727.9999999999986 86.51721521007553 1919.9999999999986 73.8771116127018 L 1919.9999999999986 687.9999999999961 L 0 687.9999999999961 Z" fill="rgba(72, 134, 255, .3)"/>
                    </svg>
                    <svg width="100%" height="250px" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave bg-wave">
                        <title>Wave</title>
                        <defs/>
                        <path id="feel-the-wave-three" d="M 0 57.04587196740989 C 239.99999971109986 79.41474345984528 239.99999971109986 79.41474345984528 479.9999994221997 68.23030771362758 C 719.9999991332996 57.04587196740989 719.9999991332996 57.04587196740989 959.9999988443994 96.030304568373 C 1199.9999985554996 135.01473716933612 1199.9999985554996 135.01473716933612 1439.9999982665993 72.21343378643654 C 1679.9999979776992 9.41213040353695 1679.9999979776992 9.41213040353695 1919.9999976887989 96.030304568373 L 1919.9999976887989 687.999993066398 L 0 687.999993066398 Z" fill="rgba(72, 134, 255, .2)"/>
                    </svg>
                </div>
            </Aux>
        );
    }
}

export default ResetPassword1;