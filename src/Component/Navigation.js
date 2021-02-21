import React, { useState } from 'react'
import '../Styles/Navigation.css';
import Button from './Button'
import logo from '../images/logo.svg';
import burger from '../images/icon-hamburger.svg';
import close from '../images/icon-close-modal.svg';
import Popupcomp from './Popupcomp';

function Navigation() {
    const [navShow, setNavShow] = useState(true);


    return (
        <div className="nav" >
            <div className="nav-icon">
                <img src={logo} alt="crownfund" />
            </div>
            {
                navShow ?
                    <div className="hamburger">
                        <Button onClick={() => { setNavShow(false); }} className="burger" btnStyle="btn-nav" >
                            <img src={burger} alt="hamburger" />
                        </Button>
                    </div> :
                    <div className="nav-hide">
                        <div className="close">
                            <Button onClick={() => { setNavShow(true) }} className="close" btnStyle="btn-nav" >
                                <img src={close} alt="close" />
                            </Button>
                        </div>
                        <div className="nav-nav" >
                            <h4>About</h4>
                            <hr />
                            <h4>Discover</h4>
                            <hr />
                            <h4>Get Started</h4>
                        </div>
                    </div>

            }
            <div className="desktop-nav" >
                <ul>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </div>

        </div>
    )
}

export default Navigation

