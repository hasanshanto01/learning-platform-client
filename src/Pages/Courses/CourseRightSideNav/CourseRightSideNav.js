import React from 'react';
import { Link } from 'react-router-dom';

const CourseRightSideNav = ({ courseData }) => {

    const { id, title } = courseData;
    // console.log(title);

    return (
        <ul>
            <li>
                <Link to={`/courses/${id}`} className='text-decoration-none ms-2'>{title}</Link>
            </li>
        </ul>
    );
};

export default CourseRightSideNav;