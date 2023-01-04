//importing main links
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import { Header, RenderInstagram } from '../functionalComponents/functionalComponents';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
     } from 'reactstrap';
    import { NavLink } from 'react-router-dom';

//About page component
class About extends Component {
    
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
        //about header image
        const AboutHeader = () => {
            return (
                    <div className='about-header  my-3'>
                        <div className='row text-center text-white'>
                            <div className='col-12'>
                            <Navbar light expand='md'>
                                    <div className='container-fluid text-center py-2'>
                                        <NavbarBrand className='mr-auto' href='/'>
                                        <img src='/assets/images/logo.png' height='50' width='51'
                                            alt='Layerlabs logo'
                                        />  <span className='navbrand-main text-white'>Layerlabs</span>
                                        </NavbarBrand>
                                        <NavbarToggler onClick={this.toggleNav} />
                                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                            <Nav navbar className='justify-content-center ml-auto'>
                                                <NavItem>
                                                    <NavLink className='nav-link mx-2' to='/'>
                                                        <span className='font-two text-white mx-4'>Home</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className='nav-link mx-2' to='/services'>
                                                        <span className='font-two text-white'>Services</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            {/* dropdown nav-link - about */}
                                            <Nav navbar className='ml-auto'>
                                                <UncontrolledDropdown nav>
                                                    <DropdownToggle nav className='font-two text-white mx-2'>Info<span className='fa fa-chevron-down ml-2'></span></DropdownToggle>
                                                    <DropdownMenu className='drop-menu mt-2' top>
                                                        <DropdownItem className='drop-item'>
                                                            <NavLink to='/about' className='font-two py-2'><span className='fa fa-info mr-2'></span>About</NavLink>
                                                        </DropdownItem>
                                                        <DropdownItem className='drop-item'>
                                                            <NavLink to='/projects' className='font-two'><span className='fa fa-folder mr-2'></span>Work</NavLink>
                                                        </DropdownItem>
                                                        <DropdownItem className='drop-item'>
                                                            <NavLink to='/about/personal-profile' className='font-two py-2'><span className='fa fa-user mr-2'></span>Personal Profile</NavLink>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                <NavItem>
                                                    <NavLink className='nav-link' to='/contact'>
                                                    <span className='font-two clear-btn text-white px-4'>Request a quote</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </div>
                                </Navbar> 
                            </div>
                            <div className='col-12 mt-5 pt-5'>
                                <h1 className='font home-title'>Layerlabs</h1>
                                <h3 className='home-header-text font my-3'>Step into the future of web <span className='gradient-text'>design</span>.</h3>
                                </div>
                            </div>
                    </div>
            );
        }
        //main about page header
        const AboutPage = () => {
            return (
                <>
                    <div className='col-12 col-md-6'>
                        <h1 className='font-two'>About</h1>
                        <hr></hr>
                        <p className='pt-5'>Hi, my name is Sean Hackett and welcome to my website Layerlabs. There are many layers to consider as a Full
                            Stack Web Developer from writing the back-end code to building the framework of the application, planning and designing the front-end to full deployment of the website.
                        </p>
                        <p className='pb-5'>As an individual I am very creative yet also curious.
                            When I began my journey into web development that curiosity to discover and learn all aspects of the development proccess in building a
                            full scale custom web application was very evident. I created this
                            website with my love for web development specifically creation & design.
                        </p>
                        <Link to='/about/personal-profile' className='btn btn-black font-two px-4 my-4'>Personal Portfolio<span className='fa fa-chevron-right ml-2'></span></Link>
                    </div>
                    <div className='col-12 col-md-6 mt-4 text-center'>
                        <img src='/assets/images/layerlabs-home.png' className='img-fluid move-img' width='560px' height='620px' alt='Layerlabs home page'/>
                    </div>
            </>
            );
        }

        return (
            <>
                <div className='container-fluid'>
                    <AboutHeader />
                    {/* about page content*/}
                    <div className='container py-5'>
                        <div className='row py-5'>
                            <AboutPage />
                        </div>
                    </div>
                    {/* about page content */}
                    <div className='personal-business about py-5'>
                        <div className='container header pb-5'>
                            <div className='row py-5'>
                                <div className='col-12'>
                                    <h1 className='font-two large-text-header-2 text-center'>Why <span className='gradient-text'>Layerlabs?</span></h1>
                                </div>
                            </div>
                            <div className='row bkg-white'>
                                <div className='col-12 col-md-9 about-text py-5'>
                                    <p className='large-text-two'>At Layerlabs I want to bring my own touch
                                        giving you the best and most responsive custom
                                        website design possible. What you want from a website can vary yet
                                        what matters most is the experience yourself and your users have. A clean, cutting edge design
                                        is what we aim to achieve. Whether you're looking for a personal website, portfolio, or business I've got it handled. Every detail matters, from layout and design to
                                        color palettes, security and much more I am with you every step of the way. Check out the discover page to get inspired or view my previous work for
                                        reference.
                                    </p>
                                </div>
                                <div className='col-12 col-md-3 pl-5 py-5 align-self-center'>
                                    <img src='/assets/images/logo.png' className='img-fluid align-self-center' width='260px' height='260px' alt='computer'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    {/* render instagram plugin */}
                    <div className='container py-5'>
                        <RenderInstagram />
                    </div>
                </div>
            </>
        );
    }
}

export default About;