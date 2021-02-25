import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

/**
 * @returns {React.Component} represents the home section
 */
const Home = () => {
    return (
        <div className='m-5' id='home'>
            <Container fluid className='pb-5'>
                <Row>
                    <Col className='pb-5'>
                        <div className='row h-100 mr-5'>
                            <div className='col-sm-12 m-auto'>
                                <h2 className='text-secondary mb-3'>Legal Rights Educational Tools</h2>
                                <p className='mb-4'>The law is a powerful tool, but it can be confusing or inaccessible. Our mission is to improve awareness about legal rights and how to exercise them.</p>
                                <Button
                                className='bg-primary'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSfkdjLp_paAnx70uw6F7xvGzCmLW5_FWesU4s0NOvRsALpeIQ/viewform?usp=sf_link'
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                    Contact us!
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg className='pb-5'>
                        {/*
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src='https://i.ibb.co/cb2vd5L/preordernow.jpg'
                                    alt='first slide'
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                        </Carousel>
                        */}
                        <img
                            src='https://i.ibb.co/cb2vd5L/preordernow.jpg'
                            alt='preorder now'
                            className='d-block w-100'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
