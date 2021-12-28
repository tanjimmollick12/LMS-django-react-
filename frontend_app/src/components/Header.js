import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import {logout} from "../actions/adminActions";

const Header = () => {
    const dispatch = useDispatch()
    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    const logoutHandler = () => {

        dispatch(logout())
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Bank Name</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <LinkContainer to='/signin'>
                            <Nav.Link>
                                {adminInfo ? (
                                    <NavDropdown title={adminInfo.username} id='username'>

                                        {adminInfo.is_superuser === true ? (
                                            <LinkContainer to='/dashboard'>
                                                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                            </LinkContainer>
                                        ) : (
                                            <LinkContainer to='/userprofile'>
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                            </LinkContainer>

                                        )}

                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link>
                                            <i className='fas fa-user'></i> Sign In
                                        </Nav.Link>
                                    </LinkContainer>
                                )}

                            </Nav.Link>
                        </LinkContainer>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
