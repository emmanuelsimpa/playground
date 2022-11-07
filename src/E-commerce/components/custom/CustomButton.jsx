import React from 'react'
import { CustomButtonContainer } from './CustomStyle'
 
export default function CustomButton({children, ...props}) {
  return (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
  )
}
