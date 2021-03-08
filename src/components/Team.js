import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './Team.css';

/**
 * @returns {React.Component} represents the team section
 */
const Team = () => {
    return (
        <div id='team' className='m-5'>
            <Container fluid>
            <h2 className='text-secondary mb-5'>Team</h2>
                <CardDeck>
                        <Card>
                            <Card.Img
                                src='https://i.ibb.co/2dBCQ9k/danica-headshot.jpg'
                                alt='danica-headshot'
                                className='headshot' />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-secondary'>Danica Gheorghiu - CMO</Card.Title>
                                <Card.Text>
                                    Danica is an Economics major at the University of Washington and has 6 years of experience at a Silicon Valley based fintech startup.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                src='https://i.ibb.co/2NzxcWM/flower-headshot.jpg'
                                alt='flower-headshot'
                                className='headshot'
                            />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-secondary'>Flower Hua - CEO</Card.Title>
                                <Card.Text>
                                    Flower is a Law, Societies, and Justice major at the University of Washington and a research Assistant at Shanze Partners PLLC.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                src='https://i.ibb.co/6Z0Brzs/Image-from-i-OS-1.jpg'
                                alt='sage-headshot'
                                className='headshot'
                            />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-secondary'>Sage Quiggle - CFO</Card.Title>
                                <Card.Text>
                                    Sage is a Political Science major at the University of Washington and specializes as the head writer of LAW+’s youth book series, Lawyer Sawyer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                src='https://i.ibb.co/bB8k2ks/jaden-headshot.jpg'
                                alt='jaden-headshot'
                                className='headshot'
                            />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-secondary'>Jaden Stetler - CTO</Card.Title>
                                <Card.Text>
                                    Jaden is a Computer Science major at the University of Washington and has experience in software and web development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </CardDeck>
                <h4 className='text-secondary mt-5'>
                        Questions, comments, or concerns? Contact us at <a href='mailto: contact@lawplus.us'>contact@lawplus.us</a>
                </h4>
            </Container>
        </div>
    )
}

export default Team;
