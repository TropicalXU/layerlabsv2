//importing main links
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { RenderCardFour, RenderCardFive, RenderCardSix, RenderContact, RenderSteps } from '../functionalComponents/functionalComponents';

//SERVICES MAIN PAGE
class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //RENDERING PACKAGES
        const RenderPackageOne = () => {
            return (
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                    {/* react animations component plugin */}
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-2'>
                            <CardBody className='font-two'>
                                <img src='/assets/images/idea.png' className='img-fluid text-white my-2' width='80px' height='80px'/>
                                <h2>Custom</h2>
                                <p>Pre-built custom website</p>
                                <hr></hr>
                                <h5>Choose from...</h5>
                                <div className='service-cards-bg py-4'>
                                    <h6><span className='fa-solid fa-star fa-md mr-2'></span>Custom 1 Page Application</h6>
                                  
                                    <h6><span className='fa-solid fa-star fa-md mr-2'></span>Custom 3 Page Application</h6>
                              
                                    <h6><span className='fa-solid fa-star fa-md mr-2'></span>Custom 5 Page Application</h6> 
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
                     {/* react animations component plugin */}
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-1'>
                            <CardBody className='font-two'>
                                <img src='/assets/images/package.png' className='img-fluid text-white my-2' width='80px' height='80px'/>
                                <h2>Custom <span className='fa fa-plus'></span></h2>
                                <p>Flexible custom design & features</p>
                                <hr></hr>
                                <h5>Choose from...</h5>
                                <div className='service-cards-bg py-4'>
                                   <h6>Choose from up to 7 custom pages additional features are provided with this package.</h6>
                                   <h6>Prices are available on request.</h6>
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
                     {/* react animations component plugin */}
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-1'>
                            <CardBody className='font-two'>
                                <img src='/assets/images/shuttle.png' className='img-fluid text-white my-2' width='70px' height='70px'/>
                                <h2 className='text-black'>Business <span className='fa fa-plus'></span></h2>
                                <p>Flexible custom design, business features and functionality</p>
                                <hr></hr>
                                <h5>Choose from...</h5>
                                <div className='service-cards-bg py-4'>
                                    <h6>
                                        Choose from up to 12 custom pages with your desired features, functionality and design.
                                        This package is fully flexible to meet your needs. 
                                    </h6>
                                </div>
                                <NavLink to='/services/business-plus-package' className='btn btn-black my-3 px-4'>More Details</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }
        // rendering custom vs template section
        const RenderDifferences = () => {
            return (
                <>
                    <div className='col-12 col-sm-12 col-md-6 py-3'>
                        <Card className='steps-card text-center'>
                            <CardBody>
                                <h1 className='font-two py-3'>Custom</h1>
                                <ul className='list-unstyled py-4'>
                                    <li><span className='fa fa-check mr-2'></span>Flexibility to choose your own design and functionality</li>
                                    <li className='py-3'><span className='fa fa-check mr-2'></span>Higher security built in</li>
                                    <li><span className='fa fa-check mr-2'></span>Built in Search Engin Optimization(SEO)</li>
                                    <li className='py-3'><span className='fa fa-check mr-2'></span>Your site will be tested for all browser and device types</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 py-3'>
                        <Card className='steps-card text-center'>
                            <CardBody>
                                <h1 className='font-two py-3'>Template</h1>
                                <ul className='list-unstyled py-4'>
                                    <li><span className='fa fa-circle-xmark mr-2'></span>Limited options for design & functionality</li>
                                    <li className='py-3'><span className='fa fa-circle-xmark mr-2'></span>Slower site speed</li>
                                    <li><span className='fa fa-circle-xmark mr-2'></span>Not always built with mobile responsiveness</li>
                                    <li className='py-3'><span className='fa fa-circle-xmark mr-2'></span>Organic SEO not built in</li>
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
                    {/* service page tabs navigation */}
                    <div className='container tabs'>
                        <div className='row d-flex justify-content-center py-5'>
                            <div className='col-12 col-md-6 text-center'>
                                <div className='btn-services-tab'>
                                    <NavLink to='/services' className='btn btn-services-active font-two active'><span className='fa fa-box mr-2'></span>Packages <span className='fa fa-chevron-down'></span></NavLink>
                                    <NavLink to='/discover' className='btn btn-services font-two ml-1'><span className='fa-solid fa-globe mr-2'></span>Discover <span className='fa fa-chevron-down'></span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* rendering packages*/}
                    <div className='container'>
                        <div className='row d-flex justify-content-center text-center pt-5'>
                            <RenderPackageOne />
                            <RenderPackageTwo />
                            <RenderPackageThree />
                        </div>
                    </div>
                    {/* rendering custom vs template section*/}
                    <div className='container-fluid'>
                        <div className='row pt-5'>
                            <div className='col-12'>
                                <h1 className='font-two text-center py-5'>Custom Websites vs Template Websites</h1>
                            </div>
                        </div>
                        <div className='row pb-5'>
                                <RenderDifferences />
                            </div>
                    </div>
                    {/* imporing render cards plugin */}
                    <div className='container'>
                        <div className='row pb-5 pt-3'>
                            <div className='col-12 col-md-12 col-lg-4 py-3'>
                                <RenderCardFour />
                            </div>
                            <div className='col-12 col-md-12 col-lg-4 py-3'>
                                <RenderCardFive />
                            </div>
                            <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <RenderCardSix /> 
                            </div>
                        </div>
                        {/* personal/business section */}
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
                                    you so far, having a website acts as advertisement in itself. Lets look at some of the main reasons why you should consider having an online presense for your business.
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
                    {/* importing render contact plugin*/}
                    <div className='container-fluid pb-4'>
                        <RenderContact />
                    </div>
                </div>
            </> 
  
        );
    }
}

export default Services;