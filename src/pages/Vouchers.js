import React from "react";
import Header from "../components/Header/Header";
import Notification from "../components/Notification";
import styled from "styled-components";
import nothingimg from "../assets/menumobile/notificationsbtn.svg";
import { useSelector } from "react-redux";

const Vouchers = () => {
  const list = useSelector((state) => state.Rent.progressRentList);


  return (
    <div>
      <Header name="Cupões" />
      <VouchersDiv>
        {
      list!=="" ? 
      <Notification
      discount={"7%"}
      title={"Desconto Expirado"}
      sub={"Validade até: 10/01/2024"}
    ></Notification>

                 
              
           : (
            <div>
<div className="nothing">
<img src={nothingimg} alt="sem notificações"></img>
<h1>Ainda não tens cupões</h1>
</div>        </div>
          )}
      </VouchersDiv>
    </div>
  );
};


const VouchersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

.widthCorrection{
  width: 90vw !important;
}


.nothing {
    margin-top: 180px;
    text-align: center;

    img {
      width: 80px;
      margin-bottom: 20px;
    }

    p {
      color: var(--notch, #343541);
    }
  }
`;


export default Vouchers;
