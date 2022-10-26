import React from 'react';
import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseRightSideNav from '../Pages/Courses/CourseRightSideNav/CourseRightSideNav';

const CourseContainer = () => {

    const coursesData = useLoaderData();
    // console.log(coursesData);

    return (
        <div className=''>
            <div className="row">
                <div className="col-3 border border-start-0 border-top-0 border-bottom-0 border-warning p-3">
                    <h2 className='text-warning text-center mb-3'>List of Courses</h2>
                    {
                        coursesData.map(courseData => <CourseRightSideNav
                            key={courseData.id}
                            courseData={courseData}
                        ></CourseRightSideNav>
                        )}
                </div>
                <div className="col-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;