import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

/**
 * @returns {React.Component} represents the home section
 */
const Home = () => {
    return (
        <div className='ml-5' id='home'>
            <Container className='ml-0 pl-0'>
                <Row>
                    <Col className='mr-5 mb-5'>
                        <div className='row h-100'>
                            <div className='col-sm-12 my-auto'>
                                <h2 className='text-secondary mb-3'>Legal Rights Educational Tools</h2>
                                <p className='mb-4'>The law is a powerful tool, but it can be confusing or inaccessible. Our mission is to improve awareness about legal rights and how to exercise them.</p>
                                <Button className='bg-primary' href='#products'>Our Products</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg className='mb-5'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src='http://via.placeholder.com/800x450'
                                    alt='first slide'
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src='http://via.placeholder.com/800x450'
                                    alt='second slide'
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
