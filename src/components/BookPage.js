import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

/**
 * @returns {React.Component} represents the flashcards page
 */
const BookPage = () => {
    return (
        <Container fluid className='pl-5 pr-5 pb-5'>
            <Row className='pt-5'>
                <Col lg className='pb-5 m-auto'>
                    <img
                        src='https://i.ibb.co/cbN3qV0/Front-Cover.png'
                        alt='book'
                        className='d-block w-75 mx-auto'
                    />
                </Col>
                <Col className='mb-5'>
                    <div className='row h-100'>
                        <div className='col-sm-12 my-auto'>
                            <h2 className='text-secondary mb-3'>Lawyer Sawyer Goes to the Supreme Court</h2>
                            <p className='mb-4'>Our illustrated youth book introduces young readers to the Supreme Court and Bill of Rights. The book’s main character and namesake, Lawyer Sawyer, breaks down the importance of legal rights in easy-to-understand language. Lawyer Sawyer Goes to the Supreme Court is available to purchase in both paperback and kindle formats on Amazon</p>
                            <Button
                            className='bg-primary'
                            href='https://www.amazon.com/Lawyer-Sawyer-goes-Supreme-Court/dp/B08WJW8VQH'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                Purchase on Amazon
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BookPage;
