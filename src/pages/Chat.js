import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PhotoCameraBackRoundedIcon from "@mui/icons-material/PhotoCameraBackRounded";
import arrowBack from "../assets/icons/back_arrow.svg";
import userMockupImage from "../assets/perfil/user_mockup_image.jpg";
import EliminarImage from "../assets/icons/eliminar.svg";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Boa noite?", sender: "user" },
    { text: "Boa noite, em que posso ajudar?", sender: "other_user" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectImages, setSelectImages] = useState("");
  const [imagePreviewBeforeSend, setImagePreviewBeforeSend] = useState(null);
  const [viewImage, setViewImage] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "" || selectImages) {
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: "user",
          selectImages: selectImages ? URL.createObjectURL(selectImages) : null,
        },
      ]);
      setNewMessage("");
      setSelectImages(null);
      setImagePreviewBeforeSend(null);
    }
  };

  const handleSendImage = (e) => {
    setSelectImages(e.target.files[0]);
    setImagePreviewBeforeSend(URL.createObjectURL(e.target.files[0]));
  };

  const handleRemoveImagePreview = () => {
    setSelectImages(null);
    setImagePreviewBeforeSend(null);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  return (
    <ChatStyle>
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className={"headerBoomerang"}>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={"back"}
        >
          <img
            data-testid="svg-icon"
            src={arrowBack}
            style={{ cursor: "pointer" }}
            alt="seta para voltar à página anterior"
          />
        </div>
        <div className={"userDetails"}>
          <img
            className={"userImage"}
            src={userMockupImage}
            alt="imagem de perfil do utilizador"
          />
          <div>maria_carmo</div>
        </div>
      </div>
      <div className={"chatMessages"}>
        {messages.map((message, index) => (
          <Message key={index} $sender={message.sender}>
            {message.text}
            {message.selectImages && (
              <img
                src={message.selectImages}
                alt="imagem selecionada"
                className="messageImage"
                onClick={() => openImageView(message.selectImages)}
              />
            )}
          </Message>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className={"inputBox"}>
        <ImagePreviewContainer>
          {imagePreviewBeforeSend && (
            <ImagePreview>
              <ImagePreviewImg
                src={imagePreviewBeforeSend}
                alt="imagem selecionada"
              />

              <RemoveImageButton
                type="button"
                onClick={handleRemoveImagePreview}
              >
                <img src={EliminarImage} alt="Eliminar imagem selecionada" />
              </RemoveImageButton>
            </ImagePreview>
          )}
        </ImagePreviewContainer>
        <form className={"chatInput"} onSubmit={handleSendMessage}>
          <input
            type="text"
            maxLength="256"
            aria-label="Caixa de texto para escrever uma mensagem"
            placeholder="Escreve uma mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <label className="labelcolor" htmlFor="imageInput">
            <PhotoCameraBackRoundedIcon />
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleSendImage}
            style={{ display: "none" }}
          />
          <button type="submit" onClick={handleSendMessage} aria-label="Enviar Mensagem">
            <SendRoundedIcon />
          </button>
        </form>
      </div>
    </ChatStyle>
  );
};

const ImageViewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ImageView = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  max-width: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 0.6em;
`;

const ImagePreview = styled.div`
  position: relative;
  margin-right: 0.5rem;
  display: inline-block;
`;

const ImagePreviewImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 0.5rem;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 0.8em;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 4px;
  right: 10px;
  background-color: #fff !important;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 20px;
  margin-right: 0.2em;
  border: 1px solid rgb(0, 0, 0, 0.1);
`;

const ChatStyle = styled.div`
  .headerBoomerang {
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0 25px;
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      margin: 0;
    }

    .userDetails {
      display: flex;
      align-items: center;
      gap: 20px;
      font-weight: 500;
      font-size: 15px;
      .userImage {
        border: 2px solid #cdcccc;
        padding: 0;
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }
  }

  .labelcolor {
    color: #00c17c;
  }
  .chatMessages {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 80px 25px 90px 25px;
  }

  .imagePreview {
    position: absolute;
    top: -120px;
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
  }

  .inputBox {
    background-color: #f8f8f8;
    width: 100%;
    padding: 0 25px 25px 25px;
    position: fixed;
    bottom: 0;
    .chatInput {
      padding: 8px;
      background-color: white;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

      input {
        max-width: calc(100% - 100px);
        font-size: 14px;
        flex: 1;
        padding: 8px;
        border: none;
        &:focus {
          outline: none;
        }
        &:placeholder-shown {
          text-overflow: ellipsis;
        }
      }

      button {
        background-color: transparent;
        padding: 8px;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 0 5px;
        svg {
          color: #00c17c;
        }
      }
    }
  }
`;

const Message = styled.div`
  word-break: break-word;
  font-size: 14px;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${(props) =>
    props.$sender === "user" ? "#00c17c" : "white"};
  color: ${(props) => (props.$sender === "user" ? "#fff" : "#000")};
  border-radius: 8px;
  padding: 8px 16px;
  max-width: 70%;
  border: ${(props) =>
    props.$sender === "user" ? "none" : "1px solid rgb(0,0,0,0.1)"};
  margin-bottom: 8px;
  align-self: ${(props) =>
    props.$sender === "user" ? "flex-end" : "flex-start"};
  border-bottom-right-radius: ${(props) =>
    props.$sender === "user" ? "0" : "8px"};
  border-bottom-left-radius: ${(props) =>
    props.$sender === "user" ? "8px" : "0"};
  margin-left: ${(props) => (props.$sender === "user" ? "auto" : "0")}; // Adicionando margem à esquerda se o remetente for "user"

  img {
    max-height: 200px;
    max-width: 180px;
    align-self: stretch;
    // margin: auto;
    border-radius: 5px;
    margin-bottom: 1em;
    margin-top: 1em;
  }
;`

export default Chat;
