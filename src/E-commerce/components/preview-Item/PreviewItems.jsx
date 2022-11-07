import React from 'react'
import CustomButton from '../custom/CustomButton'
import { addItem } from '../../../redux/cart/cartAction'
import { useDispatch } from 'react-redux'
import './styles.scss'

function PreviewItems({item}) {
  const dispatch = useDispatch()
  const {name, price, imageUrl} = item;

  return (
    <div className="collection-item">
        <div className="image"
        style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="footer">
             <span className="name">{name}</span>
             <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => dispatch(addItem(item))} invertedButton className='custom-button'>ADD TO Cart</CustomButton>
    </div>
  )
}

export default PreviewItems