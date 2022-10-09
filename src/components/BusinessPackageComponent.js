//importing main links
import React from 'react';
import { Card, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';

//business package page
const BusinessPackage = () => {
    return (
        <div className='container-fluid bg-gradient py-5'>
            <div className='container'>
                <div className='row py-3'>
                    <div className='breadcrumb'>
                        <BreadcrumbItem>
                            <NavLink className='breadcrumb-link' to='/services'>
                                <span className='fa fa-chevron-left'></span> <span className='b-link'>Services</span>
                            </NavLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className='text-white'>Business <span className='fa fa-plus'></span>
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
                                <h1 className='font text-white text-center'>Business <span className='fa fa-plus'></span></h1>
                                <hr></hr>
                            </Card>
                        </FadeTransform>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessPackage;