//importing main links
import React from 'react';
import { Card, BreadcrumbItem, CardBody } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { Header, RenderCardFive, RenderCardFour, RenderCardSix, RenderContact, RenderPackageProcess } from '../functionalComponents/functionalComponents';
//custom package page
const CustomPackage = () => {


    const RenderCustomPackage = () => {
        return (
            <div className='container-fluid bkg-dark py-5'>
                <div className='container mb-5'>
                    <div className='row py-3'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <Link className='breadcrumb-link text-white' to='/services'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Services</span>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='gradient-text font-two'>Custom
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
                                    <h1 className='font text-center text-white'>Custom</h1>
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
    return (
        <>
            <Header />
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
                    <RenderPackageProcess />
                </div>
                <div className='container-fluid my-4'>
                    <RenderContact />
                </div>
            </div>
        </>
    );
}

export default CustomPackage;