import React from 'react';
import login from '../../../image/login.gif';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvide/AuthProvider';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(name, photoURL, email, password, confirm);

        if (password === confirm) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);

                    form.reset();
                    setError('');
                    toast.success('Successfully registered!');
                })
                .catch(error => {
                    // console.error(error);
                    setError(error.message);
                })
        }
        else {
            setError('Error: Password did not match!');
        }

    };

    const handleAccepted = event => {
        // console.log(event.target.checked);
        setAccepted(event.target.checked);
    }

    return (
        <div className='d-flex'>
            <div className='w-50'>
                <img src={login} alt="" className='mt-5 ms-5' />
            </div>
            <div className='w-50'>
                <h3 className='mt-3 text-warning text-center'>Register</h3>
                <Form onSubmit={handleSubmit} className='w-75 mx-auto mb-4 p-3 fs-5 rounded bg-custom text-white'>
                    <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            name='name'
                            type="text"
                            placeholder="Enter name" className='border-warning' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control
                            name='photoURL'
                            type="text"
                            placeholder="PhotoURL" className='border-warning' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name='email'
                            type="email"
                            placeholder="Enter email" className='border-warning' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name='password'
                            type="password"
                            placeholder="Password" className='border-warning' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            name='confirm'
                            type="password"
                            placeholder="Confirm password" className='border-warning' required />
                    </Form.Group>

                    <Form.Text className="text-warning">
                        {error}
                    </Form.Text>

                    <Form.Group className="mt-3">
                        <Form.Check onClick={handleAccepted} type="checkbox" label={<small>Accept Terms and  conditions</small>} />
                    </Form.Group>

                    <Button variant="warning" type="submit" className='w-100 mt-1 text-white fs-5 fw-semibold' disabled={!accepted}>
                        Register
                    </Button>
                    <p className='my-2 text-center'>
                        Already have an account?
                        <Link to='/login' className='ms-2 text-warning'>Login</Link>
                    </p>
                    <Toaster />
                </Form>
            </div>
        </div >
    );
};

export default Register;