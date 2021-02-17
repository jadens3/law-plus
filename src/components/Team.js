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
        <div id='team' className='mt-5'>
            <h2 className='text-secondary mb-5 ml-5'>Team</h2>
            <Container className='ml-5 pl-0 mb-5'>
                <Row className='mw-75'>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                src='https://i.ibb.co/2dBCQ9k/danica-headshot.jpg'
                                alt='danica-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Danica Gheorghiu - CMO</h5>
                    </Col>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                src='https://i.ibb.co/2NzxcWM/flower-headshot.jpg'
                                alt='flower-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Flower Hua - CEO</h5>  
                    </Col>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                src='https://i.ibb.co/tptBXHx/sage-headshot.png'
                                alt='sage-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Sage Quiggle - CFO</h5> 
                    </Col>
                    <Col className='text-center'>
                        <div className='headshot-container m-auto'>
                            <img
                                className='mb-2'
                                src='https://i.ibb.co/bB8k2ks/jaden-headshot.jpg'
                                alt='jaden-headshot'
                            />
                        </div>
                        <h5 className='text-secondary mt-2 mb-4'>Jaden Stetler - CTO</h5>  
                    </Col>
                </Row>
            </Container>
            <h5 className='ml-5 mb-5 text-secondary'>
                Questions, concerns, or feedback? <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfkdjLp_paAnx70uw6F7xvGzCmLW5_FWesU4s0NOvRsALpeIQ/viewform?usp=sf_link'
                target='_blank'
                rel='noopener noreferrer'
                >
                     Contact us here
                </a>
            </h5>
        </div>
    )
}

export default Team;
