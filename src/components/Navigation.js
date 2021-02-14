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
        <Navbar className='bg-primary mb-5' variant='dark'>
            <Navbar.Brand href='#home'>
            <div className='logo-container'>
                    <img src="https://i.ibb.co/wNtwVV4/logo.png" alt="logo" border="0"/>
            </div>
            </Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Item>
                    <Nav.Link href='#home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#products'>Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#team'>Team</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Navigation;
