import React from 'react';
import "./Footer.css";

/**
 * @returns {React.Component} represents the Footer section
 */
const Footer = () => {
    return (
            <footer className="bg-primary">
                <a
                href='http://eepurl.com/hrT_G5'
                target='_blank'
                rel='noopener noreferrer'
                >
                    Mailing List
                </a>
                <a
                href='https://www.facebook.com/Law-107226611423427/?hc_ref=ARRP7EgT31at5aUFZneV27w-zl2_mE2Sg8dT3oLwNPUnrpQn76BGa_twZylvbCrV0zo&fref=nf&__tn__=kC-R'
                target='_blank'
                rel='noopener noreferrer'
                >
                    Facebook
                </a>
                <a
                href='https://www.instagram.com/law.is.powerful/'
                target='_blank'
                rel='noopener noreferrer'
                >
                    Instagram
                </a>
                <a
                href='mailto: contact@lawplus.us'
                >
                    Contact
                </a>
            </footer>
    )
}

export default Footer;
