import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
               //FOOTER COMPONENT--------------//
            <div className='footer'>
            <div className='container-fluid pt-5 mx-4'>
            <div className='row py-5'>
                <div className='col col-sm-4'>
                    <div className='row'>
                        <img src='/assets/images/logo.png' alt='Logo' height='60' width='61' />
                        <h4 className='navbrand px-3 pt-3'>Layerlabs</h4>
                    </div>
                </div>
                <div className='col col-sm-2'>
                    <h6 className='font-two'>Layerlabs</h6>
                    <ul className='list-unstyled'>
                        <li><NavLink className='link' to='/home'>Home</NavLink></li>
                        <li><NavLink className='link' to='/about'>About</NavLink></li>
                        <li><NavLink className='link' to='/about/personal-profile'>Personal Profile</NavLink></li>
                        <li><NavLink className='link' to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className='col col-sm-2'>
                    <h6 className='font-two'>Services</h6>
                    <ul className='list-unstyled'>
                        <li><NavLink className='link' to='/services'>Services</NavLink></li>
                        <li><NavLink className='link' to='/locations/british-columbia'>Discover</NavLink></li>
                        <li><NavLink className='link' to='/locations/alberta'>Custom Package</NavLink></li>
                        <li><NavLink className='link' to='/locations/quebec'>Custom + Package</NavLink></li>
                        <li><NavLink className='link' to='/locations/quebec'>Busines + Package</NavLink></li>
                    </ul>
                </div>
                <div className='col col-sm-2'>
                    <h6 className='font-two'>Work</h6>
                    <ul className='list-unstyled'>
                        <li><NavLink className='link' to='/about'>Projects</NavLink></li>
                        <li><NavLink className='link' to='/personal-profile'>Shirleys Studio</NavLink></li>
                        <li><NavLink className='link' to='/personal-profile'>Vacay</NavLink></li>
                        <li><NavLink className='link' to='/personal-profile'>Viewpoint Ireland</NavLink></li>
                    </ul>
                </div>
                <div className='col col-sm-2 align-items-center'>
                    <h6 className='font-two py-2'>Socials</h6>
                    <a  href="https://medium.com/@layerlabs.io"><i className="fa-brands fa-medium fa-lg"></i></a>
                    <a  href="https://www.instagram.com/layerlabs.io"><i className="fa-brands fa-instagram fa-lg mx-2"></i></a>
                    <a  href="https://github.com/TropicalXU"><i className="fa-brands fa-github fa-lg"></i></a>
                    <a  href="https://www.linkedin.com/in/seanhackett2022/"><i className="fa-brands fa-linkedin fa-lg mx-2"></i></a>
                </div>
            </div>
            <hr></hr>
            <div className='row py-4'>
                <div className='col col-sm-6'>
                    <p>© 2022 Layerlabs. All rights reserved.</p>
                </div>
                <div className='col col-sm-3'>
                    <NavLink className='link' to='termsAndConditions'>Terms & Conditions</NavLink>
                </div>
                <div className='col col-sm-3'>
                    <NavLink className='link' to='privacyPolicy'>Privacy Policy</NavLink>
                </div>
            </div>
        </div>
        </div> 
        )
    }
}

export default Footer;