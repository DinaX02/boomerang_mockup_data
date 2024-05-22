import React from 'react'
import Header from '../components/Header/Header'
import PreviewCard from '../components/PreviewCard'
// import MenuMobile from '../components/MenuMobile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const RentDetails = () => {
  const list = useSelector((state) => state.Rent.progressRentList);

  const lavagens = [
'Lavandaria Sustentável', 'Lavagem feita pelo utilizador'
];
const transportes = [
'Transportadora Eco-Friendly', 'Transporte a cargo do utilizador'
];

  return (
    <div>
        <Header name="Detalhes do Aluguer"/>
        <div style={{padding: '25px 25px 0 25px'}}>
        <PreviewCard id={list.article_id} valor={list.total}/>
        </div>
        <RentDetailsDiv>
        <Link to={"/avaliar-aluguer"}><AvaliarBtn>Avaliar Aluguer</AvaliarBtn></Link>
        <Titles>Estado do Aluguer:</Titles>
        <Info>Aguarda Confirmação</Info>
        <hr></hr>
        <Titles>Data:</Titles>
        <Info>{list.date[0]} - {list.date[1]}</Info>
        <hr></hr>
        <Titles>Detalhes:</Titles>
        <Info><li>{lavagens[list.detalhes[0]]}</li>
        <li>{transportes[list.detalhes[1]]}</li></Info>
        <hr></hr>
        <Titles>Morada:</Titles>
        <Info>{list.morada}</Info>
        <hr></hr>
        <Titles>Método de Pagamento:</Titles>
        <Info>{list.pagamento}</Info>

        

        </RentDetailsDiv>
        {/* <MenuMobile/> */}
    </div>
  )
}

const RentDetailsDiv= styled.div`
width: 85vw;
margin: 30px auto 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
hr{
    margin-bottom: 20px;
    margin-top: 5px;
}

padding-bottom: 100px;
`
const AvaliarBtn = styled.button`

  border: 2px solid #00C17C;
  border-radius: 5px;
  background-color:#FFF;
  padding: 0.6em;
  font-weight: bold;
  color:#00C17C;
  font-size: 14px;
  width: 100%;
  margin-bottom: 2.5em;

  &:active {
    background-color: #F8F8F8;
}
`

const Info = styled.p`
font-size: 0.8rem;
font-weight: 500;
line-height: 20px;
`

const Titles = styled.h2`
font-size: 1rem;
font-weight: 600;
line-height: 15px;
`

export default RentDetails