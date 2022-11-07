import React from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { useSelector,  } from 'react-redux'
import CartIcon from '../cartIcon/cartIcon'
import Dropdown from '../cartDropdown/dropdown'
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './HeaderStyle'
import { signOutStart } from '../../../redux/userReducer/userAction'


function Header() {
  const dispatch = useDispatch()
  const {currentUser, hidden} = useSelector(
    ({ cart: {hidden}, user: {currentUser}}) => ({
      currentUser,
      hidden
    }),
    shallowEqual
  )

  return (
    <HeaderContainer>
        <LogoContainer to='/'>
            <img className='logo' alt='' src="/Assets/logo.svg"></img>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
              currentUser ? 
              (<OptionDiv onClick={() => dispatch(signOutStart())}> SIGN OUT</OptionDiv>) 
              :
              <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            {/* <div>{currentUser ? currentUser?.displayName : ''}</div> */}
            <CartIcon/>
        </OptionsContainer>
        {
          hidden ? null : 
          <Dropdown/>
        }
    </HeaderContainer>
  )
}


export default Header;