import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

/**
 * @returns {React.Component} represents the flashcards page
 */
const FlashcardsPage = () => {
    return (
        <Container fluid className='pt-5 pl-5 pr-5 pb-5'>
            <Row>
                <Col lg className='pb-5 m-auto'>
                <img
                    src='https://i.ibb.co/ysvsWn8/flashcard.jpg'
                    alt='cards'
                    className='d-block w-75 mx-auto'
                />
                </Col>
                <Col className='mb-5'>
                    <div className='row h-100'>
                        <div className='col-sm-12 my-auto'>
                            <h2 className='text-secondary mb-3'>Flashcards</h2>
                            <p className='mb-4'>Our current flashcard set contains 20 cards with information related to traffic stops. The deck includes illustrations and descriptions of how to respond when pulled over, what legal rights and protections you have, and a list commonly broken laws that can lead to traffic stops.</p>
                            <Button
                            className='bg-primary'
                            href='https://docs.google.com/forms/d/e/1FAIpQLScOfyM0ssCYDI-njalU0_zm6UFQwnY9FX4-waMw1xKsSLfuaw/viewform?usp=sf_link'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                Preorder Now
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FlashcardsPage;
