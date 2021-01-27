import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

/**
 * @returns {React.Component} represents the product section
 */
const Product = () => {
    return (
        <div className='ml-4'>
            <h2 className='mb-5'>The law is a powerful tool. Learn to use it.</h2>
            <h3 className='text-secondary mb-4'>[Product Name]</h3>
            <Container className='ml-0 pl-0 mb-1'>
                <Row>
                    <Col className='mr-5 mb-4'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src='http://via.placeholder.com/800x450'
                                    alt='first slide'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src='http://via.placeholder.com/800x450'
                                    alt='second slide'
                                />
                            </Carousel.Item>
                        </Carousel>
                        <p className='mt-4'>[Product description]</p>
                    </Col>
                    <Col className='mb-4'>
                        <h5 className='mb-1'>[Product Specifications]</h5>
                        <ul className='pl-3 mb-3'>
                            <li>[Dimensions]</li>
                            <li>[Material]</li>
                            <li>[Packaging]</li>
                            <li>[Shipping/Other]</li>
                        </ul>
                        <p className='font-weight-bold'>Price: [TBD]</p>
                        <Button className="bg-primary mt-2">Shop Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product;
