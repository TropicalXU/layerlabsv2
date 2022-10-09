//importing main links
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Fade } from 'react-animation-components';

//PERSONAL PROFILE PAGE
class PersonalProfile extends Component {
    constructor(props) {
        //applying the state for modal use
        super(props);
        this.state = {
            isModalOneOpen: false,
            isModalTwoOpen: false,
            isModalThreeOpen: false
        };
        this.toggleModalOne = this.toggleModalOne.bind(this);
        this.toggleModalTwo = this.toggleModalTwo.bind(this);
        this.toggleModalThree = this.toggleModalThree.bind(this);

    }
    // modal functionality
    toggleModalOne() {
        this.setState({
            isModalOneOpen: !this.state.isModalOneOpen
        });
    }

    toggleModalTwo() {
        this.setState({
            isModalTwoOpen: !this.state.isModalTwoOpen
        });
    }

    toggleModalThree() {
        this.setState({
            isModalThreeOpen: !this.state.isModalThreeOpen
        });
    }


    render() {
        // configuting modalheader close buttons
        const closeBtn = (
            <button className="close" onClick={this.toggleModalOne} type="button">
               <span className='fa fa-xmark text-white'></span>
            </button>
        );
        const closeBtnTwo = (
            <button className="close" onClick={this.toggleModalTwo} type="button">
               <span className='fa fa-xmark text-white'></span>
            </button>
        );
        const closeBtnThree = (
            <button className="close" onClick={this.toggleModalThree} type="button">
               <span className='fa fa-xmark text-white'></span>
            </button>
        );
        
        return (
            <>  {/* rendering modals */}
                <Modal isOpen={this.state.isModalOneOpen} toggle={this.toggleModalOne}>
                    <ModalHeader className='modal-header text-white font-two' toggle={this.toggleModalOne} close={closeBtn}>More Details:</ModalHeader>
                    <ModalBody className='modal-body'>
                        <ul className='list-unstyled font-two'>
                            <li><span className='fa fa-check mr-2'></span>Development environments: Git, Node, NPM</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>React components, state, props, lifecycle methods</li>
                            <li><span className='fa fa-check mr-2'></span>Functional components, React Router, React Virtual DOM</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>React Forms and Redux</li>
                            <li><span className='fa fa-check mr-2'></span>Fetch, promises and React animations</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>REST API with Express, MongoDB and Mongoose</li>
                            <li><span className='fa fa-check mr-2'></span>Backend as a Service(BaaS)</li>
                        </ul>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalTwoOpen} toggle={this.toggleModalTwo}>
                    <ModalHeader className='modal-header text-white font-two' toggle={this.toggleModalTwo} close={closeBtnTwo}>More Details:</ModalHeader>
                    <ModalBody>
                        <ul className='list-unstyled'>
                            <li><span className='fa fa-check mr-2'></span>Created responsive and accessible layouts</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>Used Javascript variables, conditionals, loops, functions, arrays and objects</li>
                            <li><span className='fa fa-check mr-2'></span>Implemented user authentication</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>Recognizing and preventing common security exploits like SQL-Injection and XSS</li>
                            <li><span className='fa fa-check mr-2'></span>Deploying applications and working with cloud databases</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>Created a complicated yelp-like application from scratch</li>
                         </ul>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalThreeOpen} toggle={this.toggleModalThree}>
                    <ModalHeader className='modal-header text-white font-two' toggle={this.toggleModalThree} close={closeBtnThree}>More details:</ModalHeader>
                    <ModalBody>
                        <ul className='list-unstyled'>
                            <li><span className='fa fa-check mr-2'></span>Master React Router</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>Common React Router Patterns</li>
                            <li><span className='fa fa-check mr-2'></span>React design patterns and strategies</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>Add complex animations to React projects</li>
                            <li><span className='fa fa-check mr-2'></span>Optimize React components</li>
                            <li className='py-3'><span className='fa fa-check mr-2'></span>Using Context API with Hooks</li>
                        </ul>
                    </ModalBody>
                </Modal>
                {/* personal profile main */}
                <div className='container-fluid row-contact'>
                    {/* personal profile header*/}
                    <div className='row py-5'>
                        <div className='col-12'>
                            <h1 className='font text-center py-5'>Personal Profile <span className='fa-regular fa-user ml-2'></span></h1>
                        </div>
                    </div>
                    <div className='container pb-5'>
                        {/* using react animation components*/}
                        <Fade in>
                        {/* personal profile card */}
                        <div className='row profile-card py-5'>
                            <div className='col-12 col-md-6 font-two'>
                                <h2 className='py-4'>Full Stack Web Developer</h2>
                                <h3>Skills:</h3>
                                <h4 className='gradient-text py-4'>HTML, CSS, Javascript, React, Node.js, Express.js, MongoDB, Mongoose...</h4>
                                <a href='/'><span className='fa fa-github fa-personal text-white fa-lg'></span></a>
                                <a href='/'><span className='fa fa-linkedin fa-personal text-white fa-lg ml-3'></span></a>
                            </div>
                            <div className='col-12 col-md-6 font-two'>
                                <p>As an individual I am very motivated, positive and goal orientated with a passion to succeed. Over the last 10 years I have acquired valuable practical experience and knowledge in sales, finance, customer service and teamwork allowing me to attain invaluable interpersonal skills, organizational skills and skills allowing me to adapt to new systems processes and environments. I have a great interest for Web Development having so far completed a Full Stack Web Development Bootcamp as well as being currently enrolled in the Full-Stack Web Development with React Specialization an online course provided by The Hong Kong University of Science and Technology. I am very passionate about all aspects of Web Development and I continuously strive to educate myself further. Over the course of my time as a developer I have built many applications and websites. I have gained a great quantity of experience building and creating applications using environments, frameworks and libraries such as HTML, CSS, JavaScript, React, NodeJS, Express.js, MongoDB and Mongoose. In the process I have achieved hands on experience solving problems and managing my workflow in an efficient and timely manner.
                                            
                                </p>
                                <NavLink to='/contact' className='btn btn-gradient my-4'>Get in touch<span className='fa fa-chevron-right ml-2'></span></NavLink>
                                {/* <a href='/assets/resume.pdf' className='btn btn-outline-dark ml-3'>Download Resume</a> */}
                            </div>
                        </div>
                        </Fade>
                        {/* proffesional development section ---COURSES CARDS*/}
                        <div className='row py-5'>
                            <div className='col-12'>
                                <h2 className='font text-white mt-5'>Professional Development</h2>
                            </div>
                        </div>
                        <div className='row course-card py-5'>
                            <div className='col-12 col-md-6 font-two'>
                                <h2 className='text-black py-4'>Full Stack Web Development with React Specialization</h2>
                                <h4>The Hong Kong University of Science and Technology</h4>
                                <h6 className='py-4'>August 2022 - October 2022</h6>
                                    <h6 className='text-black'><span className='fa fa-award fa-lg mr-2'></span>Honors Certificate Recieved: October 2022</h6>
                            </div>
                            <div className='col-12 col-md-6 font-two'>
                                <h4 className='py-5'>Course Content Covered:</h4>
                                <ul className='list-unstyled'>
                                    <li><span className='fa fa-check mr-2'></span>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
                                    <li><span className='fa fa-check mr-2'></span>Front-End Web Development with React</li>
                                    <li><span className='fa fa-check mr-2'></span>Server-side Development with NodeJS, Express and MongoDB</li>
                                </ul>
                                <Button onClick={this.toggleModalOne} className='btn btn-black my-3 px-4'>Read More<span className='fa fa-chevron-down ml-2'></span></Button>
                            </div>
                        </div>
                        <div className='row course-card py-5 my-5'>
                            <div className='col-12 col-md-6 font-two align-self-center'>
                                <h2 className='text-black py-4'>The Web Developer Bootcamp 2022</h2>
                                <h4>Udemy</h4>
                                <h6 className='py-4'>February 2022 - May 2022</h6>
                                <h6 className='text-black'><span className='fa fa-award fa-lg mr-2'></span>Certificate Recieved: May 2022</h6>
                            </div>
                            <div className='col-12 col-md-6 font-two'>
                                <h4 className='py-5'>Course Content Covered:</h4>
                                <ul className='list-unstyled'>
                                    <li><span className='fa fa-check mr-2'></span>Created static HTML and CSS portfolio sites and landing pages</li>
                                    <li><span className='fa fa-check mr-2'></span>Used CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma</li>
                                    <li><span className='fa fa-check mr-2'></span>Created full-stack web applications from scratch</li>
                                    <li><span className='fa fa-check mr-2'></span>Used Postman to monitor and test APIs</li>
                                    <li><span className='fa fa-check mr-2'></span>Wrote complex web apps with multiple models and data associations</li>
                                    <li><span className='fa fa-check mr-2'></span>Used NodeJS to write server-side JavaScript</li>
                                    <li><span className='fa fa-check mr-2'></span>Used Express and MongoDB to create full-stack JS applications</li>
                                </ul>
                                <Button onClick={this.toggleModalTwo} className='btn btn-black my-3 px-4'>Read More<span className='fa fa-chevron-down ml-2'></span></Button>
                            </div>
                        </div>
                        {/* ongoing development section - course card */}
                        <div className='row py-5'>
                            <div className='col-12'>
                                <h2 className='font text-white'>Ongoing Development</h2>
                            </div>
                        </div>
                        <div className='row course-card py-5'>
                            <div className='col-12 col-md-6 font-two align-self-center'>
                                <h2 className='text-black py-4'>The Modern React Bootcamp</h2>
                                <h4>Udemy</h4>
                                <h6 className='py-4'>July 2022 - Present</h6>
                            </div>
                            <div className='col-12 col-md-6 font-two'>
                                <h4 className='py-5'>Course Content</h4>
                                <ul className='list-unstyled'>
                                    <li><span className='fa fa-check mr-2'></span>React Hooks</li>
                                    <li><span className='fa fa-check mr-2'></span>State Management with useReducer + use Context(Redux Lite)</li>
                                    <li><span className='fa fa-check mr-2'></span>React State Management Patterns</li>
                                    <li><span className='fa fa-check mr-2'></span>Writing dynamically styled components with JSS</li>
                                    <li><span className='fa fa-check mr-2'></span>Integration of UI libraries like Material UI and Bootstrap into React apps</li>
                                    <li><span className='fa fa-check mr-2'></span>Integrate React with APIs</li>
                                    <li><span className='fa fa-check mr-2'></span>Forms and complex validations in React</li>
                                </ul>
                                <Button onClick={this.toggleModalThree} className='btn btn-black my-3 px-4'>Read More<span className='fa fa-chevron-down ml-2'></span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PersonalProfile;