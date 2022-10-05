import React from 'react';
import { Card, CardBody } from 'reactstrap'; 

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
                <span className='fa fa-layer-group fa-lg'></span>
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