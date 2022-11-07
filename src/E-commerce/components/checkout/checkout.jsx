import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, reduceItem, removeItem } from '../../../redux/cart/cartAction'
import './styles.scss'


function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();

    const {name, imageUrl, price, quantity,} = cartItem;

    const handleRemove = () => {
        dispatch(removeItem(cartItem))
    }

    const addItems = () => {
      dispatch(addItem(cartItem))
    }
    const deduceItem = () => {
      dispatch(reduceItem(cartItem))
    }


    
  return (
    <div className='checkout-item'>
        <div className="image-container">
            <img alt='checkout pic' src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={deduceItem}>&#10094;</div>
          <span className='value'> {quantity} </span>
          <div className="arrow" onClick={addItems}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
         <div className="remove-button" onClick={handleRemove}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem