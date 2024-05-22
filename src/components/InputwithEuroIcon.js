import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  padding: 12px 20px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Ocultar a seta para cima em navegadores Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  
`;

const EuroSymbol = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
`;

const Asterisk = styled.span`
  color: #00c17c;
  margin-left: 5px;
  margin-right: 5px;
`;

const InfoIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  margin-bottom: 1rem;
`;

const MandatoryField = styled.span`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
`;

const InputWithEuroIcon = (props) => {
  const infoName = props.infoName;
  const inputPlaceholderr = props.inputPlaceholderr;

  return (
    <Container>
      <ButtonWrapper>
        <InfoIconContainer>
          {infoName}
          <Asterisk>*</Asterisk>
        </InfoIconContainer>
        <InputContainer>
          <StyledInput
            type="number"
            placeholder={inputPlaceholderr}
            value={props.value}
            onChange={props.onChange}
          />
          <EuroSymbol>€</EuroSymbol>
        </InputContainer>
        <MandatoryField>
          <Asterisk>*</Asterisk> Campo Obrigatório
        </MandatoryField>
      </ButtonWrapper>
    </Container>
  );
};

export default InputWithEuroIcon;
