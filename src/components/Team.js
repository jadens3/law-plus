import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Team.css';

/**
 * @returns {React.Component} represents the team section
 */
const Team = () => {
    return (
        <div id='team'>
            <h2 className='text-secondary mb-4 ml-5'>Team</h2>
            <Container className='ml-5 pl-0 mb-5'>
                <Row className='mw-75'>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                src='https://i.ibb.co/2dBCQ9k/danica-headshot.jpg'
                                alt='danica-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Danica Gheorghiu</h5>
                    </Col>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                src='https://i.ibb.co/2NzxcWM/flower-headshot.jpg'
                                alt='flower-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Flower Hua</h5>  
                    </Col>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                src='https://i.ibb.co/tptBXHx/sage-headshot.png'
                                alt='sage-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Sage Quiggle</h5> 
                    </Col>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                className='mb-2'
                                src='https://i.ibb.co/bB8k2ks/jaden-headshot.jpg'
                                alt='jaden-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Jaden Stetler</h5>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;
