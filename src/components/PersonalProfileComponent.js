import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

class PersonalProfile extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid bg-gradient'>
                    <div className='container'>
                        <div className='row py-5'>
                            <div className='col-12'>
                                <h1 className='font text-center text-white py-5'>Personal Profile <span className='fa-regular fa-user ml-2'></span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='container pb-5'>
                        <Fade in>
                        <div className='row profile-card py-5'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <h1 className='font py-4'>A Full Stack Web Developer</h1>
                                        <h3 className='font'>Skills:</h3>
                                        <h4 className='font-two gradient-text py-4'>HTML, CSS, Javascript, React, Node.js, Express.js, MongoDB, Mongoose...</h4>
                                        <a href='/'><span className='fa fa-github fa-lg'></span></a>
                                        <a href='/'><span className='fa fa-linkedin fa-lg ml-3'></span></a>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <p>As an individual I am very motivated, positive and goal orientated with a passion to succeed. Over the last 10 years I have acquired valuable practical experience and knowledge in sales, finance, customer service and teamwork allowing me to attain invaluable interpersonal skills, organizational skills and skills allowing me to adapt to new systems processes and environments. I have a great interest for Web Development having so far completed a Full Stack Web Development Bootcamp as well as being currently enrolled in the Full-Stack Web Development with React Specialization an online course provided by The Hong Kong University of Science and Technology. I am very passionate about all aspects of Web Development and I continuously strive to educate myself further. Over the course of my time as a developer I have built many applications and websites. I have gained a great quantity of experience building and creating applications using environments, frameworks and libraries such as HTML, CSS, JavaScript, React, NodeJS, Express.js, MongoDB and Mongoose. In the process I have achieved hands on experience solving problems and managing my workflow in an efficient and timely manner.
                                            
                                        </p>
                                        <NavLink to='/contact' className='btn btn-outline-dark'>Get in touch</NavLink>
                                        <a href='/assets/resume.pdf' className='btn btn-outline-dark ml-3'>Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <div className='row py-5'>
                            <div className='col-12'>
                                <h1 className='font text-white'>Professional Development</h1>
                            </div>
                        </div>
                        <div className='row profile-card py-5'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <h2 className='font-two py-4'>Full Stack Web Development with React Specialization</h2>
                                        <h4 className='font-two'>The Hong Kong University of Science and Technology</h4>
                                        <h6 className='font-two gradient-text py-4'>August 2022 - October 2022</h6>
                                        <h6>Honors Certificate Recieved: October 2022</h6>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <h4 className='font-two py-5'>Course Content Covered</h4>
                                        <ul>
                                            <li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
                                            <li>Front-End Web Development with React</li>
                                            <li>Server-side Development with NodeJS, Express and MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row profile-card py-5 my-5'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <h2 className='font-two py-4'>The Web Developer Bootcamp 2022</h2>
                                        <h4 className='font-two'>Udemy</h4>
                                        <h6 className='font-two gradient-text py-4'>February 2022 - May 2022</h6>
                                        <h6>Certificate Recieved: May 2022</h6>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <h4 className='font-two py-5'>Course Content Covered</h4>
                                        <ul>
                                            <li>Created static HTML and CSS portfolio sites and landing pages</li>
                                            <li>Used CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma</li>
                                            <li>Created full-stack web applications from scratch</li>
                                            <li>Used Postman to monitor and test APIs</li>
                                            <li>Wrote complex web apps with multiple models and data associations</li>
                                            <li>Used NodeJS to write server-side JavaScript</li>
                                            <li>Used Express and MongoDB to create full-stack JS applications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row py-5'>
                            <div className='col-12'>
                                <h1 className='font text-white'>Ongoing Development</h1>
                            </div>
                        </div>
                        <div className='row profile-card py-5'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <h2 className='font-two py-4'>The Modern React Bootcamp</h2>
                                        <h4 className='font-two'>Udemy</h4>
                                        <h6 className='font-two gradient-text py-4'>July 2022 - Present</h6>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <h4 className='font-two py-5'>Course Content</h4>
                                        <ul>
                                            <li>React Hooks</li>
                                            <li>State Management with useReducer + use Context(Redux Lite)</li>
                                            <li>React State Management Patterns</li>
                                            <li>Writing dynamically styled components with JSS</li>
                                            <li>Integration of UI libraries like Material UI and Bootstrap into React apps</li>
                                            <li>Integrate React with APIs</li>
                                            <li>Forms and complex validations in React</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalProfile;