import React from 'react';
import styled from 'styled-components';
import friendsImage from '../../assets/homepageweb/2girls.jpg'

const KnowMoreContainer = styled.div`
  display: flex;
  align-items: center; 
  /* justify-content: flex-start;  */
  width: 100%;
  margin-top: 8rem;
  padding: 0 300px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0 30px;
    margin-top: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    /* flex-direction: column; */
    margin-top: 2rem;
    padding: 0 120px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 0 120px;
  }
`;

const ImageWrapper = styled.div`
  /* flex: 1; */
  /* max-width: 50%; */
  text-align: center;
  img {
    width: auto; 
    height: 45vh;
  }

  @media (max-width: 1024px) {
    /* max-width: 100%; */
  }
`;

const TextContent = styled.div`
  /* flex: 1; */
  /* max-width: 45%; */
  font-size: 20px;
  font-weight: 400;
  color: black;
  line-height: 1.3;
  padding-left: 80px;
  @media (max-width: 1024px) {
    padding-left: 0;
  }

  @media (max-width: 1200px) {
    max-width: 561px;
    /* padding: 1rem; */
    font-size: 16px;
    padding: 0;
    padding-top: 20px;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-left: 50px;
  }
    @media (min-width: 1200px) and (max-width: 1400px) {
      font-size: 18px;
    }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const KnowMoreHere = () => {
  return (
    <KnowMoreContainer>
      <ImageWrapper>
        <img src={friendsImage} alt="Felizes com a sustentabilidade de roupas alugadas" />
      </ImageWrapper>
      <TextContent>
        <p>Agora imagina ao invés de comprares uma peça de roupa nova, gastares esse dinheiro para usares, à priori, apenas num evento específico, alugares uma peça que está sem uso, poderes desta forma ir a esse evento com charme e dando uma nova vida a essa peça de roupa?! Esta opção também te encanta?</p>
        <p><Bold>Descobre mais como o podes fazer acedendo à nossa página num formato mobile ou instalando a nossa app.</Bold></p>
      </TextContent>
    </KnowMoreContainer>
  );
};

export default KnowMoreHere;
