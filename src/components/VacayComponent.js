import React from "react";
import { RenderServicesAd } from "../functionalComponents/functionalComponents";

const Vacay = () => {
    return (
        <>
            <div className='row-shirleys-studio'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white shirleys-studio-header'>Vacay</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-12 pt-5'>
                            <h1 className='font-two'>Website Launch Date</h1>
                            <h1 className='font-two'>October 2022</h1>
                        </div>
                        <div className='row py-5'>
                            <div className='col-12 col-md-6 pt-5'>
                                <h1 className='font-two'>About the project</h1>
                                <p className='py-4'>
                                    With this application I included many interactive features 
                                    incorporating my knowledge of React. These features include bootstrap 
                                    cards to render and display the content which will be stored on a json server. 
                                    A register and sign in modal is included in the applications navbar so that users 
                                    can easily access and manage their account. A review button will allow the user to 
                                    leave a review, this will appear as a form inside a modal using form validation. I also
                                    implemented a location’s feature that will populate and filter each destination based on its location. 
                                    The goal of this application is to provide a seamless and fluid experience for the user.
                                </p>
                                <a href="/" className="btn btn-outline-dark">Visit Site</a>
                                <a href="/"><span className="fa fa-github fa-lg ml-4"></span></a>
                            </div>
                            <div className='col-12 col-md-6 pt-5'>
                                <img className='discover-img' src='assets/images/vacay.png' />
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

export default Vacay;