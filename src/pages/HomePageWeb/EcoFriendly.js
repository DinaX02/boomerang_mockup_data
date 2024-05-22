import React from 'react';
import styled from 'styled-components';
import ecofriendlyImage from '../../assets/homepageweb/chuttersnap-xJLsHl0hIik-unsplash.jpg';

const EcoFriendlyContainer = styled.div`
  display: flex; 
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: black;
  margin-top: 8rem;
  padding: 0 300px;

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0 30px;
    margin-top: 4rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    height: unset; 
    margin-top: 4rem;
    padding: 0;
    padding: 0 120px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 0 120px;
  }
  @media (max-width: 1200px) {
    margin-bottom: 70px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-left: 80px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black; 
  max-width: 700px; 
  line-height: 1.3; 
  z-index: 1;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
  }

  h3{
    margin-bottom: 80px;
    font-weight: 600;
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
    @media (max-width: 1024px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    }
    @media (max-width: 1200px) {
      font-size: 20px;
    }
    @media (min-width: 1200px) {
      font-size: 20px;
    }
  }

  p{
    @media (max-width: 1200px) {
    font-size: 16px;
    max-width: 561px;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    /* padding: 1rem; */
    padding: 0;
    max-width: 100%; 
    /* font-size: calc(0.625rem + 2vw); */
  }
`;

const BolderItalicText = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const ImageWrapper = styled.div`
  /* flex: 1; */
  text-align: center;
`;

const EcoImage = styled.img`
  width: auto; 
  height: 45vh;
`;

const EcoFriendly = () => {
  return (
    <EcoFriendlyContainer>
      <ContentContainer>
        <ImageWrapper>
          <EcoImage src={ecofriendlyImage} alt="Transporte Sustentável" />
        </ImageWrapper>
        <TextContent>
          <h3>Transporte <i>Eco-friendly</i></h3>
          <p>Transporte <BolderItalicText>eco-friendly</BolderItalicText>? Também temos! Com este serviço, tens a peça desejada mais perto de ti e sabes que estás a contribuir também para o não aumento das emissões de carbono com um transporte 100% elétrico.</p>
        </TextContent>
      </ContentContainer>
    </EcoFriendlyContainer>
  );
};

export default EcoFriendly;
