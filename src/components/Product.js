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
        <div className='m-3'>
            <h2 className="text-secondary mb-3">Product</h2>
            <h2 className='mb-3'>The law is a powerful tool. Learn to use it.</h2>
            <h3 className='mb-1'>[Product Name]</h3>
            <Container className='mt-3 ml-0 pl-0 mb-3'>
                <Row>
                    <Col>
                        <p>[Product description]</p>
                    </Col>
                    <Col>
                        <h5 className='mb-1'>Product Specifications</h5>
                        <ul className='pl-3'>
                            <li>Dimensions</li>
                            <li>Material</li>
                            <li>Packaging</li>
                            <li>shipping/Other</li>
                        </ul>
                        <Button className="bg-primary mt-2">Shop Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product;
