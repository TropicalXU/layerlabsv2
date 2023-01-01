//importing main links
import React from 'react';
import { Card, CardBody, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { RenderCardFive, RenderCardFour, RenderCardSix, RenderPackageProcess, RenderContact, Header, HeaderDark } from '../functionalComponents/functionalComponents';

//custom plus package page
const CustomPlusPackage = () => {

    const RenderCustomPlusPackage = () => {
        return (
            <div className='container-fluid bkg-dark py-5'>
                <div className='container mb-5'>
                    <div className='row py-3'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <Link className='breadcrumb-link text-white' to='/services'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link text-white font-two'>Services</span>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='font-two gradient-text'>Advanced
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
                                    <h1 className='font text-center text-white'>Advanced</h1>
                                    <hr></hr>
                                    <CardBody className=''>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-12'>
                                                <ul className='list-unstyled text-white'>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Up to 10 individually designed high end pages</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Mobile first designed approach</h5></li>                                         
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Fully optimized for all screen sizes</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>UI/UX Wireframing Process: Detailed Wireframes & User Persona</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>High level interactivity & animation</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>In depth SEO integration</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Site backup & security</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Contact form & newsletter plugin installation</h5></li>
                                                    <li><h5 className='font-two py-3'><span className='fa fa-circle-check gradient-text mr-4'></span>Managed website launch & support</h5></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardBody>
                                </div>
                            </FadeTransform>
                        </div>
                        <div className='col-12 col-lg-6 align-self-center'>
                            <img src='/assets/images/customplus.jpg' className='img-fluid custom-image move-img' width='560px' height='620px' alt='Layerlabs home page'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <HeaderDark />
            <RenderCustomPlusPackage />
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

export default CustomPlusPackage;