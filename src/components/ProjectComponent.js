import React from 'react';
import { RenderServicesAd } from '../functionalComponents/functionalComponents';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <div className='row-layerlabs'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white shirleys-studio-header'>Projects</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='row py-5'>
                        <div className='col-12'>
                            <h2 className='font text-center py-5'>Check out my work below.</h2>
                            <p className='large-text text-center dark-bg text-white py-5'>Here are a few projects and websites I have designed and created here at Layerlabs using 
                                the knowledge and expertise I have aquired throughout my web development journey. I created these 
                                applications from the ground up. Each website is intergrated with fully responsive layouts and designs 
                                for all devices using tools and frameworks such as React, Javascript, CSS and HTML.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row align-items-center py-5'>
                        <div className='col-12 col-md-6'>
                            <h2 className='font'>Shrileys Art Studio</h2>
                            <p className='py-5'>
                                A small business website built for an artist to showcase their work and passion for art. This website features a built in store with secure payment options such as 
                                Stripe, Google Pay, Apple Pay and Visa. You can easily browse the gallery, find a painting you like view and buy. The checkout experience is quick and easy, make a 
                                purchase within seconds.
                            </p>
                            <NavLink to='/projects/shirleys-studio' className='btn btn-outline-dark'>View Project</NavLink>
                            <a href='/'><span className='fa fa-github fa-lg ml-3'></span></a>
                        </div>
                        <div className='col-12 col-md-6 pt-4'>
                            <img className='discover-img' src='assets/images/shirley-studio.png' />
                        </div>
                    </div>
                    <div className='row align-items-center py-5'>
                        <div className='col-12 col-md-6 order-md-2'>
                            <h2 className='font'>Vacay</h2>
                            <p className='py-5'>
                            Vacay is a website built on top of the React framework. This is a project based website for the Front End Development With React Specialization 
                            (honors)course from The Hong Kong University of Science and Technology.
                            </p>
                            <NavLink to='/projects/vacay' className='btn btn-outline-dark'>View Project</NavLink>
                            <a href='/'><span className='fa fa-github fa-lg ml-3'></span></a>
                        </div>
                        <div className='col-12 col-md-6 order-md-1 pt-4'>
                            <img className='discover-img' src='assets/images/vacay.png' />
                        </div>
                    </div>
                    <div className='row align-items-center py-5'>
                        <div className='col-12 col-md-6'>
                            <h2 className='font'>Viewpoint Ireland</h2>
                            <p className='py-5'>
                                A list of key scenic locations to view and stay in Ireland. This website features Register and Login options 
                                which allow the user to post and upload images alongside a location of their choice. The application also features a built in map 
                                so you can view and pinpoint the exact location of each site.
                            </p>
                            <NavLink to='/' className='btn btn-outline-dark'>View Project</NavLink>
                            <a href='/'><span className='fa fa-github fa-lg ml-3'></span></a>
                        </div>
                        <div className='col-12 col-md-6 pt-4'>
                            <img className='discover-img' src='assets/images/vacay.png' />
                        </div>
                    </div>
                </div>
                <div className='container-fluid my-4 pt-3'>
                    <RenderServicesAd />
                </div>
            </div>
        </>
    );
}

export default Projects;