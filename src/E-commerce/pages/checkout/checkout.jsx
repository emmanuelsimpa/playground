import React from 'react'
import { shallowEqual, useSelector, } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cartSelect'
import CheckoutItem from '../../components/checkout/checkout'
import StripeButton from '../../components/stripeButton/stripeButton'
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './styles'

function Checkout() {
    const {cartItems, total} = useSelector(
        (state) => ({
            cartItems: selectCartItems(state),
            total: selectCartTotal(state)
        }),
    shallowEqual)

  return (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
        <HeaderBlockContainer>
            <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Remove</span>
        </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeButton price={total} />
    </CheckoutPageContainer>
  )
}

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     total: selectCartTotal
// })
export default Checkout