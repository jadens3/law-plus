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
                <Link smooth to='#product' className='text-white m-3'>Product</Link>
                <Link smooth to='#about' className='text-white m-3'>About</Link>
                <Link smooth to='#shop' className='text-white m-3'>Shop</Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;
