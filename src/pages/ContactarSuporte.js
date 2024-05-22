import React, {useState} from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import Button from "../components/Button";
import iconOverlay from "../assets/icons/tick_iconOverlayFInal.svg";
import OverlayFinalPublish from "../components/OverlayFinalPublish";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;


  .textareaStyles{
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
    min-height: 170px;
  
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    /* Ocultar a seta para cima em navegadores Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }

  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const ContainerBtnSend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .pSend{
    color: #00000;
    margin-top: 1em;
    margin-bottom: 8px;
    font-weight: 600;
  }
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
  margin-top:1em;
`;

const MandatoryField = styled.span`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
`;

const ContactarSuporte = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();

    const isFormValid = () => {
      return nome.trim() !== '' && email.trim() !== '' && assunto.trim() !== '' && mensagem.trim() !== '';
    };

    const handleEnviar = () => {
        setPopupVisible(true);
    

        setTimeout(() => {
          setPopupVisible(false);
          navigate("/");
        }, 3000);
      };

      
  return (
    <div>
        <Header name="Contactar Suporte"/>
        <div>
        <Container>
      <ButtonWrapper>
      <InfoIconContainer>
          Nome
          <Asterisk>*</Asterisk>
        </InfoIconContainer>
        <InputContainer>
          <StyledInput
            type="text"
            placeholder="Ex: Maria do Carmo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </InputContainer>

        <InfoIconContainer>
          E-mail
          <Asterisk>*</Asterisk>
        </InfoIconContainer>
        <InputContainer>
          <StyledInput
            type="text"
            placeholder="Ex: mariadocarmo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <InfoIconContainer>
          Assunto
          <Asterisk>*</Asterisk>
        </InfoIconContainer>
        <InputContainer>
          <StyledInput
            type="text"
            placeholder="Ex: Artigo com defeito"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
        </InputContainer>


        <InfoIconContainer>
          Mensagem
          <Asterisk>*</Asterisk>
        </InfoIconContainer>
        <InputContainer>
          <textarea className='textareaStyles'
            placeholder="Apresentar os detalhes da situação"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </InputContainer>


        <MandatoryField>
          <Asterisk>*</Asterisk> Campo Obrigatório
        </MandatoryField>
      </ButtonWrapper>
    </Container>
    <ContainerBtnSend>
    <Button text="Enviar" disable={!isFormValid()} onClick={handleEnviar}/>
    {popupVisible && (
          <OverlayFinalPublish>
            <img src={iconOverlay} alt="Ícone de Publicação Concluída" />
            <p style={{ marginTop: "1em", color: "white" }}>Mensagem enviada com sucesso!</p>
          </OverlayFinalPublish>
        )}
    <p className='pSend'>Ou envia-nos um e-mail para:</p>
    <p>boomerang.commercial@gmail.com</p>
    </ContainerBtnSend>
        </div>
    </div>
  )
}

export default ContactarSuporte