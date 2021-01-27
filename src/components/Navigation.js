import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashLink as Link }from 'react-router-hash-link';

/**
 * @returns {React.Component} represents the navigation bar
 */
const Navigation = () => {
    return (
        <Navbar className='bg-primary mb-3 pl-4'>
            <Navbar.Brand className='text-white font-italic'><h1>LAW+</h1></Navbar.Brand>
            <Nav>
                <Link smooth to='/#product' className='m-4 text-white'>Product</Link>
                <Link smooth to='/#about' className='m-4 text-white'>About</Link>
                <Link smooth to='/#shop' className='m-4 text-white'>Shop</Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;
