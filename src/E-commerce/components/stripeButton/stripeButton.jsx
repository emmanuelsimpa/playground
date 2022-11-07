import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios'

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const StripeButton = ({price}) => {
  const stripeKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx';
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token)
    alert("Payment Successful")
    // axios({
    //   url: '/payment',
    //   method: 'post',
    //   data: {
    //     amount: priceForStripe,
    //     token: token
    //   }
    // }).then(
    //   alert("Payment Successful")
    // ).catch(err => console.log('payment error: ' + JSON.parse(err)))
    
  }

  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey={stripeKey}
        label= "Pay Now"
        name='Bosey Clothing'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
      />
    </div>
  )
}

export default StripeButton