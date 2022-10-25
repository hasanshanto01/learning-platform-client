import React from 'react';
import { FaCopyright, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-primary text-center p-3 fixed-bottom'>
            <p className='fs-5 fw-bold mb-0'>Contact us</p>
            <div className='fs-3'>
                <a href='https://www.facebook.com/' target='_blank'>
                    <FaFacebook className='text-white' />
                </a>
                <a href='https://twitter.com/' target='_blank'>
                    <FaTwitter className='ms-3 text-white' />
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                    <FaInstagram className='ms-3 text-white' />
                </a>
                <a href='https://www.linkedin.com/' target='_blank'>
                    <FaLinkedin className='ms-3 text-white' />
                </a>
            </div>
            <p className='fs-5 mt-3'>All <FaCopyright className='text-white fs-6' />copyrights reserved to <span className='text-warning'>Skill</span> Hub</p>
        </div>
    );
};

export default Footer;