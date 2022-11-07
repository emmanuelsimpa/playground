import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cartAction'
import { selectCartItemsCount } from '../../../redux/cart/cartSelect'
import './styles.scss'

function CartIcon() {
    const dispatch = useDispatch()
    const itemCount = useSelector(selectCartItemsCount)
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
        <img className='shopping-icon' alt='Cart' src='/Assets/cart.svg'/>
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}


export default CartIcon