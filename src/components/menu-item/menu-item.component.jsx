import React from 'react';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubTitle  } from './menu-item.styles';
/* import './menu-item.styles.scss';
 */
const MenuItem = ({ title, imageUrl, size = 1 }) => (
  <MenuItemContainer size={size}>
    <BackgroundImageContainer imageUrl={imageUrl}/>
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>SHOP NOW</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default MenuItem;
