import React, { useState } from "react";
import Header from "../components/Header/Header";
import PreviewCard from "../components/PreviewCard";
// import MenuMobile from '../components/MenuMobile'
import styled from "styled-components";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AvaliacaoDefault from "../assets/icons/estrela_avaliar_default.svg";
import AvaliacaoSelected from "../assets/icons/estrela_avaliar_selected.svg";
import InfoIcon from "../assets/icons/infoIcon.svg";
import iconOverlay from "../assets/icons/tick_iconOverlayFInal.svg";
import OverlayFinalPublish from "../components/OverlayFinalPublish";
import { Link } from "react-router-dom";

const AvaliarAluguerPage = () => {
  const list = useSelector((state) => state.Rent.progressRentList);
  const navigate = useNavigate();

  // Estado inicial
  const [selectedStars, setSelectedStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showOverlayAvaliar, setShowOverlayAvaliar] = useState(false);

  // mudar a star de default para selected e vice-versa
  const handleStarClick = (index) => {
    const newSelectedStars = selectedStars.map((selected, i) =>
      i <= index ? true : false
    );
    setSelectedStars(newSelectedStars);
    setIsButtonDisabled(false);
  };

  const handleAvaliar = () => {
    setShowOverlayAvaliar(true);
    setTimeout(() => {
      setShowOverlayAvaliar(false);
      navigate("/");
    }, 2000);
  };
  return (
    <div>
      <Header name="Avaliar Aluguer" />
      <ContainerAvaliarPage>
        <PreviewCard id={list.article_id} valor={list.total} />
        <hr></hr>
        <h1>Avaliar Aluguer</h1>
        <p>Partilha a tua opinião com outras pessoas</p>
        <div className="containerAvaliacaoEstrelas">
          {selectedStars.map((selected, index) => (
            <img
              key={index}
              src={selected ? AvaliacaoSelected : AvaliacaoDefault}
              alt={`estrela de avaliar ${
                selected ? "selecionada" : "por selecionar"
              }`}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>

        <div className="containerContactarPromotor">
          <button>Contactar mariacarmo</button>

          {/* <div className='helpersLinks'><img src={InfoIcon}/><p>O que fazer caso a peça não chegar a tempo</p></div> */}
          <div style={{ marginTop: "1em" }} className="helpersLinks">

            {/* <img src={InfoIcon} alt="icon de informação" /> */}
           <Link to={"/faq-perguntas-frequentes"}><p>Perguntas Frequentes</p></Link> 
          </div>

          <p style={{marginLeft: "0.5em"}}>Outras opções</p>

          {/* <div className="helpersLinks">
            <img src={InfoIcon} alt="icon de informação" />
            <p>Ajuda</p>
          </div> */}

          <div className="helpersLinks">
            {/* <img src={InfoIcon} alt="icon de informação" /> */}
            <Link to={"/contactar-suporte"}><p>Contactar Suporte</p></Link>
          </div>
        </div>

        <ContainerBtnConcluir>
          <Button
            text="Concluir"
            onClick={handleAvaliar}
            disable={isButtonDisabled}
          />
        </ContainerBtnConcluir>
      </ContainerAvaliarPage>
      {showOverlayAvaliar && (
        <OverlayFinalPublish>
          <img
            style={{ marginTop: "1em" }}
            src={iconOverlay}
            alt="Icone de Publicar acabado"
          />
          <p style={{ marginTop: "1em", color: "white" }}>
            Aluguer Avaliado com sucesso!
          </p>
        </OverlayFinalPublish>
      )}
      {/* <MenuMobile/> */}
    </div>
  );
};

export default AvaliarAluguerPage;

const ContainerAvaliarPage = styled.div`
  padding: 25px 25px 0px;

  hr {
    margin-top: 2em;
    margin-bottom: 2em;
  }

  h1 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 0.3em;
  }

  p {
    font-size: 14px;
  }

  .containerAvaliacaoEstrelas {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: right;
    margin-top: 1.5em;
    margin-bottom: 2.2em;
  }

  .containerAvaliacaoEstrelas img {
    margin-right: auto;
    margin-left: 0;
  }

  .containerContactarPromotor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 1em;
    // margin-top: 2.4em;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);

    button {
      border: 2px solid #00c17c;
      border-radius: 5px;
      background-color: #fff;
      padding: 0.6em;
      font-weight: bold;
      color: #00c17c;
      font-size: 14px;
      width: 100%;
      margin-bottom: 1em;

      &:active {
        background-color: #f8f8f8;
      }
    }

    .helpersLinks {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 0.5em;

      p {
        margin-left: 0.5em;
        margin-bottom: 0;
        text-decoration: underline;
      }

      a {
        color: black;
      }
    }
  }
`;

const ContainerBtnConcluir = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.7em;
`;

const BtnInfo = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

