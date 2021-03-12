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
                <Col lg className='mb-5'>
                <img
                    src='https://i.ibb.co/QMtshQk/cards.jpg'
                    alt='cards'
                    className='d-block w-100'
                />
                </Col>
                <Col className='mb-5'>
                    <div className='row h-100'>
                        <div className='col-sm-12 my-auto'>
                            <h2 className='text-secondary mb-3'>Flashcards</h2>
                            <p className='mb-4'>Our flashcard set contains prompts based on common scenarios related to exercising your legal rights and digestible explanations of the rights you have. Scenario categories include being pulled over, entering a lease agreement, and being involved in a traffic accident.</p>
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
