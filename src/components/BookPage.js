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
                href='https://www.amazon.com/dp/B092CLB6YX/ref=pd_ybh_a_1?_encoding=UTF8&psc=1&refRID=EMKATWWF4FFJTYAH1TXB'
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
