import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import welcome from '../../image/welcome.gif';

const Home = () => {
    return (
        <div className='position-relative'>
            <img src={welcome} alt="" className='welcome-gif' />
            <div className='w-75 mx-auto mt-3 text-white text-center position-absolute top-0 start-50 translate-middle-x'>
                <h1>Welcome! to <span className='text-warning'>Skill</span> Hub</h1>
                <p className='text-warning'>An online learning platform, where you can learn and develope your skill in various kind of technical field such as Web Development, App Development, Digital Marketing, Graphic Design etc. We are dedicated to give you best service to full fill your dream.</p>
            </div>
        </div>
    );
};

export default Home;