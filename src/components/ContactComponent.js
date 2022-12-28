//importing main links
import React, { Component } from 'react';
import { Card, CardBody, FormGroup, Label, Form, Input, Button  } from 'reactstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { RenderCardOne ,RenderCardTwo , RenderCardThree } from '../functionalComponents/functionalComponents';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;


// //contact page
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_email: '',
        };
    }

 
    render() {


    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
    };


     //render contact form function
    const RenderContactForm = () => {

        return (

            <div className='container'>
                <div className='row align-items-center contact-section py-5'>
                    <div className='col-12 col-md-12 col-lg-6 pb-5'>
                        <h1 className='font-two text-white'>Interested in your own personal or business website?</h1>
                        <h2 className='font py-4 thin-text'><span className='white-bg'><span className='text-white'>Contact for a quote.</span></span></h2>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <Card className='custom-card font-two'>
                            <CardBody>
                            <div className='row pt-4'>
                                <div className='col-12 text-center'>
                                    <img src='/assets/images/contact-msg.png' className='messageImg' width='120' height='120' alt='cart' />
                                </div>
                            </div>
                                <Form className='p-4' onSubmit={handleOnSubmit}>
                                    <FormGroup>
                                        <Label htmlFor='user_email'><span className='fa fa-envelope mr-2'></span><b>Email<span className='text-danger'> *</span></b></Label>
                                        <Input
                                        type='email'
                                        id='user_email'
                                        innerRef={(input) => this.user_email = input}
                                        name='user_email'
                                        placeholder='@email.com'
                                        required
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='user_name'><span className='fa fa-user mr-2'></span><b>Full Name<span className='text-danger'> *</span></b></Label>
                                        <Input
                                        type='text'
                                        id='user_name'
                                        innerRef={(input) => this.user_name = input}
                                        name='user_name'
                                        placeholder='Full Name'
                                        required
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='user_message'><span className='fa-solid fa-message mr-2'></span><b>Message<span className='text-danger'> *</span></b></Label>
                                        <Input
                                        type='textarea'
                                        id='user_message'
                                        name='user_message'
                                        placeholder='Message…'
                                        rows='6'
                                        required
                                        />
                                    </FormGroup>
                                    <Button type='submit' className='btn btn-black btn-block px-4'>Submit</Button>
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
                <div className='container-fluid gradient-background-contact'>
                    <RenderContactForm />
                </div>
            </div>
        );
        }
}

export default Contact;


 