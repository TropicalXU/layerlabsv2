//importing main links
import React from 'react';
import { Card, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { RenderCardFive, RenderCardFour, RenderCardSix } from '../functionalComponents/functionalComponents';

//business package page
const BusinessPackage = () => {

    const RenderBusinessPackage = () => {
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
                                <Card className='business-card py-5'>
                                    <h1 className='font text-white text-center'>Business <span className='fa fa-plus gradient-text'></span></h1>
                                    <hr></hr>
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
                </div>
            </div>
        </>
    );
}

export default BusinessPackage;