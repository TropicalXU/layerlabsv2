//importing main links
import React from 'react';
import { Card, BreadcrumbItem, CardBody } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { RenderCardFive, RenderCardFour, RenderCardSix, RenderContact, RenderPackageProcess } from '../functionalComponents/functionalComponents';
//custom package page
const CustomPackage = () => {


    const RenderCustomPackage = () => {
        return (
            <div className='container-fluid row-contact py-5'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <NavLink className='breadcrumb-link text-white' to='/services'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Services</span>
                                </NavLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='gradient-text font-two'>Custom
                            </BreadcrumbItem>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <FadeTransform in
                                transformProps={{
                                exitTransform: 'scale(0.3) translateY(-20%)'
                            }}>
                                <Card className='custom-card py-5'>
                                    <h1 className='font text-center'>Custom</h1>
                                    <hr></hr>
                                    <CardBody className='text-center p-5'>
                                        <h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Up to 5 individually designed pages</h4>
                                        <h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Mobile first designed approach. Fully optimized for all screen sizes.</h4>
                                        <h4 className='font-two'><span className='fa fa-circle-check mr-4'></span>Subtle interactivity & animation.</h4>
                                        <h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Standard SEO integration.</h4>
                                        <h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Site backup & security.</h4>
                                        <h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Contact form plugin installation.</h4>
                                        <h4 className='font-two py-3'><span className='fa fa-circle-check mr-4'></span>Managed website launch.</h4>
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