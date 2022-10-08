import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { RenderCardOne, RenderCardThree, RenderCardTwo, RenderContact } from '../functionalComponents/functionalComponents';


class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const RenderPackageOne = () => {
            return (
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-2'>
                            <CardBody className='font-two'>
                                <h2>Custom</h2>
                                <p>Standard custom features</p>
                                <hr></hr>
                                <p>Choose from...</p>
                                <div className='cards-bg py-2'>
                                    <p><span className='fa-solid fa-star fa-md mr-2'></span>Custom 1 Page Application</p>
                                    <h5>$250</h5>
                                    <hr></hr>
                                    <p><span className='fa-solid fa-star fa-md mr-2'></span>Custom 3 Page Application</p>
                                    <h5>$550</h5>
                                    <hr></hr>
                                    <p><span className='fa-solid fa-star fa-md mr-2'></span>Custom 5 Page Application</p> 
                                    <h5>$799</h5> 
                                </div>
                                <NavLink to='/services/custom-package' className='btn btn-black my-3 px-4'>More Detials</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }

        const RenderPackageTwo = () => {
            return ( 
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-2'>
                            <CardBody className='font-two'>
                                <h2>Custom <span className='fa fa-plus'></span></h2>
                                <p>Includes additional functional features</p>
                                <hr></hr>
                                <p>Choose from...</p>
                                <div className='cards-bg py-2'>
                                    <p><span className='fa-solid fa-star fa-md mr-2'></span>Custom 3 Page Application</p>
                                    <h5>$650</h5>
                                    <hr></hr>
                                    <p><span className='fa-solid fa-star fa-md mr-2'></span>Custom 5 Page Application</p>
                                    <h5>$899</h5>
                                    <hr></hr>
                                    <p><span className='fa-solid fa-star fa-md mr-2'></span>Custom 7 Page Application</p>
                                    <h5>$1099</h5>
                                </div>
                                <NavLink to='/services/custom-plus-package' className='btn btn-black my-3 px-4'>More Details</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }

        const RenderPackageThree = () => {
            return (
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-4'>
                            <CardBody className='font-two'>
                                <h2 className='text-black'>Business <span className='fa fa-plus'></span></h2>
                                <hr></hr>
                                <CardText>sample</CardText>
                                <NavLink to='/services/business-plus-package' className='btn btn-black px-4'>More Details</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }

        const RenderSteps = () => {
            return (
                <>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <h3 className='font text-center py-3'>Plan <span className='fa fa-file-lines fa-lg'></span></h3>
                                <ul>
                                    <li>Create a roadmap</li>
                                    <li>Design a schedule</li>
                                    <li>Gather material</li>
                                    <li>Make a deadline</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <h3 className='font text-center py-3'>Design <span className="fa-solid fa-object-ungroup fa-lg px-2"></span></h3>
                                <ul>
                                    <li>Establish a theme</li>
                                    <li>Choose your color palettes</li>
                                    <li>Branding & design</li>
                                    <li>Mapping out the responsive design</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <h3 className='font text-center py-3'>Develop <span className='fa-solid fa-code fa-lg'></span></h3>
                                <ul>
                                    <li>Building the framework</li>
                                    <li>Implementing the code</li>
                                    <li>Intergrating top level navigation tools</li>
                                    <li>Administering Search Engine Optimization</li>
                                    <li>Installing high level security</li>
                                </ul>
                            </CardBody>
                        </Card>  
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <h3 className='font text-center py-3'>Launch <span className='fa-solid fa-cloud-arrow-up fa-lg'></span></h3>
                                <ul>
                                    <li>Review material</li>
                                    <li>Testing the application</li>
                                    <li>Launching the application</li>
                                    <li>Continue ongoing support</li>
                                </ul>
                            </CardBody>
                        </Card>  
                    </div>
                </>
            );
        }

        return (
            <>
                <div className='container-fluid'>
                    <div className='container tabs'>
                        <div className='row d-flex justify-content-center py-5'>
                            <div className='col-12 col-md-6 text-center'>
                                <div className='btn-services-tab'>
                                    <NavLink to='/services' className='btn btn-services-active active'><span className='fa fa-box mr-2'></span>Packages <span className='fa fa-chevron-down'></span></NavLink>
                                    <NavLink to='/discover' className='btn btn-services ml-1'><span className='fa-solid fa-globe mr-2'></span>Discover <span className='fa fa-chevron-down'></span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row d-flex justify-content-center text-center pt-5'>
                            <RenderPackageOne />
                            <RenderPackageTwo />
                            <RenderPackageThree />
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row dark-bg my-5 py-5'>
                            <div className='col-12'>
                                <h1 className='font text-white text-center py-5'>How it works?</h1>
                            </div>
                            <div className='row pb-5'>
                                <RenderSteps />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row pb-5 pt-3'>
                            <div className='col-12 col-md-12 col-lg-4 py-3'>
                                <RenderCardOne />
                            </div>
                            <div className='col-12 col-md-12 col-lg-4 py-3'>
                                <RenderCardTwo />
                            </div>
                            <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <RenderCardThree /> 
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <h2 className='font-two pt-5'>Interested in a personal website?</h2>
                                <p className='py-4'>
                                    Showcase your work online with a Personal website just for you. What is a personal website? Well essentialy 
                                    it's a unique way to showcase your work and provide professional information about you. When deciding on building 
                                    a personal website you must ask yourself why this is important to you, maybe you already have the answer. By finding 
                                    a purpose you can start getting to work on what information you would like to share and display for your audience. 
                                    What are some benefits of having a personal website?
                                </p>
                                <ul className='list-unstyled font-two'>
                                    <li><span className='fa fa-square-check mr-3'></span>Stand out from the crowd</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Create trust and credibility</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Showcase your creativity</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Generate opportunities</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Expand your network</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 align-self-center'>
                                <img src='/assets/images/web-design.png' className='img-fluid move-img ml-5' width='320px' height='320px' alt='Personal website'/>
                            </div>
                        </div>
                        <div className='row py-5'>
                            <div className='col-12 col-md-6 order-md-2'>
                                <h2 className='font-two pt-5'>Interested in a business website?</h2>
                                <p className='py-4'>
                                    A website for your business can act as a portal to your customers creating 24/7 on demand awareness to your brand and products. 
                                    It serves as a window in which you can showcase your marketable skills and connect with a targeted audience. When factoring in the costs, 
                                    a website may seem like a luxury that may not seem neccessary. However investing in a website for your business can go a long way in setting 
                                    you up for long-term success. It can be an incredibly important asset with a positive ROI when executed correctly. Word of mouth can only get 
                                    you so far, having a website acts as advertisement in itself, it is a one stop shop to share all your business details and information about each 
                                    of the products and services you provide. Lets look at some of the main reasons why you should consider having an online presense for your business.
                                </p>
                                <ul className='list-unstyled font-two'>
                                    <li><span className='fa fa-square-check mr-3'></span>Attract new customers</li>
                                    <li><span className='fa fa-square-check mr-3'></span>27/7 availability of your products and services</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Brand visibility and recognition</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Generate opportunities</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Online credibility</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 align-self-center'>
                                <img src='/assets/images/online-business.png' className='img-fluid move-img ml-5' width='320px' height='320px' alt='Business website'/>  
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid pb-4'>
                        <RenderContact />
                    </div>
                </div>
            </> 
  
        );
    }
}

export default Services;