import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseRightSideNav from '../Pages/Courses/CourseRightSideNav/CourseRightSideNav';

const CourseContainer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-3">
                    <CourseRightSideNav></CourseRightSideNav>
                </div>
                <div className="col-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;