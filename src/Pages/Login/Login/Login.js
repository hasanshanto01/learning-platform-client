import React from 'react';
import login from '../../../image/login.gif';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='d-flex'>
            <div className='w-50'>
                <img src={login} alt="" />
            </div>
            <div className='w-50'>
                <h3 className='mt-3 text-warning text-center'>Login</h3>
                <Form className='w-75 mx-auto p-3 fs-5 rounded bg-custom text-white'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className='border-warning' required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className='border-warning' required />
                    </Form.Group>
                    <Link to='/forget' className='text-warning'>Forget Password</Link>
                    <Button variant="warning" type="submit" className='w-100 mt-3 text-white fs-5 fw-semibold'>
                        Login
                    </Button>
                    <p className='my-2 text-center'>
                        New to this website?
                        <Link to='/register' className='ms-2 text-warning'>Register</Link>
                    </p>
                </Form>
                <hr className='mx-4 text-primary' />
                <div className='w-75 px-3 mb-3 mx-auto text-center'>
                    <p className='fs-5 text-warning'>Or connect with</p>
                    <Button variant="outline-primary" className='w-100 mb-3'>
                        <FaGoogle className='me-2' />
                        Login with google
                    </Button>
                    <Button variant="outline-dark" className='w-100 mb-3'>
                        <FaGithub className='me-2' />
                        Login in with github
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;