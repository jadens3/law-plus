import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomePage.css';

/**
 * @returns {React.Component} represents the home page
 */
const HomePage = () => {
    return (
        <>
            <section className="bg-primary">
                <img
                src="https://i.ibb.co/8sVMJPk/homecards.png"
                alt="Law Plus example flashcards"
                />
                <h2 className='text-white'>Legal Rights Flashcards</h2>
                <Button
                variant="outline-light"
                href="#/flashcards"
                >
                    Learn More
                </Button>
            </section>
            <section>
                <img
                src="https://i.ibb.co/gVnQG2Y/homebook.png"
                alt="Law Plus Lawyer Sawyer youth book cover"
                />
                <h2 className='text-primary'>Educational Youth Book</h2>
                <Button
                variant="outline-primary"
                href="#/book"
                >
                    Learn More
                </Button>
            </section>
        </>
    )
}

export default HomePage;
