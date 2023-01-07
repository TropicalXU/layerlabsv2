//importing main links
import React from 'react';
import { Card, CardBody, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { RenderCardFive, RenderCardFour, RenderCardSix, RenderPackageProcess, RenderContact, Header, HeaderDark } from '../functionalComponents/functionalComponents';

//business package page
const BusinessPackage = () => {

    const RenderBusinessPackage = () => {
        return (
            <div className='container-fluid text-white bkg-dark py-5'>
                <div className='container mb-5'>
                    <div className='row py-3'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <Link className='breadcrumb-link dark-text' to='/services'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Services</span>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='font-two gradient-text'>Business <span className='fa fa-plus'></span>
                            </BreadcrumbItem>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <FadeTransform in
                                transformProps={{
                                exitTransform: 'scale(0.3) translateY(-20%)'
                            }}>
                                <div className='py-5'>
                                    <h1 className='font text-white text-center'>Business <span className='fa fa-plus gradient-text'></span></h1>
                                    <hr></hr>
                                    <CardBody className=''>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <ul className='list-unstyled'>                                      
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Up to 15 individually designed high end pages</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Mobile first designed approach. Fully optimized for all screen sizes.</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>UI/UX Wireframing Process: Detailed Wireframes & User Persona</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>High level interactivity & animation</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Basic database integration</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Advanced SEO integration.</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Site backup & security.</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Additional business functionality and plugin features.</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Managed website launch & support.</h5></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardBody>
                                </div>
                            </FadeTransform>
                        </div>
                        <div className='col-12 col-lg-6 align-self-center'>
                            <img src='/assets/images/business-package.jpg' className='img-fluid custom-image move-img' width='560px' height='620px' alt='Layerlabs home page'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const BusinessPackageDetails = () => {
        return (
            <>
                <div className='row packages'>
                    <div className='col-12 col-lg-4'>
                        <div className='p-4 my-3'>
                            <h3 className='font-two text-center gradient-text'>Collabarative Page Designs</h3>
                            <img src='/assets/images/wireframing.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                            <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                                <li>Choose from 5-15 individually designed custom & collabarative pages.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <div className='p-4 my-3'>
                            <h3 className='font-two text-center gradient-text'>Fully Responsive</h3>
                            <img src='/assets/images/discover.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                            <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                                <li>A responsive web design to adjust to all screen sizes including mobile, tablet and large monitors.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <div className='p-4 my-3'>
                        <h3 className='font-two text-center gradient-text'>Advanced SEO</h3>
                            <img src='/assets/images/seo.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                            <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                                <li>Advanced Search Engine Optimization improving the quality and quantity of website traffic to your website in search engines.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row packages py-4'>
                <div className='col-12 col-lg-4'>
                    <div className='p-4 my-3'>
                    <h3 className='font-two text-center gradient-text'>Database Integration</h3>
                        <img src='/assets/images/database.jpg' className='custom-img img-hover my-4' width='100%' height='340px' alt='Phase 1' />
                        <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                            <li>Scalable data storage and managment including ongoing support for all business needs.</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='p-4 my-3'>
                        <h3 className='font-two text-center gradient-text'>Advanced Security</h3>
                        <img src='/assets/images/protection.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                        <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                            <li>Including advanced website security to ensure the protection against unauthorized access and safeguarding user data.</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='p-4 my-3'>
                        <h3 className='font-two text-center gradient-text'>Integrated Payments</h3>
                        <img src='/assets/images/online-payment.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                        <ul className='list-unstyled text-center font-two grey-text-lite pt-3 pb-4'>
                            <li>Integrated payment features and functionality suited for your business to recieve secure payments.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        );
    }

    return (
        <>
            <HeaderDark />
            <RenderBusinessPackage />
            <div className='container-fluid'>
                {/* imporing render cards plugin */}
                <div className='container py-4'>
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
                </div>
                <div className='container-fluid personal-business my-4 pt-5'>
                    <div className='row'>
                        <div className='col-12 text-center pb-4'>
                            <h1 className='font-two grey-text-lite py-4'>Business<span className='gradient-text ml-1'>+</span> Package Details</h1>
                        </div>
                    </div>
                    <div className='bkg-white py-5'>
                        <BusinessPackageDetails />
                    </div>
                    <div className='mt-5 py-5'>
                        <div className='container'>
                            <div className='bkg-white'>
                            <RenderContact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BusinessPackage;