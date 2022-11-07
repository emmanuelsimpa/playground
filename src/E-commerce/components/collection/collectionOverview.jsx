import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollectionsForPreview, } from '../../../redux/shop/shopSelector'
import Preview from '../preview/Preview'
import './styles.scss'

function CollectionOverview() {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <div className='collections-overview'>
        {
          collections.map(({id, ...others}) => (
              <Preview key={id} {...others}/>
          ))
        }
    </div>
  )
}

export default CollectionOverview