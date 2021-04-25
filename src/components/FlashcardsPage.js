import React from 'react';
import Button from 'react-bootstrap/Button';
import './FlashcardsPage.css'

/**
 * @returns {React.Component} represents the flashcards page
 */
const FlashcardsPage = () => {
    return (
        <div id="cards">
            <section className="bg-primary text-white" id="card-description">
                <img
                src="https://i.ibb.co/8sVMJPk/homecards.png"
                alt="Flashcard deck"
                />
                <div>
                    <h2>Law+ Flashcards</h2>
                    <Button
                    variant="outline-light"
                    href='https://www.etsy.com/shop/LawPlus'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Buy now on Etsy
                    </Button>
                    <p>
                        This flashcard deck includes information about how you can respond when
                        pulled over, your legal rights during a traffic stop, and a list of
                        commonly broken laws.
                    </p>
                    <p>
                        Each deck comes shrink-wrapped and is packaged with a ring to keep things
                        together. A single deck contains 16 cards with helpful descriptions and
                        colorful illustrations.
                    </p>
                </div>
            </section>
            <section className="text-primary">
                <div>
                    <h3>Traffic Stop Situationals</h3>
                    <h2>A Step-by-Step Guide</h2>
                </div>
                <img
                src="https://i.ibb.co/W2ZWc40/cardsguide.png"
                alt="Cards describing what to do when pulled over"
                />
            </section>
            <section className="bg-primary text-white">
                <img
                src="https://i.ibb.co/WWFt7zb/cardsrights.png"
                alt="Cards describing legal rights when pulled over"
                id="cardsrights"
                />
                <div>
                    <h3>Your Rights When Pulled Over</h3>
                    <h2>With Illustrated Examples</h2>
                </div>
            </section>
            <section className="text-primary">
                <div>
                    <h3>Commonly Broken Laws</h3>
                    <h2>And Related Consequences</h2>
                </div>
                <img
                src="https://i.ibb.co/8PCfNFN/cardslaws.png"
                alt="Cards describing commonly broken laws"
                id="cardslaws"
                />
            </section>
        </div>
    )
}

export default FlashcardsPage;
