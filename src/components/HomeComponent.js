import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, Carousel, CarouselItem, 
        CarouselControl, CarouselIndicators, CarouselCaption 
    } 
from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { RenderContact } from '../functionalComponents/functionalComponents';

const items = [
    {
        src: 'assets/images/logo.png',
        altText: 'Slide 1',
        caption: 'At Layerlabs I want to bring my own touch giving you the best and most responsive website design possible. What you want from a website can vary yet what matters most is the experience yourself and your users have.',
        header: "Let's get creative!"
    },
    {
      src: 'assets/images/me.jpg',
      altText: 'Slide 2',
      caption: 'Founder and creator of Layerlabs. I am a Full Stack Web Developer based in Toronto. I am a very driven and well organized individual with great attention to detail. I am also very creative always thinking outside the box, in search of new ideas and possibilities.',
      header: 'Sean Hackett'
    },
    {
      src: 'assets/images/email.png',
      altText: 'Slide 3',
      caption: 'Looking for a fully customizable responsive website? Contact me to get a quote!',
      header: 'Get in touch!'
    }
  ];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    
    onExiting() {
        this.animating = true;
    }
    
    onExited() {
        this.animating = false;
    }
    
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }


    render() {

        const { activeIndex } = this.state;
            const slides = items.map((item) => {
                return (
                  <CarouselItem 
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                  >
                    <div className='row my-5'>
                        <div className='col-12 col-md-5 align-self-center d-flex justify-content-center'>
                            <img className='carousel-img my-3' src={item.src} alt={item.altText} width='300' height='300' /> 
                        </div>
                        <div className='col-12 col-md-5 my-5 align-self-center d-flex justify-content-center'>
                        <Card className='carousel-card'>
                            <CardBody>
                                <h2 className='text-center font'>{item.header}</h2>
                                <p className='text-center'>{item.caption}</p>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                  </CarouselItem>
                );
              });


        {/* HOMEPAGE HEADER */}
        const HomeHeader = () => {
            return (
                <div className='home-header d-flex justify-content-center align-items-center my-3'>
                    <div className='row text-center text-white'>
                        <div className='col-12'>
                            <h1 className='font home-title'>Welcome to <span className='gradient-text'>Layerlabs.io</span></h1>
                            <h3 className='home-header-text font my-3'>Step into the future of web <span className='gradient-text'>design</span>.</h3>
                            <NavLink className='home-header-btn btn btn-black font-two px-4'to='/services'>Services<span className='fa fa-chevron-right ml-2'></span></NavLink>
                        </div>
                        <div className='col-12 pt-5'>
                            <a className="fa-brands fa-medium fa-2xl text-white px-2" href="https://medium.com/@layerlabs.io"></a>
                            <a className="fa-brands fa-instagram fa-2xl text-white px-2" href="https://www.instagram.com/layerlabs.io"></a>
                            <a className="fa-brands fa-github fa-2xl text-white px-2" href="https://github.com/TropicalXU"></a>
                        </div>
                    </div>
                </div>
            );
        }

        const RenderCardOne = () => {
            return (
                <>
                <Card className='home-card text-center py-4'>
                    <CardBody>
                        <span className='fa fa-panorama fa-lg'></span>
                        <h2 className='font-two py-3'>Plan</h2>
                        <p className='home-card-text'>Create and design a roadmap of what you hope to achieve for your website.</p>
                    </CardBody>
                </Card>
                </>
            );
        }
        const RenderCardTwo = () => {
            return (
                <>
                <Card className='home-card text-center py-4'>
                    <CardBody>
                        <span className='fa fa-wand-magic-sparkles fa-lg'></span>
                        <h2 className='font-two py-3'>Visualize</h2>
                        <p className='home-card-text'>Gather images and material to help you visualize and plan your website</p>
                    </CardBody>
                </Card>
                </>
            );
        }
        const RenderCardThree = () => {
            return (
                <>
                <Card className='home-card text-center py-4'>
                    <CardBody>
                        <span className='fa fa-crop-simple fa-lg'></span>
                        <h2 className='font-two py-3'>Design</h2>
                        <p className='home-card-text'>Establish a theme, choose your color palettes and construct your brand.</p>
                    </CardBody>
                </Card>
                </>
            );
        }

        const RenderWork = () => {
            return(
                <>  <div className='row align-items-center'>
                        <div className='col-12 col-md-5 py-4'>
                            <h2 className="font py-5">Shirley's Art Studio</h2>
                            <p>
                                A small business website built for an artist to showcase 
                                their work and passion for art. This website features a built in store 
                                with secure payment options such as Stripe, Google Pay, Apple Pay and Visa. 
                                You can easily browse the gallery, find a painting you like view and buy. 
                                The checkout experience is quick and easy, make a purchase within seconds.
                            </p>
                            <NavLink to='/projects/shirleys-studio' className='btn btn-gradient my-3'>View <span className='fa fa-chevron-right ml-2'></span></NavLink>
                            <a href='/'><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                        </div>
                        <div className='col-12 col-md-5 offset-md-2'>
                            <img className='img-fluid discover-img' src='assets/images/shirley-studio.png' />
                        </div>
                    </div>
                    <div className='row align-items-center mb-5'>
                        <div className='col-12 col-md-5 offset-md-2 order-md-2 py-5'>
                            <h2 className="font py-5">Vacay - Cottage Rentals</h2>
                            <p>
                                A small business website built for an artist to showcase 
                                their work and passion for art. This website features a built in store 
                                with secure payment options such as Stripe, Google Pay, Apple Pay and Visa. 
                                You can easily browse the gallery, find a painting you like view and buy. 
                                The checkout experience is quick and easy, make a purchase within seconds.
                            </p>
                            <NavLink to='/projects/vacay' className='btn btn-gradient my-3'>View<span className='fa fa-chevron-right ml-2'></span></NavLink>
                            <a href='/'><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                        </div>
                        <div className='col-12 col-md-5 order-md-1'>
                            <img className='img-fluid discover-img' src='assets/images/vacay.png' />

                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <a href='/projects' className='btn btn-black px-4'>View All<span className='fa fa-chevron-right ml-2'></span></a>
                    </div>
                </>
            );
        }


        return (
            <div className='container-fluid'>
                <HomeHeader />
                <div className='container mt-5 py-5'>
                    <h2 className='font'>Bring your visions to life with Layerlabs..</h2>
                    <div className='row py-5'>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <FadeTransform in
                                transformProps={{
                                exitTransform: 'scale(0.3) translateY(-20%)'
                            }}>
                                <RenderCardOne />
                            </FadeTransform>
                        </div>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <FadeTransform in
                                transformProps={{
                                exitTransform: 'scale(0.3) translateY(-20%)'
                            }}>
                                <RenderCardTwo />
                            </FadeTransform>
                        </div>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <FadeTransform in
                                transformProps={{
                                exitTransform: 'scale(0.3) translateY(-20%)'
                            }}>
                                <RenderCardThree />
                            </FadeTransform>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row pb-5'>
                        <div className='col-12'>
                            <Carousel className='carousel-content'
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                            >
                                {slides}
                            </Carousel>
                        </div>
                    </div>`
                </div>
                <div className='container'>
                    <h2 className='font text-center pt-3'>Check out some of my work <span className='fa fa-chevron-down'></span></h2>
                    <div className='row pb-5'>
                        <RenderWork />
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row mb-4'>
                        <div className='col-12'>
                            <RenderContact />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;