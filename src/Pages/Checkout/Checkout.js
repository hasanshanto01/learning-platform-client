import React from 'react';
import Button from "react-bootstrap/Button";
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {

    const courseData = useLoaderData();
    console.log('from checkout', courseData);
    const { title, fee, instructor } = courseData

    const handleEnrollToaster = () => {
        console.log('yes');
        toast.success('Course Successfully Enrolled!')
    }

    return (
        <div className=''>
            <h2>Enroll Course Now</h2>

            <Card className='w-50 mx-auto my-5 p-4 bg-custom text-white'>
                <Card.Header className='text-center text-warning fs-3'>Checkout</Card.Header>
                <Card.Body>
                    <Card.Title className='fs-4'>
                        <span className='text-decoration-underline'>Course Name:</span> {title}
                    </Card.Title>
                    <Card.Text className='fs-5 d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>Instructor: {instructor?.name}</p>
                        <p className='mb-0'>Payment: ${fee}</p>
                    </Card.Text>
                    <div className='text-center'>
                        <Button onClick={handleEnrollToaster} variant="outline-warning text-white fs-5 fw-semibold">Enroll Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;