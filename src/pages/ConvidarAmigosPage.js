import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import QRCode from "qrcode.react";
import IconWhatsapp from "../assets/icons/icon_whatsapp.svg";
// import IconInstagram from "../assets/icons/icon_instagram.svg"
import IconTwitter from "../assets/icons/icon_twitter.svg";
import IconFacebook from "../assets/icons/icon-facebook.svg";

const TituloPagina = styled.p`
  margin-top: 3em;
  font-size: 20px;
  font-weight: 800;
`;
const ContainerGeral = styled.div`
  padding: 0 24px;
`;
const ContainerAddAmigos = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1em;
  margin-top: 2.4em;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);

  .btnAddFriend {
    background-color: #c6f6e5;
    border: none;
    border-radius: 4px;
    padding: 0.8em;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  .btnAddFriend:active {
    background-color: #a4e9d8;
  }

  .tituloGreenContainer {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 0.3em;
  }

  .botaoPartilharRedes{
    border: none;
    background-color: transparent;
  }

  .tituloshare {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 0.3em;
    text-align: center;
  }
  .paraghContainerGreen {
    font-size: 14px;
  }

  .containerShareRedes {
    margin-top: 2em;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
  }

  .centrarQrCode {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;

const ConvidarAmigosPage = () => {
  const [qrCodeValue, setQRCodeValue] = useState("");

  useEffect(() => {
    const conviteLink = "https://boomerang.tdw-mctw.dev/";
    setQRCodeValue(conviteLink);
  }, []);

  const appLink = "https://boomerang.tdw-mctw.dev/";

  const shareOnWhatsapp = () => {
    const messageInLink = encodeURIComponent(
      "Recebeste um convite para entrar na Boomerang:"
    );
    const url = `https://api.whatsapp.com/send?text=${messageInLink}%20${appLink}`;
    window.open(url, "_blank");
  };

  // const shareOnInstagram = () => {
  //   const url = `https://www.instagram.com/?url=${appLink}`;
  //   window.open(url, '_blank');
  // };

  const shareOnTwitter = () => {
    const messageInLink = encodeURIComponent(
      "Junta-te à comunidade Boomerang:"
    );
    const url = `https://twitter.com/intent/tweet?url=${appLink}&text=${messageInLink}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${appLink}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <Header name="Convidar Amigos" />
      <ContainerGeral>
        <TituloPagina>Convida Amigos</TituloPagina>
        <p style={{ fontSize: "13px" }}>
          Agora já consegues convidar os teus amigos para a Boomerang!
        </p>

        <ContainerAddAmigos>
          <p className="tituloGreenContainer">Partilha o Código QR</p>
          <p className="paraghContainerGreen">
            Partilha com os teus amigos e ajuda a fazer crescer a comunidade
            Boomerang!
          </p>
          <div className="centrarQrCode">
            <QRCode value={qrCodeValue} />
          </div>
        </ContainerAddAmigos>

        <ContainerAddAmigos>
          <p className="tituloshare">Outras opções de partilha</p>
          <div className="containerShareRedes">
            <button className="botaoPartilharRedes">
            <img
              src={IconWhatsapp}
              alt="icon partilhar whatsapp"
              onClick={shareOnWhatsapp}
            /></button>
            {/* <img src={IconInstagram} alt='icon partilhar Instagram' onClick={shareOnInstagram}/> */}
            <button className="botaoPartilharRedes">
            <img
              src={IconTwitter}
              alt="icon partilhar Twitter"
              onClick={shareOnTwitter}
            /></button>
            <button className="botaoPartilharRedes">
            <img
              src={IconFacebook}
              alt="icon partilhar facebook"
              onClick={shareOnFacebook}
            /></button>
          </div>
        </ContainerAddAmigos>
      </ContainerGeral>
    </div>
  );
};

export default ConvidarAmigosPage;
