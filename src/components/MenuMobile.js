import React, { useState } from "react";
import publicarbtn from "../assets/menumobile/publicarbtn.svg";
import homebtn from "../assets/menumobile/homebtn.svg";
import searchbtn from "../assets/menumobile/searchbtn.svg";
import notificationsbtn from "../assets/menumobile/notificationsbtn.svg";
import profilebtn from "../assets/menumobile/profilebtn.svg";
import homebtnG from "../assets/menumobile/homebtnG.svg";
import searchbtnG from "../assets/menumobile/searchbtnG.svg";
import notificationsbtnG from "../assets/menumobile/notificationsbtnG.svg";
import profilebtnG from "../assets/menumobile/profilebtnG.svg"
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import menumobile from "../assets/menumobile/menumobile.svg"

const MenuMobile = () => {
  const location = useLocation();
  const [page] = useState(location.pathname.replace("/", ""));
  let homebtnsrc = homebtn;
  let searchbtnsrc = searchbtn;
  let notificationsbtnsrc = notificationsbtn;
  let profilebtnsrc = profilebtn;

  switch (page) {
    case "":
      homebtnsrc = homebtnG;
      break;
    case "search-page":
      searchbtnsrc = searchbtnG;
      break;
    case "notifications-page":
      notificationsbtnsrc = notificationsbtnG;
      break;
    case 'profile-page':
       profilebtnsrc=profilebtnG;
    break
    default:
      homebtnsrc = homebtn;
      searchbtnsrc = searchbtn;
      notificationsbtnsrc = notificationsbtn;
      profilebtnsrc = profilebtn;
  }


  return (
    <MenuMobileDiv>
      <Link to={"/publicar-page"}>
        <PublicarBtn src={publicarbtn} alt="publicar" />
      </Link>

      <MenuMobileBtns>
        <Link to={"/"}>
          <img src={homebtnsrc} alt="home" />
        </Link>
        <Link to={"/search-page"}>
          <img src={searchbtnsrc} alt="pesquisar" />
        </Link>
      </MenuMobileBtns>

      <span></span>

      <MenuMobileBtns>
        <Link to={"/notifications-page"}>
          <img
            src={notificationsbtnsrc}
            alt="notificações"
          />
        </Link>
        <Link to={"/profile-page"}>
          <img src={profilebtnsrc} alt="perfil" />
        </Link>
      </MenuMobileBtns>
    </MenuMobileDiv>
  );
};

const MenuMobileDiv = styled.div`
height: 105px;
position: fixed;
bottom: -5px;
background-image: url(${menumobile});
background-size: cover;
background-repeat: no-repeat;
overflow-x: hidden;
background-position: bottom center;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
span{
  width: 90px;
}


@media only screen and (min-width: 600px) {
  display: none;
}
`

const PublicarBtn = styled.img`
height: 105px;
position: fixed;
bottom: 10px;
transform: translate(calc(50vw - 50%));
`

const MenuMobileBtns = styled.div`
  a{
    transform: scale(1.2);
  }
display: flex;
flex-direction: row;
align-items: center;
height: 100%;
width: 50%;
padding-top: 10px;
justify-content: space-evenly;

`


export default MenuMobile;
