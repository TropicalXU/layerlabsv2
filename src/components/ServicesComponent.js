//importing main links
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Header, HeaderDark, RenderContact, RenderIncluded, RenderPackageProcess } from '../functionalComponents/functionalComponents';

//SERVICES MAIN PAGE
const Services = () => {

        //RENDERING PACKAGES
        const RenderPackageOne = () => {
            return (
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                    {/* react animations component plugin */}
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Link to='/services/custom-package'>
                            <Card className='package-card py-2'>
                                <CardBody className='font-two'>
                                    <img src='/assets/images/idea.png' className='img-fluid text-white my-2' width='80px' height='80px' alt='idea'/>
                                    <h2>Standard</h2>
                                    <p>Pre-built custom website</p>
                                    <hr></hr>
                                    <h5>Choose from...</h5>
                                    <div className='service-cards-bg p-4'>
                                    <h6><span className='fa fa-check mr-2'></span>Up to 5 individually designed pages.</h6> 
                                    <h6><span className='fa fa-check mr-2'></span>Mobile optimized design and development.</h6>
                                    <h6><span className='fa fa-check mr-2'></span>Standard SEO integration.</h6>
                                    </div>
                                    <Link to='/services/custom-package' className='nav-link btn btn-black my-3 px-4'>More Detials<span className='fa fa-chevron-right ml-2'></span></Link>
                                </CardBody>
                            </Card>
                        </Link>
                    </FadeTransform>
                </div>
            );
        }

        const RenderPackageTwo = () => {
            return ( 
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                     {/* react animations component plugin */}
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Link to='/services/custom-plus-package'>
                            <Card className='package-card py-2'>
                                <CardBody className='font-two'>
                                    <img src='/assets/images/package.png' className='img-fluid text-white my-2' width='80px' height='80px' alt='package'/>
                                    <h2>Advanced</h2>
                                    <p>Flexible custom design & features</p>
                                    <hr></hr>
                                    <h5>Choose from...</h5>
                                    <div className='service-cards-bg p-4'>
                                    <h6><span className='fa fa-check mr-2'></span>Up to 10 individual fully custom pages.</h6>
                                    <h6><span className='fa fa-check mr-2'></span>Collabarative detail and design.</h6>
                                    <h6><span className='fa fa-check mr-2'></span>High level interactivity & animation.</h6>
                                    </div>
                                    <Link to='/services/custom-plus-package' className='nav-link btn btn-black my-3 px-4'>More Details<span className='fa fa-chevron-right ml-2'></span></Link>
                                </CardBody>
                            </Card>
                        </Link>
                    </FadeTransform>
                </div>
            );
        }

        const RenderPackageThree = () => {
            return (
                <div className='col-12 col-md-12 col-lg-12 col-xl-4 py-3'>
                     {/* react animations component plugin */}
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <Link to='/services/business-plus-package'>
                            <Card className='package-card'>
                                <CardBody className='font-two'>
                                    <img src='/assets/images/shuttle.png' className='img-fluid text-white my-2' width='70px' height='70px' alt='shuttle'/>
                                    <h2 className='text-black'>Business <span className='fa fa-plus'></span></h2>
                                    <p>Flexible custom design, business features and functionality</p>
                                    <hr></hr>
                                    <h5>Choose from...</h5>
                                    <div className='service-cards-bg p-4'>
                                        <h6><span className='fa fa-check mr-2'></span>Up to 15 individually designed custom pages. </h6>
                                        <h6><span className='fa fa-check mr-2'></span>Advanced interactivity and animation. </h6>
                                        <h6><span className='fa fa-check mr-2'></span>Advanced SEO integration.</h6>
                                    </div>
                                    <Link to='/services/business-plus-package' className='nav-link btn btn-black mt-3 mb-4 px-4'>More Details<span className='fa fa-chevron-right ml-2'></span></Link>
                                </CardBody>
                            </Card>
                        </Link>
                    </FadeTransform>
                </div>
            );
        }
        // rendering custom vs template section
        const RenderDifferences = () => {
            return (
                <>
                    <div className='col-12 col-sm-12 col-md-6 py-3'>
                        <Card className='steps-card text-center'>
                            <CardBody>
                                <h1 className='font-two py-3'>Custom</h1>
                                <ul className='list-unstyled py-4'>
                                    <li><span className='fa fa-check mr-2'></span>Flexibility to choose your own design and functionality</li>
                                    <li className='py-3'><span className='fa fa-check mr-2'></span>Higher security built in</li>
                                    <li><span className='fa fa-check mr-2'></span>Built in Search Engin Optimization(SEO)</li>
                                    <li className='py-3'><span className='fa fa-check mr-2'></span>Your site will be tested for all browser and device types</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 py-3'>
                        <Card className='steps-card text-center'>
                            <CardBody>
                                <h1 className='font-two py-3'>Template</h1>
                                <ul className='list-unstyled py-4'>
                                    <li><span className='fa fa-circle-xmark mr-2'></span>Limited options for design & functionality</li>
                                    <li className='py-3'><span className='fa fa-circle-xmark mr-2'></span>Slower site speed</li>
                                    <li><span className='fa fa-circle-xmark mr-2'></span>Not always built with mobile responsiveness</li>
                                    <li className='py-3'><span className='fa fa-circle-xmark mr-2'></span>Organic SEO not built in</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                </>
            );
        }

        return (
            <>  
                <HeaderDark />
                <div className='container-fluid bkg-dark'>
                    {/* service page tabs navigation */}
                    <div className='container tabs'>
                        <div className='row d-flex justify-content-center py-5'>
                            <div className='col-12 col-md-6 text-center'>
                                <div className='clear-btn'>
                                    <Link to='/services' className='btn btn-services-active font-two active'><span className='fa fa-box mr-2'></span>Packages <span className='fa fa-chevron-down'></span></Link>
                                    <Link to='/discover' className='btn btn-services font-two ml-1'><span className='fa-solid fa-globe mr-2'></span>Discover <span className='fa fa-chevron-down'></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* rendering packages*/}
                    <div className='container'>
                        <div className='row d-flex justify-content-center text-center py-5'>
                            <RenderPackageOne />
                            <RenderPackageTwo />
                            <RenderPackageThree />
                        </div>
                    </div>
                    <div className='container-fluid text-center py-2 pb-5 mt-5'>
                        {/* rendering includes section imported from functionalComponent.js */}
                        <RenderIncluded />
                        <div className='row pt-5'>
                            <div className='col-12'>
                                <h1 className='font-two text-center text-white py-5'>Custom Websites vs Template Websites</h1>
                            </div>
                        </div>
                        <div className='row pb-5'>
                            <RenderDifferences />
                        </div>
                    </div>
                </div>
                <div className='bkg-horizontal py-4'>

                </div>
                <div className='container-fluid row-grey'>
                    <div className='container pt-5'>
                        <RenderPackageProcess />
                        {/* personal/business section */}
                    </div>
                    {/* importing render contact plugin*/}
                    <div className='container-fluid pb-4'>
                        <RenderContact />
                    </div>
                </div>
            </> 
  
        );

}

export default Services;