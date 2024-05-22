import React, { useState, useEffect } from "react";
import PreviewCard from "../components/PreviewCard";
import Header from "../components/Header/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProgressRent } from "../redux/rentSlice";
import { useNavigate, useParams } from "react-router-dom";
import artigosJSON from "../data/artigos.json";

const RentDate = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const progressRentList = useSelector((state) => state.Rent.progressRentList);

  useEffect(() => {
    const date1 = dateRange[0];
    const date2 = dateRange[1];
    const difference = Math.abs(date2 - date1);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    const dailyRentalPrice = artigosJSON[id-1].dailyRentalPrice
    const valor = dailyRentalPrice * daysDifference;
    // const taxa = parseFloat(((valor * 0.05) + 2).toFixed(2));
    const taxa = 0;
    const newTotal = valor + taxa;
    setTotal(newTotal);
  }, [dateRange, progressRentList, id]);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    return date;
  }

  const handleDateChange = (value) => {
    setDateRange(value);
    setButtonDisable(true);
  };

  const sendDates = () => {
    const formattedDates = dateRange.map(date => date.toLocaleDateString('pt-PT'));
    const rentData = { article_id: id, date: formattedDates, total };
    dispatch(addProgressRent(rentData));
    navigate("/alugar-detalhes");
  };

  return (
      <RentDateDiv>
        <Header name="Período de Aluguer"/>
        <div className="content">
          <PreviewCard id={id} valor={total} />
          <p className="info">Seleciona o primeiro e o último dia de aluguer</p>
          <Calendar
              onChange={handleDateChange}
              value={dateRange}
              selectRange={true}
              minDate={formatDate(Date())}
          />
          <Button text="Continuar" disable={!buttonDisable} onClick={sendDates}></Button>
        </div>
      </RentDateDiv>
  );
};

const RentDateDiv = styled.div`
  .content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    font-size: 13px;
    margin-bottom: -18px;
    margin-top: 50px;

    @media only screen and (max-width: 400px) {
    font-size: 14px;
 }
      
  }
`;

export default RentDate;
