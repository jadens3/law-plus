import React from 'react';
import './Banner.css'

/**
 * @returns {React.Component} represents the banner
 */
 const Banner = () => {
    return(
        <h5 className='banner pl-5 pt-3 pb-3'>
            <a
            href='https://www.etsy.com/shop/LawPlus'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white'
            >
                Click Here To Order Our Flashcards on Etsy!
            </a>
        </h5>
    )
 }

 export default Banner;