import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../image/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvide/AuthProvider';
import { FaBeer, FaUserCircle } from 'react-icons/fa';

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

    const { user, setUser, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
            })
            .catch(error => console.error(error));
    }


    return (
        <Navbar collapseOnSelect expand="lg" className='bg-custom' variant="dark">
            <Container className='text-danger'>
                <Navbar.Brand href="/" className='fs-3 fw-bold'>
                    <img
                        src={logoImg}
                        alt=""
                        width="40"
                        height="40"
                        className='me-2'
                    />
                    <span className='text-warning'>Skill</span> Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                    <Nav className='fs-5 align-items-center'>
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

                        {

                            user?.uid ?
                                <>
                                    <Button
                                        onClick={handleLogOut}
                                        variant="outline-warning"
                                        size="sm"
                                        className='mx-4 text-white fs-5 py-0'
                                    >
                                        Log Out
                                    </Button>
                                    <div className='border border-success'>
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt="" />
                                                :
                                                <FaUserCircle className='text-warning display-5'
                                                />
                                        }
                                    </div>
                                </>
                                :
                                <>
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
                                </>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;