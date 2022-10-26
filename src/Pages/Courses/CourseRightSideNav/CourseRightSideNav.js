import React from 'react';
import { Link } from 'react-router-dom';

const CourseRightSideNav = ({ courseData }) => {

    const { id, title } = courseData;
    // console.log(title);

    return (
        <ul className='list-group'>
            <li className='list-group-item border-warning bg-custom'>
                <Link to={`/courses/${id}`} className='text-white text-decoration-none ms-2'>{title}</Link>
            </li>
        </ul>
    );
};

export default CourseRightSideNav;