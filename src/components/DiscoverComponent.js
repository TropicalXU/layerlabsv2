//importing main links
import React, { Component } from 'react';
import { HeaderDark, RenderInstagram, RenderServicesAd } from '../functionalComponents/functionalComponents';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

//discover page
class Discover extends Component {
    render() {
        /*  what matters content function */
        const RenderList = () => {
            return (
                <>
                    <div className='row my-3 py-5'>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <h2 className='font-two'><span className='number gradient-text'>01.</span>Clean & Responsive Design</h2>
                            <p className='pt-3'>Having a responsive design not only looks good but is essential for optimal user experience.
                                Responsive means the adaptation of the layout whatever device the user is on. Allowing the webpage to adapt to the screen is crutial in most if not all modern websites.
                                Whether its for mobile, tablet, laptops and larger displays a responsive design is flexible to the ratio of the screen. When screens are minimized
                                we want to make sure the layout responds and adjusts.
                            </p>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 mt-3 text-center align-self-center'>
                            <img src='/assets/images/advertising.png' className='img-fluid move-img ml-5' width='260px' height='260px' alt='Personal website'/>
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-12 col-lg-6 order-lg-2'>
                            <h2 className='font-two'><span className='number gradient-text'>02.</span>Branding</h2>
                            <p class="pt-3">
                                Your brand is your identity, it tells a story of who you are and what you stand for. Having a brand provides a sense of familirarity to your users. It gives your website it's own personality bringing your
                                ideas and products to life. There are many things to consider when creating your brand. Your logo which stands as your identity. A clean and simple logo is important to establish, it brings with it a sense of recognition and awareness. 
                                Remember your brand should echo your personality this is key to bringing it to life. Along with personality is your color palette. Choose colors that represent you and your brand but keep in mind too many colors can create distraction. 
                                Two or three primary colors should be more than enough. Lastly you want your brand to create trust. It is essential to keep your website functional and current with up to date content. Thus increasing your brands authority and providing confidence to your users.
                            </p>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 order-lg-1 mt-3 text-center align-self-center'>
                            <img src='/assets/images/rating.png' className='img-fluid move-img ml-5' width='260px' height='260px' alt='Personal website'/>
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <h2 className='font-two'><span className='number gradient-text'>03.</span>Navigation</h2>
                            <p class="pt-3">
                                Implementing and organizing the navigation structure of your website is crutial when planning the layout of your site. Think of yourself as the user, have you ever clicked on a website and found yourself lost and overwhelmed? Well
                                at times you can simply get frustrated and leave, especially if there is a lot of content to sift through. This is one thing you cannot fall short on when planning a website. Like yourself you want your users to have a seemless experience when 
                                navigating through your site. Thus establishing a clean navigation menu is key for optimal user experience. On another note secondary navigation functions are just as important. Making sure to successfully implement navigation within each page and 
                                section of your content is paramount allowing your users to easily maneuver throughout the website. To accomplish this lets consider these rules:
                            </p>
                            <ul className='list-unstyled font-two'>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Prioritize consistency</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Design clear interactions</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Avoid deep navigation</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Design for responsive compatibility</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 mt-3 text-center align-self-center'>
                            <img src='/assets/images/location.png' className='img-fluid move-img ml-5' width='260px' height='260px' alt='Website navigation logo'/>
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-12 col-lg-6 order-lg-2'>
                            <h2 className='font-two'><span className='number gradient-text'>04.</span>Search Engine Optimization</h2>
                            <p class="pt-3">
                                The job of a search engine is quite simple which is to provide users with the most relevent information. It does this by analyzing information using search algorithms. The goal of Search Engine Optimization(SEO) is to expand the visibility of your website bringing more visitors
                                through search results. Essentially it allows your website to scale up through the rankings. Having an SEO strategy in place
                                creates awareness allowing users to easily find you when searching key words within certain categories. SEO works by optimizing a websites content, conducting keyword research which in turn 
                                provides inbound links bringing acknowledgement and increasing each individual contents ranking. The more visibility recieved the higher the ranking through each link that is clicked.
                            </p>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 order-lg-1 mt-3 text-center align-self-center'>
                            <img src='/assets/images/optimizing.png' className='img-fluid move-img ml-5' width='260px' height='260px' alt='Personal website'/>
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <h2 className='font-two'><span className='number gradient-text'>05.</span>Security</h2>
                            <p class="pt-3">
                                Security should be a top priority when it comes to building a website. Website security provides protection not only to your data but also your users data against any type of malicious attack. Cyber attacks
                                can not just effect your privacy and data but also the functionality of your website. Additionally it can also have lasting negative effects to your brands identity. For users this can significantly destroy
                                confidence in your website. At Layerlabs it is of upmost importance to implement full scale security features to make sure your website is free from any potential risks or harm to you, your data or users.
                                Here is a list of some of these potential risks:
                            </p>
                            <ul className='list-unstyled font-two'>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Cross Site Scripting(XSS)</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>SQL Injecting</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Cross-Site Request Forgery(CSRF)</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>Denial of Service(DOS)</li>
                                <li><span className='fa fa-check gradient-text mr-3'></span>File Inclusion</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6 mt-3 text-center align-self-center'>
                        <img src='/assets/images/security.png' className='img-fluid move-img ml-5' width='260px' height='260px' alt='Personal website'/>
                        </div>
                    </div>
                </>
            );
        }


        return (
            <>
                <HeaderDark />
                <div className='container-fluid bkg-dark discover-page py-5'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-12 col-md-6 text-center'>
                                {/* discover page links tab */}
                                <div className='clear-btn'>
                                    <Link to='/services' className='btn btn-services font-two'><span className='fa fa-box mr-2'></span>Packages <span className='fa fa-chevron-down'></span></Link>
                                    <Link to='/discover' className='btn btn-services-active font-two active ml-2'><span className='fa-solid fa-globe mr-2'></span>Discover <span className='fa fa-chevron-down'></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* main discover page content*/}
                    <div className='container-fluid header pt-5'>
                        <div className='container'>
                            <div className='col-12 text-center'>
                                <Fade in>
                                    <h1 className='font-two pt-5 text-white large-text-header'>What <i className='gradient-text'>really</i> matters?</h1> 
                                </Fade>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row p-5 mt-5 bkg-dark'>
                                <div className='col-12 col-lg-8'>
                                <p class="large-text-two text-white my-5"><b>Well lets take a look at some key components when considering building a successful website. 
                                        Intergrating a clean, simple and responsive design is what provides great user experience along with implementing easy to navigate web pages. 
                                        Creating familirarity and awareness by designing a respectable brand model. Administering effective
                                        Search Engine Optimization to bring visibility within the search engine ecosystem thus allowing users to easily find you. Lastly making sure your website is
                                        intergrated with end to end encryption and proper security measures so that your data and user data is fully secure preventing any third party access.</b>
                                    </p>
                                </div>
                                <div className='col-12 col-lg-4 text-center align-self-center pt-5'>
                                    <img src='/assets/images/programmer.png' className='img-fluid align-self-center' width='260px' height='260px' alt='Building blocks'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    {/* rendering list */}
                    <div className='container py-4'>
                        <Stagger in>
                            <Fade in>
                                <RenderList />
                            </Fade>
                        </Stagger>
                    </div>
                    {/* rendering instagram plugin */}
                    <div className='container'>
                        <div className='bkg-white'>
                            <RenderServicesAd />
                        </div>
                    </div>
                    <div className='container py-5'>
                        <RenderInstagram />
                    </div>
                </div>
            </>
        );
    }
}

export default Discover;