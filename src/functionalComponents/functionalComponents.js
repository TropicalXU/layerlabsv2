//importing main links
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardImgOverlay } from 'reactstrap'; 
import { FadeTransform } from 'react-animation-components';

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
                        <p className='home-card-text'>Proffesional, fully custom & responsive websites built from scratch</p>
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
                        <p className='home-card-text'>Establish a theme, choose your color palettes and construct your brand.</p>
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
                    <p className='home-card-text'>Gather images and material to help you visualize and plan your website</p>
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
            <div className='row text-center d-flex justify-content-center pb-5'>
                <div className='col-12 col-md-12 col-lg-4'>
                    <Card className='bg-gradient home-services-card p-5 mt-5'>
                        <h3 className='font-two text-white'>Web Design</h3>
                        <img src='/assets/images/user-experience.png' className='img-fluid mx-auto mt-3' width='90px' height='90px' />
                    </Card>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <Card className='bg-gradient home-services-card p-5 mt-5'>
                        <h3 className='font-two text-white'>SEO Optimization</h3>
                        <img src='/assets/images/seo-icon.png' className='img-fluid mx-auto mt-3' width='90px' height='90px' />
                    </Card>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <Card className='bg-gradient home-services-card p-5 mt-5'>
                        <h3 className='font-two text-white'>Hosting</h3>
                        <img src='/assets/images/server.png' className='img-fluid mx-auto mt-3' width='90px' height='90px' />
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
            <h1 className='font-two pt-4'>Whats included?</h1>
            <div className='row thin-text d-flex justify-content-center pt-5 pb-4'>
                <div className='col-12 col-md-3 home-card py-5 mt-5'>
                    <img src='/assets/images/front-end.png' className='img-fluid' width='120px' height='120px' />
                    <h5 className='font-two gradient-text py-5'>BESPOKE WEB DESIGN</h5>
                </div>
                <div className='col-12 col-md-3 home-card py-5 mx-5 mt-5'>
                <img src='/assets/images/application.png' className='img-fluid' width='120px' height='120px' />
                    <h5 className='font-two gradient-text py-5'>MOBILE OPTIMIZED</h5>
                </div>
                <div className='col-12 col-md-3 home-card py-5 mt-5'>
                <img src='/assets/images/custom-features.png' className='img-fluid' width='120px' height='120px' />
                    <h5 className='font-two gradient-text py-5'>CUSTOM DEVELOPMENT</h5>
                </div>
            </div>
            <div className='row thin-text d-flex justify-content-center pt-4 pb-5'>
                <div className='col-12 col-md-3 home-card py-5 mt-5'>
                <img src='/assets/images/performance.png' className='img-fluid' width='120px' height='120px' />
                    <h5 className='font-two gradient-text py-5'>SEO INTEGRATION</h5>
                </div>
                <div className='col-12 col-md-3 home-card py-5 mx-5 mt-5'>
                <img src='/assets/images/data-encryption.png' className='img-fluid' width='120px' height='120px' />
                    <h5 className='font-two gradient-text py-5'>SECURITY</h5>
                </div>
                <div className='col-12 col-md-3 home-card py-5 mt-5'>
                <img src='/assets/images/developer.png' className='img-fluid' width='120px' height='120px' />
                    <h5 className='font-two gradient-text py-5'>SUPPORT</h5>
                </div>
            </div>
        </>
    );
}

export const RenderPackageProcess = () => {
    return (
        <>
            <h1 className='font-two'>The Process</h1>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h6 className='thin-text'>PHASE 1</h6>
                    <h2 className='font-two gradient-text'>Discovery</h2>
                    <p></p>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src='/assets/images/discovery.jpg' className='process-img img-fluid my-4' width='100%' />
                </div>
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6 order-lg-2'>
                    <h6 className='thin-text'>PHASE 2</h6>
                    <h2 className='font-two gradient-text'>Wireframing</h2>
                    <p></p>
                </div>
                <div className='col-12 col-md-12 col-lg-6 order-lg-1'>
                    <img src='/assets/images/wireframe.jpg' className='process-img my-2' width='100%' height='300px' />
                </div>
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h6 className='thin-text'>PHASE 3</h6>
                    <h2 className='font-two gradient-text'>Design</h2>
                    <p></p>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src='/assets/images/design.jpg' className='process-img img-fluid my-2' width='100%' />
                </div>
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6 order-lg-2'>
                    <h6 className='thin-text'>PHASE 4</h6>
                    <h2 className='font-two gradient-text'>Development</h2>
                    <p></p>
                </div>
                <div className='col-12 col-md-12 col-lg-6 order-lg-1'>
                    <img src='/assets/images/development.jpg' className='process-img img-fluid my-2' width='100%' /> 
                </div> 
            </div>
            <div className='row py-5 my-4'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h6 className='thin-text'>Phase 5</h6>
                    <h2 className='font-two gradient-text'>Testing</h2>
                    <p></p>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src='/assets/images/testing.jpg' className='process-img img-fluid' width='100%' /> 
                </div>
            </div>
        </>
    );
}

//CONTACT COMPONENT-------------------
export const RenderContact = () => {
    return (
        <div className='row dark-bg text-center py-5'>
            <div className='col-12 col-md-2'>
                <img src='/assets/images/email.png' className='img-fluid' width='180' height='180' alt='Mail image' />
            </div>
            <div className='col-12 col-md-8'>
                <h2 className='font-two text-white py-5'>Let's create something together!</h2>
                <NavLink to='/contact' className='btn btn-gradient font-two'>Get in touch <span className='fa fa-chevron-right ml-2'></span></NavLink>
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
                    <img src='/assets/images/layerlabs-insta1.png' className='img-fluid discover-img' />
                </div>
                <div className='col-12 col-md-4'>
                    <img src='/assets/images/layerlabs-insta.png' className='img-fluid discover-img' />
                </div>
                <div className='col-12 col-md-4'>
                    <img src='/assets/images/layerlabs-insta2.png' className='img-fluid discover-img' />
                </div>
            </div>
            <div className='row pt-5 font-two'>
                <div className='col-12 text-center'>
                    <a className='btn btn-black font-two px-4'>Visit<span className='fa fa-chevron-right ml-2'></span></a>
                </div>
            </div>
        </>
    );
}

//SERVICES AD COMPONENT--------------------
export const RenderServicesAd = () => {
    return (
        <div className='row dark-bg text-center py-5'>
            <div className='col-12 col-md-2 align-self-center'>
                <img src='/assets/images/package-box.png' width='200' height='200' alt='Box image' />
            </div>
            <div className='col-12 col-md-8'>
                <h2 className='font-two text-white py-5'>Interested in your own personal or business website?</h2>
                <h5 className='font-two text-white pb-5'>Check out our service packages.</h5>
                <NavLink to='/services' className='btn btn-gradient font'>Services<span className='fa fa-chevron-right ml-2'></span></NavLink>
            </div>
        </div>
    );
}