//importing main links
import React from 'react';
import { BreadcrumbItem } from 'reactstrap';
import { Header, HeaderDark, RenderServicesAd } from '../functionalComponents/functionalComponents';
import { Link } from 'react-router-dom';

//WORK DETAIL PAGE
const WorkDetail = (props) => {

    return (
        <>
            <HeaderDark />
            {/* work detail page header image */}
            <div className='bkg-dark mb-3'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white work-header'>{props.project.title}<span className='gradient-text'> .</span></h1>
                    </div>
                </div>
            </div>
            {/* breadcrumb section */}
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='breadcrumb'>
                            <BreadcrumbItem>
                                <Link className='breadcrumb-link text-white' to='/projects'>
                                    <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Projects</span>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active className='gradient-text font-two'>{props.project.title}
                            </BreadcrumbItem>
                        </div>
                    </div>
                </div>
                {/* projects detail main section*/}
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='font-two'>Website Launch Date</h1>
                            <h1 className='font-two'>{props.project.launch}</h1>
                        </div>
                    </div>
                    <div className='row py-5 my-3'>
                        <div className='col-12 col-md-6'>
                            <h1 className='font-two'>About the project</h1>
                            <hr></hr>
                            <p className='py-4'>{props.project.description}</p>
                            <a href={props.project.url} className='btn btn-black font-two px-4'>Visit Site<span className='fa fa-chevron-right ml-2'></span></a>
                            <a href={props.project.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                        </div>
                        <div className='col-12 col-md-6 ml-auto pt-5'>
                                <img className='img-fluid' src={props.project.image} alt={props.project.title} />
                        </div>  
                    </div>
                </div>
                {/* importing render services ad plugin */}
                <div className='container-fluid pt-5'>
                    <RenderServicesAd />
                </div>
            </div>
        </>
    );
}

export default WorkDetail;