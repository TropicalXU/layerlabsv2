import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg } from 'reactstrap'; 

export const RenderCardOne = () => {
    return (
        <>
        <Card className='home-card text-center'>
            <CardBody>
                <span className='fa fa-cubes fa-lg'></span>
                <h2 className='font-two py-3'>Custom</h2>
                <p className='home-card-text'>Create and design a roadmap of what you hope to achieve for your website.</p>
            </CardBody>
        </Card>
        </>
    );
}

export const RenderCardTwo = () => {
    return (
        <>
        <Card className='home-card text-center'>
            <CardBody>
                <span className='fa fa-box fa-lg'></span>
                <h2 className='font-two py-3'>Packages</h2>
                <p className='home-card-text'>Gather images and material to help you visualize and plan your website</p>
            </CardBody>
        </Card>
        </>
    );
}

export const RenderCardThree = () => {
    return (
        <>
        <Card className='home-card text-center'>
            <CardBody>
                <span className='fa fa-square-check fa-lg'></span>
                <h2 className='font-two py-3'>Branding</h2>
                <p className='home-card-text'>Establish a theme, choose your color palettes and construct your brand.</p>
            </CardBody>
        </Card>
        </>
    );
}

export const RenderContact = () => {
    return (
        <div className='row dark-bg text-center py-5'>
            <div className='col-12 col-md-2'>
                <img src='assets/images/email.png' width='180' height='180' />
            </div>
            <div className='col-12 col-md-8'>
                <h2 className='font text-white py-5'>Let's create something together!</h2>
                <NavLink to='/contact' className='btn btn-primary font-two'>GET IN TOUCH</NavLink>
            </div>
        </div>
    );
}

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
                    <Card>
                        <CardImg src='assets/images/logo.png' />
                    </Card>
                </div>
                <div className='col-12 col-md-4'>
                    <Card>
                        <CardImg src='assets/images/logo.png' />
                    </Card>
                </div>
                <div className='col-12 col-md-4'>
                    <Card>
                        <CardImg src='assets/images/logo.png' />
                    </Card>
                </div>
            </div>
        </>
    );
}

export const RenderServicesAd = () => {
    return (
        <div className='row dark-bg text-center py-5'>
            <div className='col-12 col-md-2 align-self-center'>
                <img src='/assets/images/package-box.png' width='200' height='200' />
            </div>
            <div className='col-12 col-md-8'>
                <h2 className='font-two text-white py-5'>Interested in your own personal or business website?</h2>
                <h5 className='font-two text-white pb-5'>Check out our service packages.</h5>
                <NavLink to='/services' className='btn btn-light font'>Services</NavLink>
            </div>
        </div>
    );
}