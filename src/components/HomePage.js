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
                >
                    Buy Now on Etsy
                </Button>
            </section>
            <section>
                <img
                src="https://i.ibb.co/gVnQG2Y/homebook.png"
                alt="Law Plus Lawyer Sawyer youth book cover"
                />
                <h3 className='text-primary'><em>A new story</em></h3>
                <h2 className='text-primary'>Educational Youth Book</h2>
                <Button
                variant="outline-primary"
                href="https://www.amazon.com/dp/B092CLB6YX/ref=pd_ybh_a_1?_encoding=UTF8&psc=1&refRID=EMKATWWF4FFJTYAH1TXB"
                >
                    Buy Now on Amazon
                </Button>
            </section>
        </div>
    )
}

export default HomePage;
