import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from '../components/Button';
import EditarInputIcon from '../assets/icons/editarInput.svg';
import Header from '../components/Header/Header';
import Modal from '../components/Modal';
import Input from '../components/Input';

const EditEmail = () => {
  const [username, setUsername] = useState("mariacarmo@gmail.com");
  const [disableUsername, setDisableUsername] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  const [fecharModal, setFecharModal] = useState(true);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/settings-page');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEditUsernameInput = () => {
    setDisableUsername(false);
    setDisableBtn(false);
    setAlert(true);
  }
 

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  }

  return (
    <>
      <Header name="Editar Email" alertHandler={alertHandler} />
      <EditProfileStyle>
        <form onSubmit={handleSubmit}>

          <div className='inputsContainer'>
            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="username" className='inputTitle'>
                  Email
                  <button className='buttonediticon'>
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" onClick={handleEditUsernameInput}/>
                  </button>
                </label>
              </div>
              <Input
                obrigatorio={true}
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={disableUsername}
              />
            </div>

            
          </div>
          <div className='btnAtualizarDados'>
            <Button
              onClick={handleClick}
              text="Atualizar email"
              disable={disableBtn}
              type="submit"
              ></Button>
          </div>
        </form>
        <Modal
          fecharModal={fecharModal}
          setFecharModal={setFecharModal}
          alert={alert}
          message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
        />
      </EditProfileStyle>
    </>
  )
}

const EditProfileStyle = styled.div`
          /* padding: 0 24px; */
          margin: auto; 
          /* display: flex; */
          /* max-width: 600px; */

        .imagemPerfil {
          width: 84px;
          height: 84px;
          object-fit: cover;
          border-radius: 50%;
          // border: 2px solid #343541;
}

        .containerUserEdit {
          text-align: center;
        margin-top: 48px;
}

        .containerUserEditContent {
          display: inline-block;
        position: relative;
}
        .editarPerfilIcon {
          position: absolute;
        right: 0;
        width: 18px;

}

        .input {
        padding: 0.5rem;
        box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        outline: none;
        border: none;
        font-family: Montserrat;
        font-size: 14px;
        width: 100%;
 }
        .inputTitle {
          font-size: 13px;
        font-weight: 500;
 }
        .inputTitleContainer {
          padding: 0 24px;
          margin-top: 1rem;
          display: block;
        }

        .editarInputIcon{
          position: relative;
          bottom: 3px;
          margin-left: 9px;
        }

        .inputsContainer {
          display: flex;
        flex-wrap: wrap;
        // width: calc(100% - 48px);
        width: 100%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
 }

        .inputContainer {
          width: 100%;
 }

        .btnAtualizarDados {
          margin-top: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
 }
        .biografiaInput {
          border: none;
          width: calc(100% - 48px);
          margin-left: 24px;
          font-size: 14px;
          padding-bottom: 0.5rem;
      }
      .countCharBiografia{
        font-size: 12px;
        color: #888;
        margin-left: 9px;
      }
      .buttonediticon{
        border: none;
        background-color: transparent;
      }
      
      @media only screen and (min-width: 600px) {
        .input {
          font-size: 17px;
        }
          .inputTitle {
            font-size: 16px;
        }
      }
`

export default EditEmail
