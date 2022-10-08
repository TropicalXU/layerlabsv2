import React, { Component } from 'react';
import { RenderContact, RenderInstagram, RenderServicesAd } from '../functionalComponents/functionalComponents';
import { NavLink } from 'react-router-dom';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';

class Discover extends Component {
    render() {

        const RenderList = () => {
            return (
                <>
                    <div className='row my-3 py-5'>
                        <div className='col-12 col-md-6'>
                            <h2 className='font-two'>Clean & Responsive Design</h2>
                            <p className='pt-3'>Having a responsive design not only looks good but is essential for optimal user experience.
                                Responsive means the adaptation of the layout whatever device the user is on. Allowing the webpage to adapt to the screen is crutial in most if not all modern websites.
                                Wether its for mobile, tablet, laptops and larger displays a responsive design is flexible to the ratio of the screen. When screens are minimized
                                we want to make sure the layout responds and adjusts.
                            </p>
                        </div>
                        <div className='col-12 col-md-6 mt-3'>
                            <img className='discover-img img-fluid' src='assets/images/discover1.jpg' />
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-6 order-md-2'>
                            <h2 className='font-two'>Branding</h2>
                            <p class="pt-3">
                                Your brand is your identity, it tells a story of who you are and what you stand for. Having a brand provides a sense of familirarity to your users. It gives your website it's own personality bringing your
                                ideas and products to life. There are many things to consider when creating your brand. Your logo which stands as your identity. A clean and simple logo is important to establish, it brings with it a sense of recognition and awareness. 
                                Remember your brand should echo your personality this is key to bringing it to life. Along with personality is your color palette. Choose colors that represent you and your brand but keep in mind too many colors can create distraction. 
                                Two or three primary colors should be more than enough. Lastly you want your brand to create trust. It is essential to keep your website functional and current with up to date content. Thus increasing your brands authority and providing confidence to your users.
                            </p>
                        </div>
                        <div className='col-12 col-md-6 order-md-1 mt-3'>
                            <img className='discover-img img-fluid' src='assets/images/discover2.jpg' />
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-6'>
                            <h2 className='font-two'>Navigation</h2>
                            <p class="pt-3">
                                Implementing and organizing the navigation structure of your website is crutial when planning the layout of your site. Think of yourself as the user, have you ever clicked on a website and found yourself lost and overwhelmed? Well
                                at times you can simply get frustrated and leave, especially if there is a lot of content to sift through. This is one thing you cannot fall short on when planning a website. Like yourself you want your users to have a seemless experience when 
                                navigating through your site. Thus establishing a clean navigation menu is key for optimal user experience. On another note secondary navigation functions are just as important. Making sure to successfully implement navigation within each page and 
                                section of your content is paramount allowing your users to easily maneuver throughout the website. To accomplish this lets consider these rules:
                            </p>
                            <ul className='list-unstyled font-two'>
                                <li><span className='fa fa-check mr-3'></span>Prioritize consistency</li>
                                <li><span className='fa fa-check mr-3'></span>Design clear interactions</li>
                                <li><span className='fa fa-check mr-3'></span>Avoid deep navigation</li>
                                <li><span className='fa fa-check mr-3'></span>Design for responsive compatibility</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 mt-3'>
                            <img className='discover-img img-fluid' src='assets/images/discover3.jpg' />
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-6 order-md-2'>
                            <h2 className='font-two'>Search Engine Optimization</h2>
                            <p class="pt-3">
                                The job of a search engine is quite simple which is to provide users with the most relevent information. It does this by analyzing information using search algorithms. The goal of Search Engine Optimization(SEO) is to expand the visibility of your website bringing more visitors
                                through search results. Essentially it allows your website to scale up through the rankings. Having an SEO strategy in place
                                creates awareness allowing users to easily find you when searching key words within certain categories. SEO works by optimizing a websites content, conducting keyword research which in turn 
                                provides inbound links bringing acknowledgement and increasing each individual contents ranking. The more visibility recieved the higher the ranking through each link that is clicked.
                            </p>
                        </div>
                        <div className='col-12 col-md-6 order-md-1 mt-3'>
                            <img className='discover-img img-fluid' src='assets/images/discover4.jpg' />
                        </div>
                    </div>
                    <div className='row mb-3 py-5'>
                        <div className='col-12 col-md-6'>
                            <h2 className='font-two'>Security</h2>
                            <p class="pt-3">
                                Security should be a top priority when it comes to building a website. Website security provides protection not only to your data but also your users data against any type of malicious attack. Cyber attacks
                                can not just effect your privacy and data but also the functionality of your website. Additionally it can also have lasting negative effects to your brands identity. For users this can significantly destroy
                                confidence in your website. At Layerlabs it is of upmost importance to implement full scale security features to make sure your website is free from any potential risks or harm to you, your data or users.
                                Here is a list of some of these potential risks:
                            </p>
                            <ul className='list-unstyled font-two'>
                                <li><span className='fa fa-check mr-3'></span>Cross Site Scripting(XSS)</li>
                                <li><span className='fa fa-check mr-3'></span>SQL Injecting</li>
                                <li><span className='fa fa-check mr-3'></span>Cross-Site Request Forgery(CSRF)</li>
                                <li><span className='fa fa-check mr-3'></span>Denial of Service(DOS)</li>
                                <li><span className='fa fa-check mr-3'></span>File Inclusion</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 mt-3'>
                        <img className='discover-img img-fluid' src='assets/images/discover5.jpg' />
                        </div>
                    </div>
                </>
            );
        }


        return (
            <div className='container-fluid discover-page py-5'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12 col-md-6 text-center'>
                            <div className='btn-services-tab'>
                                <NavLink to='/services' className='btn btn-services'><span className='fa fa-box mr-2'></span>Packages <span className='fa fa-chevron-down'></span></NavLink>
                                <NavLink to='/discover' className='btn btn-services-active active ml-2'><span className='fa-solid fa-globe mr-2'></span>Discover <span className='fa fa-chevron-down'></span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid pt-5'>
                <h1 className='font text-center pt-5'>What <i className='gradient-text'>really</i> matters?</h1> 
                <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                    <div className='row card-discover py-5 mt-5'>
                        <div className='col-12 col-md-8'>
                           <p class="large-text text-white my-5">Well lets take a look at some key components when considering building a successful website. 
                                Intergrating a clean, simple and responsive design is what provides great user experience along with implementing easy to navigate web pages. 
                                Creating familirarity and awareness by designing a respectable brand model. Administering effective
                                Search Engine Optimization to bring visibility within the search engine ecosystem thus allowing users to easily find you. Lastly making sure your website is
                                intergrated with end to end encryption and proper security measures so that your data and user data is fully secure preventing any third party access.
                            </p>
                        </div>
                        <div className='col-12 col-md-4 text-center'>
                            <img src='/assets/images/blocks.png' className='img-fluid move-img' width='320px' height='320px'/>
                        </div>
                    </div>
                    </FadeTransform>
                </div>
                <div className='container py-4'>
                    <Stagger in>
                        <Fade in>
                            <RenderList />
                        </Fade>
                    </Stagger>
                </div>
                <div className='container-fluid'>
                    <RenderServicesAd />
                </div>
                <div className='container py-5'>
                    <RenderInstagram />
                </div>
            </div>
        );
    }
}

export default Discover;