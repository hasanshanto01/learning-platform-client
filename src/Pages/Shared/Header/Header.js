import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import img from '../../../image/logo.png';

const Header = () => {

    let activeStyle = {
        color: "gold",
        textDecoration: "none",
        marginLeft: "20px",
    };

    let inactiveStyle = {
        color: "white",
        textDecoration: "none",
        marginLeft: "20px"
    };


    return (
        <Navbar collapseOnSelect expand="lg" className='bg-custom' variant="dark">
            <Container className='text-danger'>
                <Navbar.Brand href="/" className='fs-3 fw-bold'>
                    <img
                        src={img}
                        alt=""
                        width="40"
                        height="40"
                        className='me-2'
                    />
                    <span className='text-warning'>Skill</span> Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                    <Nav className='fs-5'>
                        <NavLink
                            to="/"
                            end
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/courses"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/faq"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                            to="/blog"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/login"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Register
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;