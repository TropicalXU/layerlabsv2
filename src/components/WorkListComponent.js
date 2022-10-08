import React from 'react';
import { RenderServicesAd } from '../functionalComponents/functionalComponents';

const WorkDetail = (props) => {

    return (
        <>
            <div className='row-layerlabs'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white shirleys-studio-header'>{props.project.title}</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-12 py-5'>
                            <h1 className='font-two'>Website Launch Date</h1>
                            <h1 className='font-two'>{props.project.launch}</h1>
                        </div>
                        <div className='row py-5'>
                            <div className='col-12 col-md-6 pt-5'>
                                <h1 className='font-two'>About the project</h1>
                                <p className='py-4'>{props.project.description}</p>
                                <a href={props.project.url} className='btn btn-outline-dark'>Visit Site<span className='fa fa-chevron-right ml-2'></span></a>
                                <a href={props.project.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                            </div>
                            <div className='col-12 col-md-6 pt-5'>
                                <img className='discover-img' src={props.project.image} alt={props.project.title} />
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

export default WorkDetail;