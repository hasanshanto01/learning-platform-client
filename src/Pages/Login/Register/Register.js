import React from 'react';
import login from '../../../image/login.gif';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='d-flex'>
            <div className='w-50'>
                <img src={login} alt="" />
            </div>
            <div className='w-50'>
                <h3 className='mt-3 text-warning text-center'>Login</h3>
                <Form className='w-75 mx-auto mb-4 p-3 fs-5 rounded bg-custom text-white'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" className='border-warning' />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control type="text" placeholder="PhotoURL" className='border-warning' />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className='border-warning' required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className='border-warning' required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" className='border-warning' required />
                    </Form.Group>

                    <Button variant="warning" type="submit" className='w-100 mt-3 text-white fs-5 fw-semibold'>
                        Register
                    </Button>
                    <p className='my-2 text-center'>
                        Already have an account?
                        <Link to='/login' className='ms-2 text-warning'>Login</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default Register;