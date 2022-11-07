import React from 'react'
import CustomButton from '../custom/CustomButton'
import CartItem from '../cartItem/cartItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../../redux/cart/cartSelect'
import { useNavigate } from 'react-router-dom';
import './styles.scss'
import { toggleCartHidden } from '../../../redux/cart/cartAction'

function Dropdown() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.length ? 
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem}/>
            )) : 
            <span>Your Cart is empty</span>
          }
        </div>
        
        <CustomButton onClick={() => {
          navigate('/checkout'); 
          dispatch(toggleCartHidden())
          }}>
            Checkout
        </CustomButton>
    </div>
  )
}


export default Dropdown