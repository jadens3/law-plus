import React from 'react';
import { Instagram, Envelope, Facebook } from 'react-bootstrap-icons';

/**
 * @returns {React.Component} represents the Footer section
 */
const Footer = () => {
    return (
            <div className='bg-primary w-100 m-0 text-center footer'>
                <a
                href='https://www.facebook.com/Law-107226611423427/?hc_ref=ARRP7EgT31at5aUFZneV27w-zl2_mE2Sg8dT3oLwNPUnrpQn76BGa_twZylvbCrV0zo&fref=nf&__tn__=kC-R'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Facebook className='text-white m-3' size={40}/>
                </a>
                <a
                href='https://www.instagram.com/law.is.powerful/'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Instagram className='text-white m-3' size={40}/>
                </a>
                <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfkdjLp_paAnx70uw6F7xvGzCmLW5_FWesU4s0NOvRsALpeIQ/viewform?usp=sf_link'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Envelope className='text-white m-3' size={45}/>
                </a>
            </div>
    )
}

export default Footer;
