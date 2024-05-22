import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import mariacarmo from "../assets/icons/user_unknown.svg"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import PersonAddOutlinedIcon from '../assets/icons/profile/invite.svg';
import CheckroomOutlinedIcon from '../assets/icons/profile/closet.svg';
import FavoriteBorderOutlinedIcon from '../assets/icons/profile/favorite.svg';
import ShoppingBasketOutlinedIcon from '../assets/icons/profile/encomendas.svg';
import LocalOfferOutlinedIcon from '../assets/icons/profile/cupoes.svg';
import SettingsOutlinedIcon from '../assets/icons/profile/settings.svg';
import DescriptionOutlinedIcon from '../assets/icons/profile/termos.svg';
import PrivacyTipOutlinedIcon from '../assets/icons/profile/privacidade.svg';
import CardGiftcardIcon from '../assets/icons/profile/gift.svg';
import Sobrenos from '../assets/icons/sobrenos.svg';
import Button from "../components/Button";

const Profile = () => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  useEffect(() => {
    // dar reset ao scroll quando se entrar aqui :)
    window.scrollTo(0, 0);
  }, []);

  let bio =
    "Sou apaixonada por moda e tenho sempre em conta opções mais sustentáveis no meu dia-a-dia.";

  return (
    <div>
      <ProfileStyle>
        <Link className="namediv" to={"/edit-profile-page"}>
          <div className="profileimg"></div>
          <div className="profiletext fontsizeadjust">
            <h1 className="username">mariacarmo</h1>
            <p>{bio.substring(0, 22) + "..."}</p>
          </div>

          <ArrowForwardIosRoundedIcon className="setaprofile"></ArrowForwardIosRoundedIcon>
        </Link>
        <p className="title">Atividade</p>

        <div className="icondiv">
          <Link to={"/convidar-amigos"}>
            <div className="iconitem">
              <img
                src={PersonAddOutlinedIcon}
                alt="convidar amigos"
                className="icon"
              ></img>
              <div className="profiletext">
                <p>Convidar Amigos</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
          <hr></hr>
          <div className="iconitem">
            <img
              src={CheckroomOutlinedIcon}
              alt="armário"
              className="icon"
            ></img>
            <div className="profiletext">
              <p>Armário</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <img
              src={FavoriteBorderOutlinedIcon}
              alt="favoritos"
              className="icon"
            ></img>
            <div className="profiletext">
              <p>Favoritos</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <img
              src={ShoppingBasketOutlinedIcon}
              alt="histórico de encomendas"
              className="icon"
            ></img>
            <div className="profiletext">
              <p>Histórico de encomendas</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <Link to={"/vouchers-page"}>
            <div className="iconitem">
              <img
                src={LocalOfferOutlinedIcon}
                alt="cupões"
                className="icon"
              ></img>
              <div className="profiletext">
                <p>Cupões</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
          <hr></hr>
          <Link to={"/recompensas"}>
            <div className="iconitem">
              <img
                src={CardGiftcardIcon}
                alt="recompensas"
                className="icon"
              ></img>
              <div className="profiletext">
                <p>Recompensas</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
        </div>
        <p className="title">Definições</p>

        <div className="icondiv">
          <Link to={"/settings-page"}>
            <div className="iconitem">
              <img
                src={SettingsOutlinedIcon}
                alt="definições"
                className="icon"
              ></img>
              <div className="profiletext">
                <p>Definições</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
          <hr></hr>
          <div className="iconitem">
            <img
              src={DescriptionOutlinedIcon}
              alt="termos e condições"
              className="icon"
            ></img>
            <div className="profiletext">
              <p>Termos e Condições</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <img
              src={PrivacyTipOutlinedIcon}
              alt="política de privacidade"
              className="icon"
            ></img>
            <div className="profiletext">
              <p>Política de Privacidade</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <Link to={"/sobre-nos"}>
          <div className="iconitem">
            <img src={Sobrenos} alt="sobre nós" className="icon"></img>
            <div className="profiletext">
              <p>Sobre Nós</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          </Link>
        </div>
        <div className="sair" onClick={handleClickLogout}>
          {/* <Button text="Terminar Sessão" /> */}
          <p>Terminar Sessão</p>
        </div>
      </ProfileStyle>
      <MenuMobile></MenuMobile>
    </div>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 120px;

  a {
    color: black;
    text-decoration: none;
  }

  .setaprofile {
    width: 20px;
    color: #5c5c5c;
  }
  .fontsizeadjust {
    font-size: 14px;
  }
  .icon {
    width: 20px;
    /* height: 20px; */
    margin-right: 20px;
    margin-left: 25px;
  }
  .seta {
    width: 18px;
    height: 15px;
    margin-left: 20px;
    color: #5c5c5c;
  }

  .sair {
    //   background-color: #343541;
    //   color: white;
    // font-weight: bold;
    //   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    //   border-radius: 10px;
    //   font-size: 14px;
    margin: 20px 0 0 24px;
    display: flex;
    /* align-self: flex-start; */
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
    // height: 40px;
    // padding: 0 30px 0 30px;
  }

  // .sair:active{
  //     background-color: #00C17C;
  //   }

.namediv{
  margin-left: 24px;
margin-right: 24px;
  margin-top: 25px;
  height: 90px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  align-items: center;

}
.profileimg{
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 1px black solid;
  background-image: url(${mariacarmo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  margin-right: 18px;
  margin-left: 15px;
}
.profiletext{
  .username{
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
  p{
    margin: 0;
  }
  text-align: left;
  width: 55%;
  margin-right: 30px;
}

  .title {
    margin-top: 35px;
    font-weight: bold;
    padding-left: 25px;
    font-size: 14px;
    font-weight: bold;
  }

  .icondiv {
    margin-left: 24px;
    margin-right: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
    hr{
      color: #cacaca;
    }
  }

  .iconitem {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default Profile;
