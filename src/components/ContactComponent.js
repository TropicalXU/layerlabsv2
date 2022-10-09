//importing main links
import React, { Component } from 'react';
import { Card, CardBody, Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { RenderCardOne ,RenderCardTwo , RenderCardThree } from '../functionalComponents/functionalComponents';

//contact page
class Contact extends Component {
    render() {

        //render contact form function
        const RenderContactForm = () => {
            return (
                <div className='container'>
                    <div className='row align-items-center py-5'>
                        <div className='col-12 col-md-12 col-lg-6 pb-5'>
                            <h1 className='font-two text-white'>Interested in your own personal or business website?</h1>
                            <h3 className='font two py-4'>Contact for a quote.</h3>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <Card className='contact-card font-two'>
                                <CardBody>
                                    <h4 className='text-center'>Get in touch</h4>
                                    <Form className='p-5'>
                                        <FormGroup>
                                            <Label htmlFor='firstname'>First Name</Label>
                                            <Input type='text' id='firstname' name='firstname'
                                                placeholder='First Name' 
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='lastname'>Last Name</Label>
                                            <Input type='text' id='lastname' name='lastname'
                                                placeholder='Last Name' 
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='email'>Email</Label>
                                            <Input type='email' id='email' name='email'
                                                placeholder='@email.com' 
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='message'>Message</Label>
                                            <Input type='textarea' id='message' name='message'
                                                rows='6'
                                            />
                                        </FormGroup>
                                        <Button type='submit' className='btn btn-black px-4'>Submit</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {/* importing render cards from functional components */}
                <div className='container my-5'>
                    <div className='row py-5'>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <RenderCardOne />
                        </div>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <RenderCardTwo />
                        </div>
                        <div className='col-12 col-md-12 col-lg-4 py-3'>
                            <RenderCardThree />
                        </div>
                    </div>
                </div>
                {/* rendering contact form */}
                <div className='container-fluid row-contact'>
                    <RenderContactForm />
                </div>
            </div>
        );
    }
}

export default Contact;