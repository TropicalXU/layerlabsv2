//importing main links
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody} from 'reactstrap'; 
import { FadeTransform } from 'react-animation-components';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
     } from 'reactstrap';
    import { NavLink } from 'react-router-dom';

//SECTION CARDS-------------------------------
export const RenderCardOne = () => {
    return (
        <>
            <FadeTransform in
                transformProps={{
                exitTransform: 'scale(0.3) translateY(-20%)'
            }}>
                <Card className='home-card text-center'>
                    <CardBody>
                        <span className='fa fa-cubes fa-lg'></span>
                        <h2 className='font-two py-3'>Pro Custom</h2>
                        <p className='home-card-text'>Proffesional, fully custom & responsive websites built from scratch.</p>
                    </CardBody>
                </Card>
            </FadeTransform>
        </>
    );
}

export const RenderCardTwo = () => {
    return (
        <>
            <FadeTransform in
                transformProps={{
                exitTransform: 'scale(0.3) translateY(-20%)'
            }}>
                <Card className='home-card text-center'>
                    <CardBody>
                        <span className='fa fa-box fa-lg'></span>
                        <h2 className='font-two py-3'>Packages</h2>
                        <p className='home-card-text'>Choose from 3 different packages: Custom, Custom + & Business +</p>
                    </CardBody>
                </Card>
            </FadeTransform>
        </>
    );
}

export const RenderCardThree = () => {
    return (
        <>
            <FadeTransform in
                transformProps={{
                exitTransform: 'scale(0.3) translateY(-20%)'
            }}>
                <Card className='home-card text-center'>
                    <CardBody>
                        <span className='fa fa-square-check fa-lg'></span>
                        <h2 className='font-two py-3'>Support</h2>
                        <p className='home-card-text'>Continued ongoing guided support and advice.</p>
                    </CardBody>
                </Card>
            </FadeTransform>
        </>
    );
}

export const RenderCardFour = () => {
    return (
        <>
            <Card className='home-card text-center py-4'>
                <CardBody>
                    <span className='fa fa-panorama fa-lg'></span>
                    <h2 className='font-two py-3'>Plan</h2>
                    <p className='home-card-text'>Create and design a roadmap of what you hope to achieve for your website.</p>
                </CardBody>
            </Card>
        </>
    );
}

export const RenderCardFive = () => {
    return (
        <>
            <Card className='home-card text-center py-4'>
                <CardBody>
                    <span className='fa fa-wand-magic-sparkles fa-lg'></span>
                    <h2 className='font-two py-3'>Visualize</h2>
                    <p className='home-card-text'>Gather images and material to help you visualize and plan your website.</p>
                </CardBody>
            </Card>
        </>
    );
}
        
export const RenderCardSix = () => {
    return (
        <>
            <Card className='home-card text-center py-4'>
                <CardBody>
                    <span className='fa fa-crop-simple fa-lg'></span>
                    <h2 className='font-two py-3'>Design</h2>
                    <p className='home-card-text'>Establish a theme, choose your color palettes and construct your brand.</p>
                </CardBody>
            </Card>
        </>
        );
}

//RENDER LAYERLABS SERVICES
export const RenderServices = () => {
    return (
        <>
            <div className='row services text-center d-flex justify-content-center pb-5'>
                <div className='col-12 col-md-12 col-lg-4'>
                    <Card className='bg-gradient home-services-card p-5 mt-5'>
                        <h3 className='font-two text-white'>Web Design</h3>
                        <img src='/assets/images/user-experience.png' className='img-fluid mx-auto mt-3' width='90px' height='90px' alt='ux logo' />
                    </Card>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <Card className='bg-gradient home-services-card p-5 mt-5'>
                        <h3 className='font-two text-white'>SEO Optimization</h3>
                        <img src='/assets/images/seo-icon.png' className='img-fluid mx-auto mt-3' width='90px' height='90px' alt='seo logo' />
                    </Card>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <Card className='bg-gradient home-services-card p-5 mt-5'>
                        <h3 className='font-two text-white'>Hosting</h3>
                        <img src='/assets/images/server.png' className='img-fluid mx-auto mt-3' width='90px' height='90px' alt='hosting logo' />
                    </Card>
                </div>
            </div>
        </>
    );
}

//RENDER INCLUDED -SECTION FOR SERVICES PAGE
export const RenderIncluded = () => {
    return (
        <> 
            <h1 className='font-two text-white'>Whats included?</h1>
            <div className='row thin-text d-flex justify-content-center pt-5 pb-4'>
                <div className='col-12 col-md-3 home-card-2 py-5 mt-5'>
                    <img src='/assets/images/front-end.png' className='img-fluid' width='120px' height='120px' alt='web design logo' />
                    <h5 className='font-two gradient-text py-5'>BESPOKE WEB DESIGN</h5>
                </div>
                <div className='col-12 col-md-3 home-card-2 py-5 mx-5 mt-5'>
                <img src='/assets/images/application.png' className='img-fluid' width='120px' height='120px' alt='mobile optimization logo' />
                    <h5 className='font-two gradient-text py-5'>MOBILE OPTIMIZED</h5>
                </div>
                <div className='col-12 col-md-3 home-card-2 py-5 mt-5'>
                <img src='/assets/images/custom-features.png' className='img-fluid' width='120px' height='120px' alt='custom development logo' />
                    <h5 className='font-two gradient-text py-5'>CUSTOM DEVELOPMENT</h5>
                </div>
            </div>
            <div className='row thin-text d-flex justify-content-center pt-4 pb-5'>
                <div className='col-12 col-md-3 home-card-2 py-5 mt-5'>
                <img src='/assets/images/performance.png' className='img-fluid' width='120px' height='120px' alt='seo logo' />
                    <h5 className='font-two gradient-text py-5'>SEO INTEGRATION</h5>
                </div>
                <div className='col-12 col-md-3 home-card-2 py-5 mx-5 mt-5'>
                <img src='/assets/images/data-encryption.png' className='img-fluid' width='120px' height='120px' alt='security logo' />
                    <h5 className='font-two gradient-text py-5'>SECURITY</h5>
                </div>
                <div className='col-12 col-md-3 home-card-2 py-5 mt-5'>
                <img src='/assets/images/developer.png' className='img-fluid' width='120px' height='120px' alt='support logo' />
                    <h5 className='font-two gradient-text py-5'>SUPPORT</h5>
                </div>
            </div>
        </>
    );
}

//Render packages component
export const RenderPackageProcess = () => {
    return (
        <>
            <h1 className='font-two large-text-header-small'>The Process...</h1>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h5 className='thin-text grey-text-lite'>PHASE 1</h5>
                    <h2 className='font-two gradient-text-two'>Discovery</h2>
                    <ul className='list-unstyled font-two py-4'>
                        <li><span className='fa fa-bolt mr-2'></span>Create a roadmap</li>
                        <li className='my-2'><span className='fa fa-bolt mr-2'></span>Gather material</li>
                        <li><span className='fa fa-bolt mr-2'></span>Make a deadline</li>
                    </ul>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src='/assets/images/discover.jpg' className='custom-img my-4' width='100%' height='340px' alt='Phase 1' />
                </div>
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6 order-lg-2'>
                    <h5 className='thin-text grey-text-lite'>PHASE 2</h5>
                    <h2 className='font-two gradient-text'>Wireframing</h2>
                    <ul className='list-unstyled font-two py-4'>
                        <li><span className='fa fa-bolt mr-2'></span>Identify the goal of the website</li>
                        <li className='my-2'><span className='fa fa-bolt mr-2'></span>Understand the userflow</li>
                        <li><span className='fa fa-bolt mr-2'></span>Determine the website wireframe size</li>
                        <li className='my-2'><span className='fa fa-bolt mr-2'></span>Provide detailed wireframing concepts</li>
                    </ul>
                </div>
                <div className='col-12 col-md-12 col-lg-6 order-lg-1'>
                    <img src='/assets/images/wireframing.jpg' className='custom-img my-2' width='100%' height='340px' alt='phase 2' />
                </div>
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h5 className='thin-text grey-text-lite'>PHASE 3</h5>
                    <h2 className='font-two gradient-text-two'>Design</h2>
                    <ul className='list-unstyled font-two py-4'>
                        <li><span className='fa fa-bolt mr-2'></span>Creating a visual style</li>
                        <li className='my-2'><span className='fa fa-bolt mr-2'></span>Choosing color palettes</li>
                        <li><span className='fa fa-bolt mr-2'></span>Designing the user navigation and site flow</li>
                    </ul>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src='/assets/images/web-design.jpg' className='custom-img my-2' width='100%' height='340px' alt='Phase 3' />
                </div>
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6 order-lg-2'>
                    <h5 className='thin-text grey-text-lite'>PHASE 4</h5>
                    <h2 className='font-two gradient-text'>Development</h2>
                    <ul className='list-unstyled font-two py-4'>
                        <li><span className='fa fa-bolt mr-2'></span>Building the framework</li>
                        <li className='my-2'><span className='fa fa-bolt mr-2'></span>Implementing the code</li>
                        <li><span className='fa fa-bolt mr-2'></span>Administering SEO</li>
                    </ul>
                </div>
                <div className='col-12 col-md-12 col-lg-6 order-lg-1'>
                    <img src='/assets/images/develop.jpg' className='custom-img my-2' width='100%' height='340px' alt='Phase 4' /> 
                </div> 
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h5 className='thin-text grey-text-lite'>PHASE 5</h5>
                    <h2 className='font-two gradient-text-two'>Testing</h2>
                    <ul className='list-unstyled font-two py-4'>
                        <li><span className='fa fa-bolt mr-2'></span>Testing site performance</li>
                        <li className='my-2'><span className='fa fa-bolt mr-2'></span>Reviewing site responsiveness</li>
                        <li><span className='fa fa-bolt mr-2'></span>Assessing the application security</li>
                    </ul>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src='/assets/images/testing.jpg' className='custom-img' width='100%' height='340px' alt='Phase 5' /> 
                </div>
            </div>
        </>
    );
}

//CONTACT COMPONENT-------------------
export const RenderContact = () => {
    return (
        <div className='row text-center py-5'>
            <div className='col-12 col-md-2'>
                <img src='/assets/images/email.png' className='img-fluid' width='180' height='180' alt='Mail' />
            </div>
            <div className='col-12 col-md-8'>
                <h2 className='font-two dark-text py-5'>Let's create something together!</h2>
                <Link to='/contact' className='btn btn-gradient font-two'>Get in touch <span className='fa fa-chevron-right ml-2'></span></Link>
            </div>
        </div>
    );
}

//INSTAGRAM COMPONENT------------------------
export const RenderInstagram = () => {
    return (
        <>
            <div className='row py-5'>
                <div className='col-12'>
                    <h1 className='font-two text-center'>Check out our <span className='gradient-text'>Instagram...</span></h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <img src='/assets/images/insta1.png' className='custom-img my-4' width='100%' height='470px' alt='instagram' />
                </div>
                <div className='col-12 col-md-4'>
                    <img src='/assets/images/insta2.png' className='custom-img my-4' width='100%' height='470px' alt='instagram' />
                </div>
                <div className='col-12 col-md-4'>
                    <img src='/assets/images/business-app.png' className='custom-img my-4' width='100%' height='470px' alt='instagram' />
                </div>
            </div>
            <div className='row pt-5 font-two'>
                <div className='col-12 text-center'>
                    <a href='https://www.instagram.com/layerlabs.io/' className='btn btn-black font-two px-4'>Visit<span className='fa fa-chevron-right ml-2'></span></a>
                </div>
            </div>
        </>
    );
}

//SERVICES AD COMPONENT--------------------
export const RenderServicesAd = () => {
    return (
        <div className='row text-center py-5'>
            <div className='col-12 col-md-2 align-self-center'>
                <img src='/assets/images/package-box.png' width='200' height='200' alt='Box' />
            </div>
            <div className='col-12 col-md-8 dark-text'>
                <h2 className='font-two py-5'>Interested in your own personal or business website?</h2>
                <h5 className='font-two pb-5'>Check out our service packages.</h5>
                <Link to='/services' className='btn btn-gradient font'>Services<span className='fa fa-chevron-right ml-2'></span></Link>
            </div>
        </div>
    );
}

export class Header extends Component {
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
            <>  {/* website navbar */}
                <Navbar className='navbar-main' light expand='md'>
                    <div className='container-fluid text-center py-2'>
                        <NavbarBrand className='mr-auto' href='/'>
                        <img src='/assets/images/logo.png' height='50' width='51'
                            alt='Layerlabs logo' 
                        />  <span className='navbrand'>Layerlabs</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='justify-content-center ml-auto'>
                                <NavItem>
                                    <NavLink className='nav-link mx-2' to='/'>
                                        <span className='font-two mx-4'>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link mx-2' to='/services'>
                                        <span className='font-two'>Services</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {/* dropdown nav-link - about */}
                            <Nav navbar className='ml-auto'>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav className='font-two'>Info<span className='fa fa-chevron-down ml-2'></span></DropdownToggle>
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
                                       <span className='font-two btn-gradient px-4'>Request a quote</span>
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

export class HeaderDark extends Component {
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
            <>  {/* website navbar */}
                <Navbar className='navbar-dark bkg-dark' light expand='md'>
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
                                        <span className='font-two mx-4 text-white'>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link mx-2 px-4' to='/services'>
                                        <span className='font-two text-white'>Services</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {/* dropdown nav-link - about */}
                            <Nav navbar className='ml-auto'>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav className='font-two text-white'>Info<span className='fa fa-chevron-down ml-2'></span></DropdownToggle>
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
                                       <span className='font-two clear-btn-dark px-4'>Request a quote</span>
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