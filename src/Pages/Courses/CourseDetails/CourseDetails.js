import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaDownload, FaStar } from "react-icons/fa";

const CourseDetails = () => {

    const courseData = useLoaderData();
    const { title, img_url, instructor, rating, details } = courseData;
    const { name, image } = instructor;
    const { description, course_for } = details;
    // console.log(instructor);

    return (
        <div className='p-3'>

            {/* title  */}
            <div className='d-flex align-items-center justify-content-between mb-3'>
                <h3 className='text-warning'>{title}</h3>
                <FaDownload className='fs-4 text-primary' />
            </div>
            <hr className='text-primary' />

            {/* body  */}
            <div>

                {/* image  */}
                <img src={img_url} alt="" style={{ width: "100%", height: "500px" }} className='rounded' />

                {/* body content  */}
                <div className='mt-3'>

                    {/* body content title  */}
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className=''>
                            <img src={image} alt="" style={{ width: "50px", height: "50px" }} className='rounded-circle' />
                            <p className='mb-0 fs-5'>
                                Instructor:
                                <span className='fw-semibold ms-1'>{name}</span >
                            </p>
                        </div>
                        <p className='d-flex align-items-center mb-0 fs-5'>
                            <FaStar className='text-warning me-2' />
                            <span>{rating}</span>
                        </p>
                    </div>

                    {/* body content text  */}
                    <div className='mt-3'>
                        <h3 className='text-decoration-underline'>Description:</h3>
                        <p>{description}</p>
                        <p className='mb-0 fs-5 fw-semibold'>Course For:</p>
                        <p>{course_for}</p>
                    </div>

                    {/* premium btn  */}
                    <div className='text-center mt-5'>
                        <Button variant="warning">
                            <Link to='' className='text-white fw-semibold text-decoration-none'>Get Premium Access</Link>
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CourseDetails;