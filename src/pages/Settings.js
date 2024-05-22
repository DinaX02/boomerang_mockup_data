import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Header from "../components/Header/Header";
import Modal from "../components/Modal";

const Profile = () => {
  const [fecharModal, setFecharModal] = useState(true);

  useEffect(() => {
    // dar reset ao scroll quando se entrar aqui :)
    window.scrollTo(0, 0);
  }, []);

  const apagarContaHandler = () => {
    setFecharModal(false);
  }

  return (
    <div>
      <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        message="Tens a certeza que queres apagar a tua conta?"
        alert={true}
      />
      <Header name="Definições" />

      <ProfileStyle>

        <div className="icondiv">
          <Link to={"/edit-profile-page"}>
            <div className="iconitem">
              <div className="profiletext">
                <p>Editar perfil</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
          <hr></hr>
          <Link to={"/edit-email-page"}>
            <div className="iconitem">
              <div className="profiletext">
                <p>Alterar email</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
          <hr></hr>
          <div className="iconitem" onClick={apagarContaHandler}>
            <div className="profiletext">
              <p>Apagar conta</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
        </div>
      </ProfileStyle>
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
    width: 28px;
    height: 20px;
    margin-right: 30px;
    margin-left: 25px;
  }
  .seta {
    width: 18px;
    height: 15px;
    color: #5c5c5c;
  }

.profiletext{
  
  .username{
    font-weight: bold;
  }
  p{
    margin: 0;
  }
  text-align: left;
  width: 55%;
  margin-right: calc(30px + 28px + 30px + 1px); //conta para a distancia ficar igual à distancia com icone
  margin-left: 24px;
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
    margin-top: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
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
