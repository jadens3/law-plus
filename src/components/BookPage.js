import React from 'react';
import Button from 'react-bootstrap/Button';
import './BookPage.css';

/**
 * @returns {React.Component} represents the flashcards page
 */
const BookPage = () => {
    return (
        <div id="book-page" className="bg-primary">
            <img
            src="https://i.ibb.co/Ldwmh7D/May-Front-Cover.jpg"
            alt='Lawyer Sawyer Goes To The Supreme Court Book Cover'
            />
            <article>
                <h2 className="text-white">Lawyer Sawyer Youth Book</h2>
                <Button
                variant="outline-light"
                href='https://www.amazon.com/Lawyer-Sawyer-goes-Supreme-Court/dp/B08WJW8VQH/ref=sr_1_fkmr0_1?crid=FLHQ65PIAZSX&dchild=1&keywords=lawyer+sawyer+goes+to+the+supreme+court&qid=1620160142&sprefix=lawyer+sawyer+goes%2Cstripbooks%2C236&sr=8-1-fkmr0'
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
