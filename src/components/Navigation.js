import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Banner from './Banner.js';
import './Navigation.css';

/**
 * @returns {React.Component} represents the navigation bar
 */
const Navigation = () => {
    return (
        <div className='mb-5'>
            <Navbar expand='lg' className='bg-primary' variant='dark'>
                <Navbar.Brand href='/'>
                <div className='logo-container'>
                        <img src="https://i.ibb.co/wNtwVV4/logo.png" alt="logo" border="0"/>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Item>
                            <Nav.Link href='#/' className='text-white'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#/flashcards' className='text-white'>Flashcards</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#/book' className='text-white'>Book</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#/team' className='text-white'>Team</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Banner />
        </div>
    );
}

export default Navigation;
