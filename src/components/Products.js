import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

/**
 * @returns {React.Component} represents the product section
 */
// TODO: Set carousel min-width and migrate to separate css?
// Maybe make law is powerful tool 2 columns
const Products = () => {
    return (
        <div className='ml-5' id='products'>
            <Container className='ml-0 pl-0'>
                <Row>
                    <Col className='mr-5 mb-5'>
                        <iframe
                            id='50869b46-c851-4212-bede-7faff8f07d15'
                            src='https://www.vectary.com/viewer/v1/?model=50869b46-c851-4212-bede-7faff8f07d15&env=monkforest'
                            frameborder='0'
                            width='100%'
                            height='480'
                            title='card'>
                        </iframe>
                    </Col>
                    <Col className='mr-5 mb-5'>
                        <div className='row h-100'>
                            <div className='col-sm-12 my-auto'>
                                <h2 className='text-secondary mb-3'>Flashcards</h2>
                                <p className='mb-4'>Our flashcard set contains prompts based on common scenarios related to exercising your legal rights and digestible explanations of the rights you have. Scenario categories include being pulled over, entering a lease agreement, and being involved in a traffic accident.</p>
                                <Button className='bg-primary'>Preorder Now</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='ml-0 pl-0'>
                <Row>
                    <Col className='mr-5 mb-5'>
                        <div className='row h-100'>
                            <div className='col-sm-12 my-auto'>
                                <h2 className='text-secondary mb-3'>Lawyer Sawyer Goes to the Supreme Court</h2>
                                <p className='mb-4'>Our illustrated youth book introduces young readers to the Supreme Court and Bill of Rights. Explanations are delivered through the book’s main character and namesake, Lawyer Sawyer.</p>
                                <Button className='bg-primary'>Preorder Now</Button>
                            </div>
                        </div>
                    </Col>
                    <Col className='mr-5 mb-5'>
                        <img
                            src='http://via.placeholder.com/800x450'
                            alt='first slide'
                            className='d-block w-100'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products;
