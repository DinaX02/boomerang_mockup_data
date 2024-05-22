import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import ProfileLink from "./ProfileLink";
import mockupprofile from "../assets/perfil/user_mockup_image.jpg"

const ChatLink = (props) => {
    return (

        //TODO: alterar o link para o link do artigo//
        //TODO: alterar imagens e informações para o artigo//

        <ChatLinkStyle to={`/chat`} key={props.index}>
            <ProfileLink zoom={1.2} image={mockupprofile}/>
            <div className={'chatLinkText'}>
                <div>maria_carmo</div>
                <div>Boa noite, em que posso ajudar?</div>
            </div>
        </ChatLinkStyle>
    )
}

const ChatLinkStyle = styled(Link)`
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
  text-decoration: none;
  color: black;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  .chatLinkText{
    flex: 1;
    font-size: 14px;
    div:first-child{
      font-size: 16px;
      font-weight: 600;
    }
  }
`


export default ChatLink;
