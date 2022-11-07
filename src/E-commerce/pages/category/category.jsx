import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectShopItem } from '../../../redux/shop/shopSelector'
import PreviewItems from '../../components/preview-Item/PreviewItems'
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './styles'

const Category = () => {
  const { id } = useParams();
  const { collections } = useSelector(
    (state) => ({
        collections: selectShopItem(id)(state),        
    }),
    shallowEqual
  );

  const { title, items } = collections;
  
  return (
    <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <PreviewItems key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}


export default Category