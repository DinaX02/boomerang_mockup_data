import React from 'react';
import styled from 'styled-components';
import LogoBoomerang from "../../assets/homepageweb/logo-white.svg";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #252525;
  padding: 10px 5%;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 10px 2%; 
    box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-right: 15px;

  @media (max-width: 768px) {
    height: 35px; 
  }
`;

const BrandName = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo src={LogoBoomerang} alt="icon Boomerang" />
      <BrandName>Boomerang</BrandName>
    </StyledNavbar>
  );
};

export default Navbar;
