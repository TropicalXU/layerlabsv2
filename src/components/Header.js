import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
 } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
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
                    <div className='container-fluid py-2'>
                        <NavbarBrand className='mr-auto' href='/'>
                        <img src='assets/images/logo.png' height='50' width='51'
                            alt='Layerlabs logo' 
                        />  <span className='navbrand'>Layerlabs</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='justify-content-center ml-auto'>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='font'>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/services'>
                                        <span className='font'>Services<span className='fa fa-chevron-down ml-2'></span></span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className='ml-auto'>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav className='font'>Info<span className='fa fa-chevron-down ml-2'></span></DropdownToggle>
                                    <DropdownMenu className='drop-menu' end>
                                        <DropdownItem className='drop-item'>
                                            <NavLink to='/about'><span className='fa fa-info mr-2'></span>About</NavLink>
                                        </DropdownItem>
                                        <DropdownItem className='drop-item'>
                                            <NavLink to='/projects'><span className='fa fa-folder mr-2'></span>Work</NavLink>
                                        </DropdownItem>
                                        <DropdownItem className='drop-item'>
                                            <NavLink to='/about/personal-profile'><span className='fa fa-user mr-2'></span>Personal Profile</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>
                                       <span className='font-two btn-black px-4'>Request a quote</span>
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