import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar light color='white' expand='md'>
                    <div className='container-fluid py-3'>
                        <NavbarBrand className='mr-auto' href='/'>
                        <img src='assets/images/logo.png' height='50' width='51'
                            alt='Layerlabs logo' 
                        />  <span className='navbrand'>Layerlabs</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-grip-lines fa-lg mx-2'></span> <span className='font'>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/services'>
                                        <span className='fa fa-cloud-arrow-down fa-lg mx-2'></span> <span className='font'>Services</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>
                                        <span className='fa fa-circle-info fa-lg mx-2'></span> <span className='font'>About</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>
                                        <span className='fa fa-envelope fa-lg mx-2'></span> <span className='font'>Contact</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;