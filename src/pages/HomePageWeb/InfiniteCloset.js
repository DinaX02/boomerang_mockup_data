import React from 'react';
import styled from 'styled-components';
import closetImage from '../../assets/homepageweb/naturedress.jpg';

const ClosetContainer = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  /* justify-content: flex-start;  */
  width: 100%;
  margin-top: 8rem;
  padding: 0 300px;

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0 30px;
    margin-top: unset;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: unset;
    padding: 0 120px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 0 120px;
  }
`;

/*escrever quais sao as cookies que usamos, politica de cookies*/
const ClosetTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px; 
  font-size: 48px;
  font-weight: bold;
  margin-top: 8rem;
  max-width: 90%;

  @media (max-width: 1024px) {
    font-size: 30px;
    width: 100%;
    /* margin-top: 4rem; 
    font-size: calc(1.75rem + 3vw);
    max-width: 100%;
    padding: 1rem; */
  }
  @media (max-width: 1200px) {
    font-size: 35px;
  }
`;

const Highlight = styled.span`
  color: #00C17C; 
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
  /* padding: 0 100px; */
  padding-right: 80px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black; 
  line-height: 1.3;

  @media (max-width: 1200px) {
    padding-right: 0;
    padding-top: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 561px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-right: 50px;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 18px;
  }
`;

const Bolder = styled.span`
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  /* flex: 1; */
  text-align: right;

  @media (max-width: 1024px) {
    padding: 0;
    text-align: center;
  }
`;

const ClosetImage = styled.img`
  width: auto; 
  height: 45vh; 
`;

const InfiniteCloset = () => {
  return (
    <ClosetContainer>
      <ClosetTitle>
        Ter um armário infinito de forma sustentável? <Highlight>É possível!</Highlight>
      </ClosetTitle>
      <ContentContainer>
        <TextContent>
          <p>
            Ao escolher a <Bolder>Boomerang</Bolder>, estás a contribuir para um movimento que valoriza a moda de forma responsável. Cada peça conta a sua própria história, de um compromisso com um futuro mais sustentável.
          </p>
          <p>
            Tens uma peça de roupa parada no teu armário? Imagina agora poderes-lhe dar uma nova vida e rentabilizares o teu armário dessa forma. <br></br><Bolder>Gostas da ideia?</Bolder>
          </p>
        </TextContent>
        <ImageWrapper>
          <ClosetImage src={closetImage} alt="Sustentabilidade na moda" />
        </ImageWrapper>
      </ContentContainer>
    </ClosetContainer>
  );
};

export default InfiniteCloset;
