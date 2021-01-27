import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/**
 * @returns {React.Component} represents the about section
 */
const About = () => {
    return (
        <div id='about' className='ml-4 mb-5'>
            <h2 className="text-secondary mb-3">About</h2>
            <h3 className='mb-4'>Story</h3>
            <p className='mb-5'>[Text here]</p>
            <h3 className='mb-4'>Team</h3>
            <Container className='ml-0 pl-0'>
                <Row>
                    <Col className='text-center'>
                        <img
                            className='mb-2'
                            src='http://via.placeholder.com/200x300'
                            alt='Member 1 headshot'
                        />
                      <p>[Member 1]</p>
                    </Col>
                    <Col className='text-center'>
                        <img
                            className='mb-2'
                            src='http://via.placeholder.com/200x300'
                            alt='Member 1 headshot'
                        />
                        <p>[Member 2]</p>  
                    </Col>
                    <Col className='text-center'>
                        <img
                            className='mb-2'
                            src='http://via.placeholder.com/200x300'
                            alt='Member 1 headshot'
                        />
                        <p>[Member 3]</p> 
                    </Col>
                    <Col className='text-center'>
                        <img
                            className='mb-2'
                            src='http://via.placeholder.com/200x300'
                            alt='Member 1 headshot'
                        />
                        <p>[Member 4]</p>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
