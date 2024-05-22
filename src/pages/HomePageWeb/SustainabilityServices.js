import React from 'react';
import styled from 'styled-components';
import sustainabilityImage from '../../assets/homepageweb/planetcare-23coWmkTNSg-unsplash.jpg';

const ServicesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  margin-top: 8rem;
  padding: 0 300px;
  margin-bottom: 100px;
  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0 30px;
    margin-top: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: 2rem;
    padding: 0 120px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 0 120px;
  }
  @media (max-width: 1200px) {
    margin-bottom: 0;
  }
`;

const ServicesTitle = styled.h2`
  text-align: center;
  padding: 50px 100px 0 100px; 
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 30px;
    padding: 25px 16px;
  }
  @media (max-width: 1200px) {
    font-size: 35px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0; 
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 80px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black;
  max-width: 700px;
  line-height: 1.3;
  z-index: 1;
  @media (max-width: 1024px) {
    padding-right: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
      padding-right: 50px;
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
    @media (max-width: 1024px) {
      font-size: 16px;
      max-width: 561px;
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%; 
    /* font-size: calc(0.625rem + 2vw); */
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  /* flex: 1;
  padding-right: 0; */
  text-align: center;
`;

const ServicesImage = styled.img`
    width: auto; 
    height: 45vh;
`;

const DownloadButton = styled.button`
  padding: 8px 16px; 
  /* width: 200px;  */
  min-width: 150px; 
  font-size: 16px; 
  font-weight: bold;
  color: #FFFFFF;
  background-color: #00C17C;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  z-index: 20;
  /* margin-top: 2vw;  */
  /* margin-left: 100px; */
  margin: 0 25px;

  @media (max-width: 1024px) {
    /* font-size: calc(1.8vw + 10px);  */
    /* padding: 1vw;  */
  }

  @media (max-width: 1200px) {
    /* font-size: calc(3vw + 10px);  */
    /* padding: 4vw;  */
    margin-top: 15px; 
    /* margin-left: 10vw;  */
    /* min-width: 120px;  */
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 100px;
  margin-top: 15px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 0; 
  }
  @media (max-width: 1200px) {
    margin-bottom: 70px; 
  }
`;

const SustainabilityServices = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Serviços de sustentabilidade</ServicesTitle>
      <ButtonContainer>
        <DownloadButton>Lavandaria sustentável</DownloadButton>
        <DownloadButton>Transportadora <i>Eco-friendly</i></DownloadButton>
      </ButtonContainer>
      <ContentContainer>
        <ImageContainer>
          <ServicesImage src={sustainabilityImage} alt="Lavandaria sustentável" />
        </ImageContainer>
        <TextContent>
          <h3>Lavandaria Sustentável</h3>
          <p>
            A nossa plataforma oferece uma opção de <BoldText>lavandaria sustentável</BoldText>. Esta opção contribui para um ambiente mais sustentável, pois oferecemos um serviço útil, a baixo custo e com poupança de água e detergentes bio e próprios a cada tipo de roupa, até mesmo o serviço de secagem próprio e ecológico.
          </p>
        </TextContent>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default SustainabilityServices;
