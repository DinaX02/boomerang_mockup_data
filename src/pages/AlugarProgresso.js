import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Button from "../components/Button";
import IconProgresso from "../assets/icons/icon_progresso.png";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  margin: 50px 0 0 0;
  width: 100%;
  height: 80vh;
  padding: 25px 30px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;

  .conteudo {
    width: 100%;
    display: block;
    text-align: center;
  }
  .conteudo img {
    margin-bottom: 20px;
  }
  .conteudo h2 {
    font-weight: 600;
    font-size: 20px;
  }
  .conteudo p {
    font-size: 14px;
    margin: 0;
    line-height: 22px;
  }
`;

const AlugarProgresso = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Header name=" " />
      <MainContainer>
        <div className="conteudo">
          <img src={IconProgresso} alt="icon"></img>
          <h2>Está quase.</h2>
          <p>
            Só falta o responsável aceitar o pedido de aluguer. Irás receber uma
            notificação assim que recebermos resposta.
          </p>
        </div>
        <div>
          <Button text="Concluir" onClick={() => navigate("/")}/>
        </div>
      </MainContainer>
    </div>
  );
};

export default AlugarProgresso;
