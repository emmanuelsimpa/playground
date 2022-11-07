import React from 'react'
import SignIn from '../../components/sign_in/Sign-In'
import SignUp from '../../components/sign_out/Sign-out'
import { SignInAndSignUpContainer } from './styles'

export default function SignRegister() {
   
    
  return (
    <SignInAndSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpContainer>
  )
}
