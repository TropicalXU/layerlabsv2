//importing main links
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg } from 'reactstrap'; 
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

//PACKAGES-------------------------
export const RenderPackageOne = () => {
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
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

export const RenderPackageTwo = () => {
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
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

export const RenderPackageThree = () => {
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
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

//STEPS SECTION----------------------
export const RenderSteps = () => {
    return (
        <>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3'>
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
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3'>
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
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3'>
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
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3'>
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

//CONTACT COMPONENT-------------------
export const RenderContact = () => {
    return (
        <div className='row dark-bg text-center py-5'>
            <div className='col-12 col-md-2'>
                <img src='assets/images/email.png' className='img-fluid' width='180' height='180' alt='Mail image' />
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