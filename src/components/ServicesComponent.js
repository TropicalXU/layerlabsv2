import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { RenderCardOne, RenderCardThree, RenderCardTwo } from '../functionalComponents/functionalComponents';


class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const RenderPackageOne = () => {
            return (
                <div className='col-12 col-md-4 py-3'>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-4'>
                            <CardBody>
                                <h3 className='font'>Custom</h3>
                                <hr></hr>
                                <CardText>sample</CardText>
                                <NavLink to='/services/custom-package' className='btn btn-primary'>Read More</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }

        const RenderPackageTwo = () => {
            return ( 
                <div className='col-12 col-md-4 py-3'>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-4'>
                            <CardBody>
                                <h3 className='font'>Custom <span className='fa fa-plus'></span></h3>
                                <hr></hr>
                                <CardText>sample</CardText>
                                <NavLink to='/services/custom-plus-package' className='btn btn-primary'>Read More</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }

        const RenderPackageThree = () => {
            return (
                <div className='col-12 col-md-4 py-3'>
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Card className='package-card py-4'>
                            <CardBody>
                                <h3 className='font text-black'>Business <span className='fa fa-plus'></span></h3>
                                <hr></hr>
                                <CardText>sample</CardText>
                                <NavLink to='/services/business-plus-package' className='btn btn-primary'>Read More</NavLink>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }

        const RenderSteps = () => {
            return (
                <>
                    <div className='col-12 col-md-3 py-3'>
                        <Card className='steps-card'>
                            <CardBody>
                                <h3 className='font text-center py-3'>Plan <span className='fa fa-file-lines fa-lg'></span></h3>
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
                                <h3 className='font text-center py-3'>Design <span className="fa-solid fa-object-ungroup fa-lg px-2"></span></h3>
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
                                <h3 className='font text-center py-3'>Develop <span className='fa-solid fa-code fa-lg'></span></h3>
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
                                <h3 className='font text-center py-3'>Launch <span className='fa-solid fa-cloud-arrow-up fa-lg'></span></h3>
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
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center py-5'>
                            <div className='col-12 col-md-4 text-center'>
                                <div className='btn-services-tab'>
                                    <NavLink to='/services' className='btn btn-services-active active'><span className='fa fa-box mr-2'></span>Packages <span className='fa fa-chevron-down'></span></NavLink>
                                    <NavLink to='/discover' className='btn btn-services ml-1'><span className='fa-solid fa-globe mr-2'></span>Discover <span className='fa fa-chevron-down'></span></NavLink>

                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row d-flex justify-content-center text-center py-5'>
                            <RenderPackageOne />
                            <RenderPackageTwo />
                            <RenderPackageThree />
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row dark-bg my-5 py-5'>
                            <div className='col-12'>
                                <h1 className='font text-white text-center py-5'>How it works?</h1>
                            </div>
                            <div className='row pb-5'>
                                <RenderSteps />
                            </div>
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
                </div>
            </> 
  
        );
    }
}

export default Services;