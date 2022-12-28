//importing main links
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import { Header, RenderInstagram } from '../functionalComponents/functionalComponents';

//About page component
class About extends Component {
    
    render() {
        //about header image
        const AboutHeader = () => {
            return (
                <Fade in>
                    <div className='about-header d-flex justify-content-center align-items-center my-3'>
                        <div className='row text-center text-white'>
                        <div className='col'>
                            <h1 className='font home-title'>Layerlabs</h1>
                            <h3 className='home-header-text font my-3'>Step into the future of web <span className='gradient-text'>design</span>.</h3>
                            </div>
                        </div>
                    </div>
                </Fade>
            );
        }
        //main about page header
        const AboutPage = () => {
            return (
                <>
                    <div className='col-12 col-md-6'>
                        <h1 className='font-two'>About</h1>
                        <hr></hr>
                        <p className='pt-5'>Hi, my name is Sean Hackett and welcome to my website Layerlabs. There are many layers to consider as a Full
                            Stack Web Developer from writing the back-end code to building the framework of the application, planning and designing the front-end to full deployment of the website.
                        </p>
                        <p className='pb-5'>As an individual I am very creative yet also curious.
                            When I began my journey into web development that curiosity to discover and learn all aspects of the development proccess in building a
                            full scale custom web application was very evident. I created this
                            website with my love for web development specifically creation & design.
                        </p>
                        <Link to='/about/personal-profile' className='btn btn-black font-two px-4 my-4'>Personal Portfolio<span className='fa fa-chevron-right ml-2'></span></Link>
                    </div>
                    <div className='col-12 col-md-6 mt-4 text-center'>
                        <img src='/assets/images/layerlabs-home.png' className='img-fluid move-img' width='560px' height='620px' alt='Layerlabs home page'/>
                    </div>
            </>
            );
        }

        return (
            <>
                <Header />
            
                <div className='container-fluid'>
                    <AboutHeader />
                    {/* about page content*/}
                    <div className='container py-5'>
                        <div className='row py-5'>
                            <AboutPage />
                        </div>
                    </div>
                    {/* about page content */}
                    <div className='container-fluid'>
                        <div className='row dark-bg py-5'>
                            <div className='col-12 col-md-8 about-text text-white py-5'>
                                <h1 className='font-two text-center pb-5'>Why <span className='gradient-text'>Layerlabs?</span></h1>
                                <p className='large-text-two'><b>At Layerlabs I want to bring my own touch
                                    giving you the best and most responsive custom
                                    website design possible. What you want from a website can vary yet
                                    what matters most is the experience yourself and your users have. A clean, cutting edge design
                                    is what we aim to achieve. Whether you're looking for a personal website, portfolio, or business I've got it handled. Every detail matters, from layout and design to
                                    color palettes, security and much more I am with you every step of the way. Check out the discover page to get inspired or view my previous work for
                                    reference.</b>
                                </p>
                            </div>
                            <div className='col-12 col-md-4 pl-5 py-5'>
                                <img src='/assets/images/logo.png' className='img-fluid' width='260px' height='260px' alt='computer'/>
                            </div>
                        </div>
                    </div>
                    {/* render instagram plugin */}
                    <div className='container py-5'>
                        <RenderInstagram />
                    </div>
                </div>
            </>
        );
    }
}

export default About;