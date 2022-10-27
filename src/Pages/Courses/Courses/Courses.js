import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {

    const coursesData = useLoaderData();
    // console.log(coursesData);

    return (
        <div className='m-3'>
            <h3 className='text-center text-warning mb-3'>Available Courses</h3>
            <div className="container">
                <div className="row justify-content-around">
                    {
                        coursesData.map(courseData => <CourseCard
                            key={courseData.id}
                            courseData={courseData}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Courses;