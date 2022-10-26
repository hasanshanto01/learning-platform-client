import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


const CourseCard = ({ courseData }) => {

    const { id, title, img_url, details, rating, fee } = courseData;
    const { description } = details;
    console.log(courseData);

    return (
        <Card className='col-5 p-0 ms-5 my-4 shadow'>
            <Card.Img variant="top" src={img_url} className='h-50 rounded' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>{description.slice(0, 130)}.....</p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="warning">
                        <Link to={`/courses/${id}`} className='text-white fw-semibold text-decoration-none'>View Details</Link>
                    </Button>
                    <div className='fw-semibold'>
                        <p className='mb-0'>
                            Fee: $
                            <span className='text-warning'>{fee}</span>
                        </p>
                        <p className='d-flex align-items-center mb-0'>
                            Rating: {rating}
                            <FaStar className='text-warning' />
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;