import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hzv0JGdQg69q3IwdvwQjYIRlzwVPXGGzzFlLBCLgaiol5z91R6hP7qWDNKoHMJR0wlwRf2IiXk1261pVdWufwnj00gJT6vpGi';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull');
    }
    return (
        <StripeCheckout 
        label="Pay Now"
        name="Ecommerce Payment"
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        
        />
    )
}

export default StripeCheckoutButton;