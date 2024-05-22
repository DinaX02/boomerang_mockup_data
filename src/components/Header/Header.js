import React from "react";
import arrowBack from "../../assets/icons/back_arrow.svg"
import "./../components.css";
import { useNavigate } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import styled from "styled-components";

const ButtonForKeyBoard = styled.button`
background-color: transparent;
border: none;

`


const Header = (props) => {
  const navigate = useNavigate();
  let name = props.name;

  if (!props.name) {
    name = "Página desconhecida"
  }

  const handleGoBack = () => {
    props.alertHandler ? props.alertHandler() : navigate(-1); // voltar para trás
  };

  return (
    <header className="headerBoomerang">
      <ButtonForKeyBoard onClick={handleGoBack} >
        <img
          data-testid="svg-icon"
          src={arrowBack}
          style={{ cursor: "pointer" }}
          alt="seta para voltar à página anterior" />
      </ButtonForKeyBoard>
      <h1 style={{ fontSize: "16px", marginBottom: "0" }}>{name}</h1>
      {props.share && <IconRight src={share} />}
    </header>
  );
};

const IconRight = styled.img`
position: absolute;
right: 0;
margin-right: 24px;
`
export default Header;
