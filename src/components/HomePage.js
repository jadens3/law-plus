import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './HomePage.css';

/**
 * @returns {React.Component} represents the home section
 */
const HomePage = () => {
    return (
        <div className='m-5' id='home'>
            <Container fluid className='landing'>
                <Row>
                    <Col className='pb-5'>
                        <div className='row h-100 ml-2'>
                            <div className='col-sm-12 m-auto'>
                                <h2 className='text-secondary mb-3 mt-3'>How Well Do You Know Your Legal Rights?</h2>
                                <p className='mb-4'>The law is a powerful tool, but it can be confusing or inaccessible. We're here to help. Our mission is to improve awareness about legal rights and how to exercise them through our youth book and flashcards.</p>
                                <Button
                                className='bg-primary'
                                href='http://eepurl.com/hrT_G5'
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                    Join Our Mailing List
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg className='pb-5'>
                        <Carousel className='pt-5' controls={false}>
                            <Carousel.Item>
                                <div className='carousel-image-container'>
                                    <img
                                    src='https://i.ibb.co/cb2vd5L/preordernow.jpg'
                                    alt='preorder now'
                                    className='d-block carousel-image'
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='carousel-image-container'>
                                    <a href='#/flashcards'>
                                        <img
                                        src='https://i.ibb.co/MPqv6N8/Flashcards.png'
                                        alt='preorder now'
                                        className='d-block carousel-image'
                                        />
                                    </a>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='carousel-image-container'>
                                    <a href='#/book'>
                                        <img
                                        src='https://i.ibb.co/5WjgWPB/SeeBooks.png'
                                        alt='preorder now'
                                        className='d-block carousel-image'
                                        />
                                    </a>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;
