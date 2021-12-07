import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
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
                                <i className='fas fa-user'></i> Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
