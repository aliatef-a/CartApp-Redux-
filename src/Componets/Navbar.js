import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar() {
    const state = useSelector((state) => state.cart.length);
    console.log(state);
    const dispatch = useDispatch();
    return (
        <>
            <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link className='navbar-brand' to="/">CartApp</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">New Products</Link>
                            <Link className='nav-link' to="/cart">Cart <span>({state})</span> </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppNavbar
