import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { RenderCardOne, RenderCardThree, RenderCardTwo } from '../functionalComponents/functionalComponents';


class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const RenderPackageOne = () => {
            return (
                <>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card'>
                            <CardBody>
                                <h3 className='font'>Custom</h3>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </>
            );
        }

        const RenderPackageTwo = () => {
            return ( 
                <>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card'>
                            <CardBody>
                                <h3 className='font'>Custom <span className='fa fa-plus'></span></h3>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </>
            );
        }

        const RenderPackageThree = () => {
            return (
                <>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card'>
                            <CardBody>
                                <h3 className='font'>Business <span className='fa fa-plus'></span></h3>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </>
            );
        }

        const RenderSteps = () => {
            return (
                <>
                    <div className='col-12 col-md-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <CardTitle className='font text-center'>Plan <span className='fa fa-file-lines fa-lg'></span></CardTitle>
                                <ul>
                                    <li>Create a roadmap</li>
                                    <li>Design a schedule</li>
                                    <li>Gather material</li>
                                    <li>Establish your brand</li>
                                    <li>Make a deadline</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <CardTitle className='font text-center'>Design</CardTitle>
                                <ul>
                                    <li>Establish a theme</li>
                                    <li>Choosing color palettes</li>
                                    <li>Branding design</li>
                                    <li>Mapping out the responsive design</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <CardTitle className='font text-center'>Develop</CardTitle>
                                <ul>
                                    <li>Building the framework</li>
                                    <li>Implementing the code</li>
                                    <li>Intergrating top level navigation tools</li>
                                    <li>Administering Search Engine Optimization</li>
                                    <li>Installing high level security</li>
                                </ul>
                            </CardBody>
                        </Card>  
                    </div>
                    <div className='col-12 col-md-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <CardTitle className='font text-center'>Launch</CardTitle>
                                <ul>
                                    <li>Review material</li>
                                    <li>Testing the application</li>
                                    <li>Launching the application</li>
                                    <li>Continue ongoing support</li>
                                </ul>
                            </CardBody>
                        </Card>  
                    </div>
                </>
            );
        }

        return (
            <>
                <div className='container-fluid py-5'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center py-5'>
                            <div className='col-12 col-md-4 text-center'>
                                <div className='btn-services-tab'>
                                    <NavLink to='/services' className='btn btn-services-active active'>Packages <span className='fa fa-chevron-down'></span></NavLink>
                                    <NavLink to='/discover' className='btn btn-services ml-3'>Discover</NavLink>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row text-center py-5'>
                            <div className='col-12 col-md-4'>
                                <RenderPackageOne />
                            </div>
                            <div className='col-12 col-md-4'>
                                <RenderPackageTwo />
                            </div>
                            <div className='col-12 col-md-4'>
                                <RenderPackageThree />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row dark-bg my-5 py-5'>
                        <div className='col-12'>
                            <h1 className='font text-white text-center py-5'>How it works?</h1>
                        </div>
                        <RenderSteps />
                    </div>
                </div>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-12 col-md-4 py-3'>
                            <RenderCardOne />
                        </div>
                        <div className='col-12 col-md-4 py-3'>
                            <RenderCardTwo />
                        </div>
                        <div className='col-12 col-md-4 py-3'>
                           <RenderCardThree /> 
                        </div>
                    </div>
                </div>
            </>
  
        );
    }
}

export default Services;