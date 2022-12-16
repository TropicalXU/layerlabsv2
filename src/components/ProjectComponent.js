//importing main links
import React from 'react';
import { RenderServicesAd } from '../functionalComponents/functionalComponents';
import { Fade, Stagger} from 'react-animation-components';
import { Link } from 'react-router-dom';

//main projects page
// rendering projects with the use of props
const RenderProjects = ({project}) => {
    if(project.id % 2 === 0) {

        return (
            <>
                <div className='row align-items-center py-5 my-5'>
                    <div className='col-12 col-md-6'>
                        <h2 className='font-two'>{project.title}</h2>
                        <p className='py-5'>{project.intro}</p>
                        <Link to={`/projects/${project.id}`} className='btn btn-gradient font-two my-4'>View Project<span className='fa fa-chevron-right ml-2'></span></Link>
                        <a href={project.github}><span className='fa fa-github fa-github-work fa-lg ml-3'></span></a>
                    </div>
                    <div className='col-12 col-md-6 pt-4'>
                        <img className='img-fluid' src={project.image} alt={project.title} />
                    </div>
                </div>
            </>
        );
    }else {
        return (
            <>
                <div className='row align-items-center py-5'>
                    <div className='col-12 col-md-6 order-md-2'>
                        <h2 className='font-two'>{project.title}</h2>
                        <p className='py-5'>{project.intro}</p>
                        <Link to={`/projects/${project.id}`} className='btn btn-gradient font-two my-4'>View Project<span className='fa fa-chevron-right ml-2'></span></Link>
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

//taking in props to use in render projects function
const Projects = (props) => {
    //mapping over projects to display
    const proj = props.projects.map((project) => {
        return (
            <div className='container'>
                {/* react animation components */}
                <Fade in>
                    {/* rendering projects and applying props */}
                    <RenderProjects project={project} />
                </Fade>
            </div>
        );
    })
    return (
        <>
            {/* projexts header image */}
            <div className='row-layerlabs'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1 className='font text-white work-header'>Projects</h1>
                    </div>
                </div>
            </div>
            {/* projects page header */}
            <div className='container-fluid'>
                {/* react animation component plug in */}
                <Fade in>
                    <div className='container-fluid work-description'>
                    <h2 className='font-two text-center py-5'>Check out my work below</h2>
                        <div className='row dark-bg py-5'>
                            <div className='col-12 col-md-8'>
                                <p className='large-text text-center text-white py-5'>Here are a few projects and websites I have designed and created here at Layerlabs using 
                                    the knowledge and expertise I have aquired throughout my web development journey. I created these 
                                    applications from the ground up. Each website is intergrated with fully responsive layouts and designs 
                                    for all devices using tools and frameworks such as React, Javascript, CSS and HTML.
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img src='/assets/images/develop.png' className='img-fluid move-img' width='260px' height='260px' alt='Section'/>
                            </div>
                        </div>
                    </div>
                </Fade>
                {/* react animations component plugin */}
                <Stagger in>
                    {/* passing in project items list */}
                    {proj}
                </Stagger>
                {/* rendering services ad plugin */}
                <div className='container-fluid my-4 pt-3'>
                    {/* <RenderServicesAd project={props.projects} /> */}
                </div>
            </div>
        </>
    );
}

export default Projects;