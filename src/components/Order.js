import React from 'react';
import Container from 'react-bootstrap/Container';

/**
 * @returns {React.Component} represents the order section
 */
const Order = () => {
    return (
        <div className='m-5 pt-5' id='order'>
            <Container fluid>
            <h2 className='text-secondary mb-4'>Order</h2>
                <iframe
                    title='preorder'
                    src="https://docs.google.com/forms/d/e/1FAIpQLScOfyM0ssCYDI-njalU0_zm6UFQwnY9FX4-waMw1xKsSLfuaw/viewform?embedded=true"
                    width="640"
                    height="1534"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                        Loading…
                </iframe>
            </Container>
        </div>
    )
}

export default Order;
