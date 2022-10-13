//importing main links
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Services from './ServicesComponent';
import CustomPackage from './CustomPackageComponent';
import CustomPlusPackage from './CustomPlusPackageComponent';
import BusinessPackage from './BusinessPackageComponent';
import Discover from './DiscoverComponent';
import About from './AboutComponent';
import PersonalProfile from './PersonalProfileComponent';
import Projects from './ProjectComponent';
import WorkDetail from './WorkListComponent';
import { PROJECTS } from '../shared/projects';
import Contact from './ContactComponent';
import TermsAndConditions from './termsAndConditions';
import PrivacyPolicy from './privacyPolicy';
import CookieConsent from 'react-cookie-consent';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
    postFeedback: (user_name, user_email, user_message) => dispatch(postFeedback(user_name, user_email, user_message)),

    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

//---MAIN COMPONENT --------//
class Main extends Component {
    constructor(props) {
        //applying the state
        super(props);
        this.state = {
            projects: PROJECTS,
        }
    }

    render() {
        //home page - adding in props
        const HomePage = () => {
            return (
                <Home
                project1={this.state.projects.filter((project) => project.featured)[0]}
                project2={this.state.projects.filter((project) => project.featured)[1]}
                 />
            );
        }
        // work detail page - adding in props
        const WorkId = ({match}) => {
            return (
                <WorkDetail 
                project={this.state.projects.filter((project) => project.id === parseInt(match.params.id))[0]}
                 />
            );
        }

        return (
            <div>
               {/* RENDERING ROUTES */}
                <Header />
                <Switch>
                
                    <Route exact path='/home' component={ HomePage } />
                    <Route exact path='/services' component={ () =>  <Services />} />
                    <Route exact path='/services/custom-package' component={ () => <CustomPackage /> } />
                    <Route exact path='/services/custom-plus-package' component={ () => <CustomPlusPackage /> } />
                    <Route exact path='/services/business-plus-package' component={ () => <BusinessPackage /> } />
                    <Route exact path='/discover' component={ () => <Discover /> } />
                    <Route exact path='/about' component={ () => <About /> } />
                    <Route exact path='/about/personal-profile' component={ () => <PersonalProfile /> } />
                    <Route exact path='/projects' component={ () => <Projects projects={this.state.projects} /> } />
                    <Route exact path='/projects/:id' component={ WorkId } />
                    <Route exact path='/contact' component={ () => 
                    <Contact 
                    resetFeedbackForm={this.props.resetFeedbackForm} 
                    postFeedback={this.props.postFeedback} 
                     /> } />
                    <Route exact path='/termsAndConditions' component={ () => <TermsAndConditions /> } />
                    <Route exact path='/privacyPolicy' component={ () => <PrivacyPolicy /> } />
                    <Redirect to='/home' />
                </Switch>
                {/* RENDERING COOKIE CONSENT */}
                <div className='container cookie-consent'>
                    <CookieConsent 
                        buttonText='Accept All'
                        buttonClasses='accept-btn py-2'
                        containerClasses='container-fluid cookie-consent'
                        declineButtonText='Decline'
                        enableDeclineButton
                        declineButtonClasses=''
                        declineButtonStyle={{background: 'white', color: 'black', borderRadius: 25, fontWeight: 400, fontSize:14, fontFamily: 'Kanit', border: 1, borderColor: 'darkgrey', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6}}
                        style={{background: 'white'}} 
                        className='cookie-consent ml-5'
                        buttonStyle={{background: '#24a0ed ',color:'white', borderRadius: 25, paddingLeft: 15, paddingRight: 15, fontWeight: 400, fontSize: 14, fontFamily: 'Kanit'}}>
                        <div className='text-black'>
                            <div className='row py-1'>
                                <div className='col-12 col-md-1 py-3'>
                                    <span className='fa fa-circle-info text-black align-self-center fa-lg'></span>
                                </div>
                                <div className='col-11 pt-2'>
                                    <p className=''>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read more <NavLink to='/privacyPolicy'>Privacy Policy</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </CookieConsent>
                </div>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));