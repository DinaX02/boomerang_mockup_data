import React from 'react';
import styled from "styled-components";
import DropdownIcon from "../assets/dropdownicon.svg";

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para column */
  align-items: center; /* Adicionado para centralizar na coluna */
  width: 100%;
  margin-bottom: 24px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 20px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  width: 100%; 
`;

const Asterisk = styled.span`
  color: #00C17C;
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledDropdownIcon = styled.img`
  width: 16px;
  height: auto;
`;

const MandatoryField = styled.span`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
`;

const ButtonWithMandatoryField = (props) => {
  const btnName = props.btnName;

  return (
    <Container>
      <ButtonWrapper>
        <StyledButton>
          <span>{btnName} <Asterisk>*</Asterisk></span>
          <StyledDropdownIcon src={DropdownIcon} alt="Dropdown Icon" />
        </StyledButton>
        <MandatoryField><Asterisk>*</Asterisk> Campo Obrigatório</MandatoryField>
      </ButtonWrapper>
    </Container>
  );
}

export default ButtonWithMandatoryField;