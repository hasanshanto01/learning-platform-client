import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {

    const coursesData = useLoaderData();
    // console.log(coursesData);

    return (
        <div className='m-3'>
            <h2 className='text-center text-warning mb-3'>Available Courses</h2>
            <div className="container">
                <div className="row">
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