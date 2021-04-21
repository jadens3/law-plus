import React from 'react';
import './AboutPage.css';

/**
 * @returns {React.Component} represents the about section
 */
const AboutPage = () => {
    return (
        <div id="about">
            <section className="bg-primary">
                <h2 className="text-white">Team</h2>
                <div id="team">
                    <div className="member">
                        <div className="img-container">
                            <img
                            src="https://i.ibb.co/2dBCQ9k/danica-headshot.jpg"
                            alt="Danica's headshot"
                            />
                        </div>
                        <h4>Danica Gheorghiu</h4>
                        <p>
                            Danica is an Economics major at the University of
                            Washington and has 6 years of experience at a
                            Silicon Valley-based fintech startup.
                        </p>
                    </div>
                    <div className="member">
                        <div className="img-container">
                            <img
                            src="https://i.ibb.co/2NzxcWM/flower-headshot.jpg"
                            alt="Flower's headshot"
                            />
                        </div>
                        <h4>Flower Hua</h4>
                        <p>
                            Flower is a Law, Societies, and Justice major at
                            the University of Washington and a research
                            Assistant at Shanze Partners PLLC.
                        </p>
                    </div>
                    <div className="member">
                        <div className="img-container">
                            <img
                            src="https://i.ibb.co/6Z0Brzs/Image-from-i-OS-1.jpg"
                            alt="Sage's headshot"
                            />
                        </div>
                        <h4>Sage Quiggle</h4>
                        <p>
                            Sage is a Political Science major at the University
                            of Washington and specializes as the head writer of
                            LAW+’s youth book series, Lawyer Sawyer.
                        </p>
                    </div>
                    <div className="member">
                        <div className="img-container">
                            <img
                            src="https://i.ibb.co/bB8k2ks/jaden-headshot.jpg"
                            alt="Jaden's headshot"
                            />
                        </div>
                        <h4>Jaden Stetler</h4>
                        <p>
                            Jaden is a Computer Science major at the University
                            of Washington and has experience in software and
                            web development.
                        </p>
                    </div>
                </div>
            </section>
            <section id="mission">
                <h2>Our Mission</h2>
                <blockquote>
                    Law+'s mission is to improve awareness about legal rights
                    and how to exercise them through our youth book and flash
                    cards.
                </blockquote>
            </section>
        </div>
    )
}

export default AboutPage;
