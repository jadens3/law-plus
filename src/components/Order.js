import React from 'react';

/**
 * @returns {React.Component} represents the order section
 */
const Order = () => {
    return (
        <div className='ml-5 pt-5' id='order'>
            <h2 className='text-secondary mb-4'>Order</h2>
            <iframe
                title='preorder'
                src="https://docs.google.com/forms/d/e/1FAIpQLScOfyM0ssCYDI-njalU0_zm6UFQwnY9FX4-waMw1xKsSLfuaw/viewform?embedded=true"
                width="640"
                height="1534"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
                    Loading…
            </iframe>
        </div>
    )
}

export default Order;
