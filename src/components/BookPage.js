import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './BookPage.css';

/**
 * @returns {React.Component} represents the flashcards page
 */
const BookPage = () => {
    return (
        /*<div className='m-5'>
            <Container fluid className='body-container'>
                <Row className='pt-5'>
                    <Col lg className='pb-5 m-auto'>
                        <img
                            src='https://i.ibb.co/cbN3qV0/Front-Cover.png'
                            alt='book'
                            className='d-block w-75 mx-auto image'
                        />
                    </Col>
                    <Col className='mb-5'>
                        <div className='row h-100 mr-2'>
                            <div className='col-sm-12 my-auto'>
                                <h2 className='text-secondary mb-3'>Lawyer Sawyer Goes to the Supreme Court</h2>
                                <p className='mb-4'>Our illustrated youth book introduces young readers to the Supreme Court and Bill of Rights. The book’s main character and namesake, Lawyer Sawyer, breaks down the importance of legal rights in easy-to-understand language. Lawyer Sawyer Goes to the Supreme Court is available to purchase in both paperback and kindle formats on Amazon</p>
                                <Button
                                className='bg-primary'
                                href='https://www.amazon.com/dp/B092CLB6YX/ref=pd_ybh_a_1?_encoding=UTF8&psc=1&refRID=EMKATWWF4FFJTYAH1TXB'
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
        </div>*/
        <div id="book" className="bg-primary">
            <img
                src='https://i.ibb.co/cbN3qV0/Front-Cover.png'
                alt='book'
            />
            <article>
                <h2 className="text-white">Lawyer Sawyer Youth Book</h2>
                <Button
                variant="outline-light"
                href='https://www.amazon.com/dp/B092CLB6YX/ref=pd_ybh_a_1?_encoding=UTF8&psc=1&refRID=EMKATWWF4FFJTYAH1TXB'
                target='_blank'
                rel='noopener noreferrer'
                >
                    Buy now on Amazon
                </Button>
                <img
                src="https://i.ibb.co/m9kSJCy/bookdetails.png"
                alt="More book details"
                />
                <p className="text-white">
                    Lawyer Sawyer is on a mission to teach the youth about
                    legal rights and the U.S. Supreme Court. Read along with
                    your kids as Lawyer Sawyer speaks with his own children,
                    Bill and Jill, explaining topics like the Constitution,
                    Supreme Court, and more in simple language.
                </p>
            </article>
        </div>
    )
}

export default BookPage;
