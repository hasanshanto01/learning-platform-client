import React, { useState } from 'react';
import login from '../../../image/login.gif';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvide/AuthProvider';
import { FormGroup } from 'react-bootstrap';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn, setUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    // console.log(signIn);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);

                form.reset();
                setError('');
                navigate('/');

            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <div className='d-flex'>
            <div className='w-50'>
                <img src={login} alt="" className='mt-5 ms-5' />
            </div>
            <div className='w-50'>
                <h3 className='mt-3 text-warning text-center'>Login</h3>
                <Form onSubmit={handleSubmit} className='w-75 mx-auto p-3 fs-5 rounded bg-custom text-white'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name='email'
                            type="email"
                            placeholder="Enter email" className='border-warning' required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name='password'
                            type="password"
                            placeholder="Password" className='border-warning' required />
                    </Form.Group>

                    <Form.Text className="text-warning">
                        {error}
                    </Form.Text>
                    <br />
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
                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='w-100 mb-3'>
                        <FaGoogle className='me-2' />
                        Login with google
                    </Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark" className='w-100 mb-3'>
                        <FaGithub className='me-2' />
                        Login in with github
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;