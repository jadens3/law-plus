import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomePage.css';

/**
 * @returns {React.Component} represents the home page
 */
const HomePage = () => {
    return (
        <div id="home">
            <section className="bg-primary">
                <img
                src="https://i.ibb.co/8sVMJPk/homecards.png"
                alt="Law Plus example flashcards"
                />
                <h3 className='text-white'><em>A new learning tool</em></h3>
                <h2 className='text-white'>Legal Rights Flashcards</h2>
                <Button
                variant="outline-light"
                href="https://www.etsy.com/shop/LawPlus"
                target='_blank'
                rel='noopener noreferrer'
                >
                    Buy Now on Etsy
                </Button>
            </section>
            <section>
                <img
                src="https://i.ibb.co/Ldwmh7D/May-Front-Cover.jpg"
                alt="Law Plus Lawyer Sawyer youth book cover"
                />
                <h3 className='text-primary'><em>A new story</em></h3>
                <h2 className='text-primary'>Educational Youth Book</h2>
                <Button
                variant="outline-primary"
                href="https://www.amazon.com/Lawyer-Sawyer-goes-Supreme-Court/dp/B08WJW8VQH/ref=sr_1_fkmr0_1?crid=FLHQ65PIAZSX&dchild=1&keywords=lawyer+sawyer+goes+to+the+supreme+court&qid=1620160142&sprefix=lawyer+sawyer+goes%2Cstripbooks%2C236&sr=8-1-fkmr0"
                target='_blank'
                rel='noopener noreferrer'
                >
                    Buy Now on Amazon
                </Button>
            </section>
        </div>
    )
}

export default HomePage;
