import React from 'react';
import './Banner.css'

/**
 * @returns {React.Component} represents the banner
 */
 const Banner = () => {
    return(
        <h5 className='banner pl-5 pt-3 pb-3'>
            <a
            href='https://docs.google.com/forms/d/e/1FAIpQLScOfyM0ssCYDI-njalU0_zm6UFQwnY9FX4-waMw1xKsSLfuaw/viewform?usp=sf_link'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white'
            >
                Click Here To Preorder!
            </a>
        </h5>
    )
 }

 export default Banner;