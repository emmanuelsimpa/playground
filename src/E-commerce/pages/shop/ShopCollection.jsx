import React from 'react'
// import { Route, Routes, } from 'react-router-dom'
import CollectionOverviewContainer from '../../components/collection/collectionContainer'

const ShopCollection = ()=> {

  return (
     <div className="shop-page">
      <CollectionOverviewContainer/>
        {/* <Routes>
          <Route index element={<CollectionOverviewContainer/>}/>
        </Routes> */}
      </div>
  )
}

export default ShopCollection