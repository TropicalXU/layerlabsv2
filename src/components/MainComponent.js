//importing main links
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import { WORK } from '../shared/work';
import Contact from './ContactComponent';
import TermsAndConditions from './termsAndConditions';
import PrivacyPolicy from './privacyPolicy';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { PACKAGE } from '../shared/packages';

//---MAIN COMPONENT --------//
class Main extends Component {
    constructor(props) {
        //applying the state
        super(props);
        this.state = {
            projects: WORK,
            packages: PACKAGE
        }
    }

    render() {
        //home page - adding in props
        const HomePage = () => {
            return(
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

        // const PackageId = ({match}) => {
        //     return (
        //         <Packages
        //         packageId={this.state.packages.filter((packageId) => packageId.id === parseInt(match.params.id))[0]} 
        //         />
        //     );
        // }
        
        // const Services = () => {
        //     return (
        //         <Services
        //         customPackage={this.state.packages.filter((package1) => package1.id)[0]} 
        //         customPlusPackage={this.state.packages.filter((package2) => package2.id)[1]} 
        //         businessPackage={this.state.packages.filter((package3) => package3.id)[2]} 
        //         />
        //     );
        // }

        return (
            <div>
               {/* RENDERING ROUTES */}
                <Header />
                <Switch>
                    <Route exact path='/' component={ HomePage} />
                    <Route path='/home' component={ HomePage } />
                    <Route exact path='/services' component={ () =>  <Services />} />
                    {/* <Route exact path='/services/:id' component={ PackageId } /> */}
                    <Route exact path='/services/custom-package' component={ () => <CustomPackage /> } />
                    <Route exact path='/services/custom-plus-package' component={ () => <CustomPlusPackage /> } />
                    <Route exact path='/services/business-plus-package' component={ () => <BusinessPackage /> } />
                    <Route exact path='/discover' component={ () => <Discover /> } />
                    <Route exact path='/about' component={ () => <About /> } />
                    <Route exact path='/about/personal-profile' component={ () => <PersonalProfile /> } />
                    <Route exact path='/projects' component={ () => <Projects projects={this.state.projects} /> } />
                    <Route exact path='/projects/:id' component={ WorkId } />
                    <Route exact path='/contact' component={ () => <Contact /> } />
                    <Route exact path='/termsAndConditions' component={ () => <TermsAndConditions /> } />
                    <Route exact path='/privacyPolicy' component={ () => <PrivacyPolicy /> } />
                    <Redirect to='/' />
                </Switch>
                {/* RENDERING COOKIE CONSENT */}
                {/* <div className='container'>
                <CookieConsent
                buttonClasses='btn btn-primary'>
                    <div className='container'>
           

                    </div>
                </CookieConsent>
                </div> */}
                <Footer />
            </div>
        );
    }
}

export default Main;