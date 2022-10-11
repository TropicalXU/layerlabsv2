//importing main links
import React from 'react';
import { Card, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';

//custom plus package page
const CustomPlusPackage = () => {
    return (
        <div className='container-fluid bg-gradient py-5'>
            <div className='container'>
                <div className='row py-3'>
                    <div className='breadcrumb'>
                        <BreadcrumbItem>
                            <NavLink className='breadcrumb-link' to='/services'>
                                <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Services</span>
                            </NavLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className='text-white'>Custom <span className='fa fa-plus'></span>
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
                                <h1 className='font text-center'>Custom <span className='fa fa-plus'></span></h1>
                                <hr></hr>
                            </Card>
                        </FadeTransform>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomPlusPackage;