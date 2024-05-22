import React from "react";
import MenuMobile from "../components/MenuMobile.js";
import Notification from "../components/Notification.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TabsComponent from "../components/TabsComponent";
import ChatLink from "../components/ChatLink";
import { useSelector } from "react-redux";
import nothingimg from "../assets/icons/zeroNotifications.svg"
import artigosJSON from "../data/artigos.json"

const Notifications = () => {
  const list = useSelector((state) => state.Rent.progressRentList);

  return (
    <div>
      <NotificationsPage>
        <TabsComponent
          title1={"Notificações"}
          firstComponent={
            list != "" ?
              <div>
                <Link className={"vouchers"} to={"/rentdetails-page"}>
                  <Notification
                    image={artigosJSON[list.article_id - 1].images[0]}
                    title={"Alugou o seu primeiro item!"}
                    sub={"Estamos a espera que seja confirmado."}
                  ></Notification>
                </Link>

                <Link className={"vouchers expirado"} to={"/vouchers-page"}>
                  <Notification
                    discount={"7%"}
                    title={"Desconto Expirado"}
                    sub={"Validade até: 10/01/2024"}
                  ></Notification>
                </Link>
              </div>


              : (
                <div className="nothing">
                  <img src={nothingimg} alt="sem notificações"></img>
                  <p className="noNotificationsText">Ainda não tens notificações</p>
                </div>
              )
          }
          title2={"Chat"}
          secondComponent={
            <div className={'chatList'}>
              <ChatLink index={20} />
            </div>
          }
        />

        <MenuMobile></MenuMobile>
      </NotificationsPage>
    </div>
  );
};

const NotificationsPage = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  padding-bottom: 115px;

  .vouchers {
    text-decoration: none;
    color: #212529;
  }

  .nothing {
    /* margin-top: 180px; */
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
      width: 80px;
      /* margin-bottom: 20px; */
    }

    p {
      color: var(--notch, #343541);
    }
  }
  .chatList{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .noNotificationsText{
    font-weight: 500;
    /* font-size: 18px; */
    width: max-content;
    margin-top: 1em;
  }
  
`;

export default Notifications;
