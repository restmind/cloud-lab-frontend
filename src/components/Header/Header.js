import React from 'react';
import {StyledHeader, HeaderLogo, HeaderNavigation} from './Header.styled'

function Header(){
  return (
  < StyledHeader>
    <HeaderNavigation>
        <li>Home</li>
        <li>Catalog</li>
        <li>Cart</li>
    </HeaderNavigation>
  </StyledHeader>
  );
}


export default Header;