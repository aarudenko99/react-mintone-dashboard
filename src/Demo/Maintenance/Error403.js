import React from 'react';

import Aux from "../../hoc/_Aux";
import '../../assets/scss/style.scss';
import Breadcrumb from "../../App/components/Breadcrumb";
import img403 from '../../assets/images/auth/403.png';
import logoDark from '../../assets/images/logo-dark.png';

class Error403 extends React.Component {
    render() {
        return (
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <img src={img403} alt="" className="img-fluid mb-4"/>
                            </div>
                            <div className="col-sm-6">
                                <img src={logoDark} alt="" className="img-fluid mb-4"/>
                                <h1 className="text-primary display-1 font-weight-bolder">403</h1>
                                <h2 className="font-weight-bolder">Forbidden</h2>
                                <h5 className="mb-4">You don’t have permission to access</h5>
                                <button className="btn btn-primary mb-4 rounded-pill">Go back</button>
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

export default Error403;