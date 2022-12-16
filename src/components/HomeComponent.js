//importing main links
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Carousel, CarouselItem, } from 'reactstrap';
import { FadeTransform, Fade } from 'react-animation-components';
import { RenderCardOne, RenderCardTwo, RenderCardThree, RenderServicesAd, RenderServices} from '../functionalComponents/functionalComponents';

//carousel items
const items = [
    {
        src: '/assets/images/logo.png',
        altText: 'Slide 1',
        caption: 'At Layerlabs I want to bring my own touch giving you the best and most responsive custom website design possible. What you want from a website can vary yet what matters most is the experience yourself and your users have.',
        header: "Let's get creative!",
        button: '/services',
        buttonMsg: 'Services'
    },
    {
      src: '/assets/images/me.jpg',
      altText: 'Slide 2',
      caption: 'Founder and creator of Layerlabs. I am a Full Stack Web Developer based in Toronto. I am a very driven and well organized individual with great attention to detail. I am also very creative always thinking outside the box, in search of new ideas and possibilities.',
      header: 'Sean Hackett',
      button: '/about',
      buttonMsg: 'Read More'
    },
    {
      src: '/assets/images/email.png',
      altText: 'Slide 3',
      caption: 'Looking for a fully customizable responsive website? Contact me to get a quote!',
      header: 'Get in touch!',
      button: '/contact',
      buttonMsg: 'Get in touch'
    }
  ];

//home page component
class Home extends Component {
    constructor(props) {
        //state used for carousel
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
    //carousel functions
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
        //mapping over items to display in carousel
        const { activeIndex } = this.state;
            const slides = items.map((item) => {
                return (
                //carousel items
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
                            <CardBody className='text-center'>
                                <h2 className='font'>{item.header}</h2>
                                <p className='font-two mb-4 mt-3'>{item.caption}</p>
                                <Link to={item.button} className='font-two btn-gradient my-5'>{item.buttonMsg}<span className='fa fa-chevron-right ml-2'></span></Link>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                  </CarouselItem>
                );
              });


        /* HOMEPAGE HEADER */
        const HomeHeader = () => {
            return (
                <Fade in>
                    <div className='home-header d-flex justify-content-center align-items-center my-3'>
                        <div className='row text-center text-white'>
                            <div className='col-12'>
                                <h1 className='font home-title'>Welcome to <span className='gradient-text'>Layerlabs.io</span></h1>
                                <h3 className='home-header-text font my-3'>Step into the future of web <span className='gradient-text'>design</span>.</h3>
                                <Link className='home-header-btn btn btn-black font-two px-4'to='/services'>Services<span className='fa fa-chevron-right ml-2'></span></Link>
                            </div>
                            <div className='col-12 pt-5'>
                                <a className="fa-brands fa-medium home-fa fa-2xl text-white px-2" href="https://medium.com/@layerlabs.io"></a>
                                <a className="fa-brands fa-instagram home-fa fa-2xl text-white px-2" href="https://www.instagram.com/layerlabs.io"></a>
                                <a className="fa-brands fa-github fa-2xl home-fa text-white px-2" href="https://github.com/TropicalXU"></a>
                            </div>
                        </div>
                    </div>
                </Fade>
            );
        }

        //home page work section
        //taking in work items from main state as props
        const RenderWork = ({item}) => {
            if(item.id % 2 === 0 ) {
                return(
                    <>  <div className='row align-items-center'>
                            <div className='col-12 col-md-5 py-4'>
                                <h2 className="font-two py-5">{item.title}</h2>
                                <p>
                                    {item.intro}
                                </p>
                                <Link to={`/projects/${item.id}`} className='btn btn-gradient font-two my-5'>View <span className='fa fa-chevron-right ml-2'></span></Link>
                                <a href={item.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                            </div>
                            <div className='col-12 col-md-5 offset-md-2'>
                                <img className='img-fluid discover-img' src={item.image} alt={item.title} />
                            </div>
                        </div>
                    </>
                );
            }else {
                return(
                    <>
                        <div className='row align-items-center'>
                            <div className='col-12 col-md-5 offset-md-2 order-md-2 py-5'>
                                <h2 className="font-two py-5">{item.title}</h2>
                                <p>
                                    {item.intro}
                                </p>
                                <Link to={`/projects/${item.id}`}className='btn btn-gradient font-two my-5'>View<span className='fa fa-chevron-right ml-2'></span></Link>
                                <a href={item.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                            </div>
                            <div className='col-12 col-md-5 order-md-1'>
                                <img className='img-fluid discover-img' src={item.image} alt={item.title} />

                            </div>
                        </div>
                    </>
                );
            }
        }


        return (
            <div className='container-fluid'>
                {/* rendering home page header */}
                <HomeHeader />
                {/* rendering home page cards */}
                <div className='container mt-5 pb-5'>
                    <h2 className='font-two'>Bring your visions to life with Layerlabs..</h2>
                    <div className='row py-5'>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            {/* using react animation components */}
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
                {/* rendering homepage carousel */}
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
                    </div>
                </div>
                <div className='container'>
                <div className='row'>
                        <div className='col-12'>
                        <h1 className='font-two pt-5'>Layerlabs services</h1>
                        </div>
                    </div>
                    {/* rendering services section */}
                    <RenderServices />
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                                <h2 className='font-two pt-5'>Interested in a personal website?</h2>
                                <p className='py-4'>
                                    Showcase your work online with a Personal website just for you. What is a personal website? Well essentialy 
                                    it's a unique way to showcase your work and provide professional information about you. When deciding on building 
                                    a personal website you must ask yourself why this is important to you, maybe you already have the answer. By finding 
                                    a purpose you can start getting to work on what information you would like to share and display for your audience. 
                                    What are some benefits of having a personal website?
                                </p>
                                <ul className='list-unstyled font-two'>
                                    <li><span className='fa fa-square-check mr-3'></span>Stand out from the crowd</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Create trust and credibility</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Showcase your creativity</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Generate opportunities</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Expand your network</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 align-self-center'>
                                <img src='/assets/images/web-design.png' className='img-fluid move-img ml-5' width='320px' height='320px' alt='Personal website'/>
                            </div>
                        </div>                 
                        <div className='row py-5'>
                            <div className='col-12 col-md-6 order-md-2'>
                                <h2 className='font-two pt-5'>Interested in a business website?</h2>
                                <p className='py-4'>
                                    A website for your business can act as a portal to your customers creating 24/7 on demand awareness to your brand and products. 
                                    It serves as a window in which you can showcase your marketable skills and connect with a targeted audience. When factoring in the costs, 
                                    a website may seem like a luxury that may not seem neccessary. However investing in a website for your business can go a long way in setting 
                                    you up for long-term success. It can be an incredibly important asset with a positive ROI when executed correctly. Word of mouth can only get 
                                    you so far, having a website acts as advertisement in itself. Lets look at some of the main reasons why you should consider having an online presense for your business.
                                </p>
                                <ul className='list-unstyled font-two'>
                                    <li><span className='fa fa-square-check mr-3'></span>Attract new customers</li>
                                    <li><span className='fa fa-square-check mr-3'></span>27/7 availability of your products and services</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Brand visibility and recognition</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Generate opportunities</li>
                                    <li><span className='fa fa-square-check mr-3'></span>Online credibility</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 align-self-center'>
                                <img src='/assets/images/online-business.png' className='img-fluid move-img ml-5' width='320px' height='320px' alt='Business website'/>  
                            </div>
                        </div>
                
                </div>
                <div className='container-fluid py-4'>
                <RenderServicesAd />
                </div>
            
                {/* rendering work section */}
                <div className='container'>
                    <h2 className='font-two text-center pt-5'>Check out some of my work</h2>
                    <hr></hr>
                    <div className='row mb-4 py-5'>
                        {/* rendering work */}
                        <RenderWork item={this.props.project1} />
                        {/* <RenderWork item={this.props.project2}/> */}
                        <div className='col-12 text-center'>
                            <a href='/projects' className='btn btn-black font-two px-4'>View All<span className='fa fa-chevron-right ml-2'></span></a>
                        </div>
                    </div>
                </div>
                {/* rendering contact plugin */}
                <div className='container-fluid'>
                    <div className='row mb-4'>
                        <div className='col-12'>
                            {/* <RenderContact /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;