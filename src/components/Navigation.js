import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

/**
 * @returns {React.Component} represents the navigation bar
 */
 // TODO: Make mobile-friendly dropdown
const Navigation = () => {
    return (
        <Navbar expand='lg' className='bg-primary mb-5' variant='dark'>
            <Navbar.Brand href='#home'>
            <div className='logo-container'>
                    <img src="https://i.ibb.co/wNtwVV4/logo.png" alt="logo" border="0"/>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Nav.Link href='#home' className='text-white'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#products' className='text-white'>Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#team' className='text-white'>Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#order' className='text-white'>Order</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
