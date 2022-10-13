//importing main links
import React from 'react';
import { Card, CardBody, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { RenderCardFive, RenderCardFour, RenderCardSix, RenderPackageProcess, RenderContact } from '../functionalComponents/functionalComponents';

//business package page
const BusinessPackage = () => {

    const RenderBusinessPackage = () => {
        return (
            <div className='container-fluid text-white row-contact py-5'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <Link className='breadcrumb-link text-white' to='/services'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Services</span>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='font-two gradient-text'>Business <span className='fa fa-plus'></span>
                            </BreadcrumbItem>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <FadeTransform in
                                transformProps={{
                                exitTransform: 'scale(0.3) translateY(-20%)'
                            }}>
                                <Card className='business-card p-5'>
                                    <h1 className='font text-white text-center'>Business <span className='fa fa-plus gradient-text'></span></h1>
                                    <hr></hr>
                                    <CardBody className=''>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-8'>
                                                <ul className='list-unstyled text-center'>                                      
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Up to 15 individually designed high end pages</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Mobile first designed approach. Fully optimized for all screen sizes.</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>UI/UX Wireframing Process: Detailed Wireframes & User Persona</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>High level interactivity & animation</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Basic database integration</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Advanced SEO integration.</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Site backup & security.</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Additional functionality and plugin features.</h4></li>
                                                    <li><h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Managed website launch & support.</h4></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </FadeTransform>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
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
                    <RenderPackageProcess />
                </div>
                <div className='container-fluid my-4'>
                    <RenderContact />
                </div>
            </div>
        </>
    );
}

export default BusinessPackage;