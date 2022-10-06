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
import ShirleysStudio from './ShirleysStudioComponent';
import Vacay from './VacayComponent';
import Contact from './ContactComponent';
import TermsAndConditions from './termsAndConditions';
import PrivacyPolicy from './privacyPolicy';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ () => <Home /> } />
                    <Route exact path='/services' component={ () => <Services /> } />
                    <Route exact path='/services/custom-package' component={ () => <CustomPackage /> } />
                    <Route exact path='/services/custom-plus-package' component={ () => <CustomPlusPackage /> } />
                    <Route exact path='/services/business-plus-package' component={ () => <BusinessPackage /> } />
                    <Route exact path='/discover' component={ () => <Discover /> } />
                    <Route exact path='/about' component={ () => <About /> } />
                    <Route exact path='/about/personal-profile' component={ () => <PersonalProfile /> } />
                    <Route exact path='/projects' component={ () => <Projects /> } />
                    <Route exact path='/projects/shirleys-studio' component={ () => <ShirleysStudio /> } />
                    <Route exact path='/projects/vacay' component={ () => <Vacay /> } />
                    <Route exact path='/contact' component={ () => <Contact /> } />
                    <Route exact path='/termsAndConditions' component={ () => <TermsAndConditions /> } />
                    <Route exact path='/privacyPolicy' component={ () => <PrivacyPolicy /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;