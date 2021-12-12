import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  background-color: black;
  justify-content: space-around;
  color: white;
`;  

export const HeaderLogo = styled.h1`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;  

export const HeaderNavigation = styled.ul`
  height: 60px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-weight: 200;
  background: none;
  padding: 19px 0;
  margin:0;
  
  > li{
  margin: 0 100px;
  color: #AFB1BD;
  }
`;  