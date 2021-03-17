import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Page.css'

/**
 * @returns {React.Component} represents the flashcards page
 */
const FlashcardsPage = () => {
    return (
        <div className='m-5'>
            <Container fluid className='body-container'>
                <Row>
                    <Col lg className='pb-5 m-auto'>
                        <Carousel className='pt-5' controls={false}>
                            <Carousel.Item>
                                <img
                                src='https://i.ibb.co/ysvsWn8/flashcard.jpg'
                                alt='flashcard back'
                                className='d-block mx-auto image w-50'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src='https://i.ibb.co/MGML8mM/Flashcard-Back.png'
                                alt='flashcard back'
                                className='d-block mx-auto image w-50'
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='mb-5'>
                        <div className='row h-100 mr-5'>
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
        </div>
    )
}

export default FlashcardsPage;
