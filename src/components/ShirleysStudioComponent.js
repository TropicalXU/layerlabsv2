import React from 'react';
import { RenderServicesAd } from '../functionalComponents/functionalComponents';

const ShirleysStudio = () => {
    return (
        <>
            <div className='row-shirleys-studio'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white shirleys-studio-header'>Shirleys Art Studio</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-12 py-5'>
                            <h1 className='font-two'>Website Launch Date</h1>
                            <h1 className='font-two'>July 2022</h1>
                        </div>
                        <div className='row py-5'>
                            <div className='col-12 col-md-6 pt-5'>
                                <h1 className='font-two'>About the project</h1>
                                <p className='py-4'>
                                    Shirley's Art Studio is an online gallery website with a built in online store which feature 
                                    secure payments using Stripe. At Layerlabs I wanted to re-create a live art gallery, showcasing 
                                    and displaying each of Shirley's art pieces. This was key to creating the look and feel of the website. 
                                    We wanted to make sure the paintings brought out the color while the website theme remained clean. 
                                    I implemented a responsive design, suitable for all devices as well as clear navigation tools, 
                                    Search Engine Optimization and security features. With all of this implemented Shirley was thrilled with 
                                    the end result. Having her own website to showcase and sell her artwork allows Shirley a platform to share her 
                                    work beyond the gallery and reach even more enthusiastic art lovers who can now get in touch from anywhere in the world.
                                </p>
                            </div>
                            <div className='col-12 col-md-6 pt-5'>
                                <img className='discover-img' src='assets/images/shirley-studio.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid my-4 pt-3'>
                    <RenderServicesAd />
                </div>
            </div>
        </>
    );
        
}

export default ShirleysStudio;