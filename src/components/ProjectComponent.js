import React from 'react';
import { RenderServicesAd } from '../functionalComponents/functionalComponents';
import { Fade, Stagger} from 'react-animation-components';
import { NavLink } from 'react-router-dom';

const RenderProjects = ({project}) => {
    if(project.id % 2 == 0) {

        return (
            <>
                <div className='row align-items-center py-5'>
                    <div className='col-12 col-md-6'>
                        <h2 className='font'>{project.title}</h2>
                        <p className='py-5'>{project.intro}</p>
                        <NavLink to={`/projects/${project.id}`} className='btn btn-gradient'>View Project<span className='fa fa-chevron-right ml-2'></span></NavLink>
                        <a href={project.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                    </div>
                    <div className='col-12 col-md-6 pt-4'>
                        <img className='img-fluid discover-img' src={project.image} alt={project.title} />
                    </div>
                </div>
            </>
        );
    }else {
        return (
            <>
                <div className='row align-items-center py-5'>
                    <div className='col-12 col-md-6 order-md-2'>
                        <h2 className='font'>{project.title}</h2>
                        <p className='py-5'>{project.intro}</p>
                        <NavLink to={`/projects/${project.id}`} className='btn btn-gradient'>View Project<span className='fa fa-chevron-right ml-2'></span></NavLink>
                        <a href={project.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                    </div>
                    <div className='col-12 col-md-6 pt-4'>
                        <img className='img-fluid discover-img order-md-1' src={project.image} alt={project.title} />
                    </div>
                </div>
            </>
        )
    }
}

const Projects = (props) => {
    const proj = props.projects.map((project) => {
        return (
            <div className='container'>
                <Fade in>
                    <RenderProjects project={project} />
                </Fade>
            </div>
        );
    })
    return (
        <>
            <div className='row-layerlabs'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white shirleys-studio-header'>Projects</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container-fluid work-description'>
                <h2 className='font text-center py-5'>Check out my work below</h2>
                    <div className='row dark-bg py-5'>
                        <div className='col-12 col-md-8'>
                            <p className='large-text text-center text-white py-5'>Here are a few projects and websites I have designed and created here at Layerlabs using 
                                the knowledge and expertise I have aquired throughout my web development journey. I created these 
                                applications from the ground up. Each website is intergrated with fully responsive layouts and designs 
                                for all devices using tools and frameworks such as React, Javascript, CSS and HTML.
                            </p>
                        </div>
                        <div className='col-12 col-md-4'>
                            <img src='/assets/images/develop.png' className='img-fluid ml-5' width='260px' height='260px' alt='Section image'/>
                        </div>
                    </div>
                </div>
                <Stagger in>
                    {proj}
                </Stagger>
                <div className='container-fluid my-4 pt-3'>
                    <RenderServicesAd project={props.projects} />
                </div>
            </div>
        </>
    );
}

export default Projects;