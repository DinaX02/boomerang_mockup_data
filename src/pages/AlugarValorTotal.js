import React from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PreviewValorTotal from '../components/PreviewValorTotal';
import artigosJSON from "../data/artigos.json";
import {updateProgressRent} from "../redux/rentSlice";
import { useDispatch, useSelector } from 'react-redux';

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 25px;
`;


const ConfButton = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

const AlugarValorTotal = () => {
  const list = useSelector((state) => state.Rent.progressRentList);
    const dispatch = useDispatch();

    const dateFormat = "DD/MM/YYYY";

    const date1 = new Date(list.date[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
    const date2 = new Date(list.date[1].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));

    const difference = Math.abs(date2 - date1);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;

    const valor = artigosJSON[list.article_id-1].dailyRentalPrice * daysDifference;
    const taxa = parseFloat(((valor * 0.05) + 2).toFixed(2)) ;
    const extras = (list.detalhes[0] + list.detalhes[1]) === 1 ? 5 : (list.detalhes[0] + list.detalhes[1]) === 2 ? 0 : 10;
    const OpExtras = (((list.detalhes[0])===1) && (list.detalhes[1])===0) ? ["Transportadora Eco-friendly"] : (((((list.detalhes[0])===0) && (list.detalhes[1])===1)) ? ["Lavandaria Sustentável"] : ["Transportadora Eco-friendly","Lavandaria Sustentável"])
    const total = valor + taxa + extras;


        console.log(OpExtras)


  // console.log("lista updated",list)


  const navigate = useNavigate();

  const handleNextStep = () => {
      dispatch(updateProgressRent({ index: 0, updatedData: {total: total} }));
    navigate("/alugar-morada");
  };

    return (
        <div>
            <Header name="Valor Total" />
            <MainContainer>
                <PreviewValorTotal id={list.article_id} days={daysDifference} taxa={taxa} valor={valor} total={total} extras={extras} OpExtras={OpExtras}/>

                    <ConfButton>
               <Button onClick={handleNextStep} text="Continuar"/>
                    </ConfButton>


                
            </MainContainer>
        </div>
    );
};

export default AlugarValorTotal;