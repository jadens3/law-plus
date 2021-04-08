import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

/**
 * @returns {React.Component} represents the navigation bar
 */
const Navigation = () => {
    return (
        <header className='bg-primary text-white'>
            <h1>Law+</h1>
            <Navbar expand='lg' variant='dark'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
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
                            <Nav.Link href='#/team' className='text-white'>About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr/>
        </header>
    );
}

export default Navigation;
