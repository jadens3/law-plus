import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/**
 * @returns {React.Component} represents the navigation bar
 */
const Navigation = () => {
    return (
        <Navbar className='bg-primary mb-2 pl-4'>
            <Navbar.Brand className='text-white font-italic'><h1>LAW+</h1></Navbar.Brand>
            <Nav>
                <Nav.Link className='text-white'>Product</Nav.Link>
                <Nav.Link className='text-white'>About</Nav.Link>
                <Nav.Link className='text-white'>Shop</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;
