import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Discover extends Component {
    render() {
        return (
            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row d-flex justify-content-center py-5'>
                        <div className='col-12 col-md-4 text-center'>
                            <div className='btn-services-tab'>
                                <NavLink to='/services' className='btn btn-services'>Packages</NavLink>
                                <NavLink to='/discover' className='btn btn-services-active active ml-3'>Discover <span className='fa fa-chevron-down'></span></NavLink>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;