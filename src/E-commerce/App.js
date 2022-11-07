import React, { useEffect } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import SignRegister from './pages/form/Sign_Register'
import HomePage from './pages/homepage/HomePage'
import ShopCollection from './pages/shop/ShopCollection'
import { useDispatch, useSelector, } from 'react-redux'
import './styles.scss'
import { selectCurrentUser } from '../redux/userReducer/userSelect'
import Checkout from './pages/checkout/checkout'
import { fetchCollectionStart } from '../redux/shop/shopAction'
import CategoryContainer from './pages/category/categoryContainer'
import { checkUserSession } from '../redux/userReducer/userAction'

const EcommerceApp = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(fetchCollectionStart())
    dispatch(checkUserSession())
  }, [dispatch])
  
    return (
      <div className=''>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop' element={ <ShopCollection/>}/>
        <Route path={`/shop/:id`} element={<CategoryContainer/>}/>
        <Route path='/signin' element={currentUser ? <Navigate to='/'/> : <SignRegister/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<div>Hello</div>}/>
      </Routes>
      </div>
    )
}

export default EcommerceApp