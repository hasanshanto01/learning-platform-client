import React from 'react';
import { Link } from 'react-router-dom';

const CourseRightSideNav = ({ courseData }) => {

    const { id, title } = courseData;
    // console.log(title);

    return (
        <div>
            <ul>
                <li>
                    <Link to='/coures/id' className='text-decoration-none ms-2'>{title}</Link>
                </li>
            </ul>
        </div>
    );
};

export default CourseRightSideNav;