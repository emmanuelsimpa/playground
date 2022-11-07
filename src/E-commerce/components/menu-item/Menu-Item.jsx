import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from './styles';


function MenuItem({ title, imageUrl, size, linkUrl,  }) {
  let navigate = useNavigate(); 
  return (
    <MenuItemContainer
      size={size}
      onClick={() => navigate (`${linkUrl}`)}
    >   
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default MenuItem;
