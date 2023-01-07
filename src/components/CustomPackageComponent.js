//importing main links
import React from 'react';
import { Card, BreadcrumbItem, CardBody } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { Header, HeaderDark, RenderCardFive, RenderCardFour, RenderCardSix, RenderContact, RenderPackageProcess } from '../functionalComponents/functionalComponents';
//custom package page
const CustomPackage = () => {


    const RenderCustomPackage = () => {
        return (
            <div className='container-fluid bkg-dark py-5'>
                <div className='container mb-5'>
                    <div className='row py-3'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <Link className='breadcrumb-link dark-text' to='/services'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Services</span>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='gradient-text font-two'>Standard
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
                                    <h1 className='font text-center text-white'>Standard</h1>
                                    <hr></hr>
                                    <CardBody className=''>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <ul className='list-unstyled text-white'>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Up to 5 individually designed pages</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Mobile first designed approach</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Fully optimized for all screen sizes</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Subtle interactivity & animation</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Standard SEO integration</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Site backup & security</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Contact form plugin installation</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Managed website launch</h5></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardBody>
                                </div>

                            </FadeTransform>
                        </div>
                        <div className='col-12 col-lg-6 align-self-center'>
                            <img src='/assets/images/custompackage.jpg' className='img-fluid custom-image move-img' width='560px' height='620px' alt='Layerlabs home page'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const StandardPackageDetails = () => {
        return (
            <>
                <div className='row packages'>
                    <div className='col-12 col-lg-4'>
                        <Card className='p-4 my-3'>
                            <img src='/assets/images/package-process1.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                            <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                                <li>Choose from 1-5 individual custom designed pages.</li>
                            </ul>
                        </Card>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <Card className='p-4 my-3'>
                            <img src='/assets/images/packages-pages.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                            <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                                <li>Mobile first designed approach for the latest devices and screen sizes.</li>
                            </ul>
                        </Card>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <Card className='p-4 my-3'>
                            <img src='/assets/images/discover.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                            <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                                <li>A responsive web design to adjust to all screen sizes including mobile, tablet and large monitors.</li>
                            </ul>
                        </Card>
                    </div>
                </div>
                <div className='row packages py-4'>
                <div className='col-12 col-lg-4'>
                    <Card className='p-4 my-3'>
                        <img src='/assets/images/seo.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                        <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                            <li>Standard Search Engine Optimization improving the quality and quantity of website traffic to your website in search engines.</li>
                        </ul>
                    </Card>
                </div>
                <div className='col-12 col-lg-4'>
                    <Card className='p-4 my-3'>
                        <img src='/assets/images/protection.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                        <ul className='list-unstyled text-center font-two grey-text-lite pt-3'>
                            <li>Including standard website security to ensure the protection against unauthorized access and safeguarding user data.</li>
                        </ul>
                    </Card>
                </div>
                <div className='col-12 col-lg-4'>
                    <Card className='p-4 my-3'>
                        <img src='/assets/images/web-launch.jpg' className='custom-img img-hover img-fluid my-4' width='100%' height='340px' alt='Phase 1' />
                        <ul className='list-unstyled text-center font-two grey-text-lite pt-3 pb-4'>
                            <li>Managed website launch and advanced testing to ensure a seemless experience.</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </>
        );
    }
    return (
        <>
            <HeaderDark />
            <RenderCustomPackage />
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
                    {/* <RenderPackageProcess /> */}
                </div>
                <div className='container-fluid personal-business my-4 pt-5'>
                <div className='row'>
                            <div className='col-12 text-center pb-4'>
                                <h1 className='font-two grey-text-lite py-4'>Standard Package Details</h1>
                            </div>
                        </div>
                    <div className='bkg-white py-5'>
                        <StandardPackageDetails />
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

export default CustomPackage;