import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Services from './ServicesComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import TermsAndConditions from './termsAndConditions';
import PrivacyPolicy from './privacyPolicy';
import Discover from './DiscoverComponent';

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
                    <Route exact path='/discover' component={ () => <Discover /> } />
                    <Route exact path='/about' component={ () => <About /> } />
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