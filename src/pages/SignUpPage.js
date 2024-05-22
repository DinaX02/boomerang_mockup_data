import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Draggable from "react-draggable";
import styled from "styled-components";
import Header from '../components/Header/Header';
import Input from '../components/Input';
import Modal from '../components/Modal';
import ButtonForOpenBottomSheetSignUp from "../components/ButtonForOpenBottomSheetSignUp";
import Button from '../components/Button';
import BottomSheetGender from '../components/BottomSheets/BottomSheetGender';

const SignUpPage = () => {
  const [inputNomeValue, setInputNomeValue] = useState('');
  const [inputApelidoValue, setInputApelidoValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputNomeUtilizadorValue, setInputNomeUtilizadorValue] = useState('');
  const [inputPassValue, setInputPassValue] = useState('');
  const [inputRepetirPassValue, setInputRepetirPassValue] = useState('');
  const [alert, setAlert] = useState(false);
  const [fecharModal, setFecharModal] = useState(true);
  const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [btnGeneroName, setBtnGeneroName] = useState('Género');
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);
  const [shown, setShown] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [erroObrigatorio, setErroObrigatorio] = useState(false);
  const bottomSheetRef = useRef(null);

  const navigate = useNavigate();

  const handleNomeChange = (e) => {
    setInputNomeValue(e.target.value);
    setAlert(true);
  };

  const handleApelidoChange = (e) => {
    setInputApelidoValue(e.target.value);
    setAlert(true);
  };

  const handleEmailChange = (e) => {
    setInputEmailValue(e.target.value);
    setAlert(true);
  };

  const handleNomeUtilizadorChange = (e) => {
    setInputNomeUtilizadorValue(e.target.value);
    setAlert(true);
  };

  const handlePassChange = (e) => {
    setInputPassValue(e.target.value);
    if (e.target.value !== inputRepetirPassValue) {
      setMatchPassword(false);
      setErroObrigatorio(true);
    }
    else {
      setMatchPassword(true);
      setErroObrigatorio(false);
    }
    setAlert(true);
  };

  const handleRepetirPassChange = (e) => {
    setInputRepetirPassValue(e.target.value);

    if (inputPassValue !== e.target.value) {
      setMatchPassword(false);
      setErroObrigatorio(true);
    }
    else {
      setMatchPassword(true);
      setErroObrigatorio(false);
    }
    setAlert(true);
  };

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  }

  const handleToggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  }

  const handleEntrarClick = () => {
    navigate('/');
  }


  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    const camposPreenchidos =
      inputNomeValue.trim() !== '' &&
      inputApelidoValue.trim() !== '' &&
      inputEmailValue.trim() !== '' &&
      inputNomeUtilizadorValue.trim() !== '' &&
      inputPassValue.trim() !== '' &&
      inputRepetirPassValue.trim() !== '';

    // Atualiza o estado de todosCamposPreenchidos
    setTodosCamposPreenchidos(camposPreenchidos);
  }, [
    inputNomeValue,
    inputApelidoValue,
    inputEmailValue,
    inputNomeUtilizadorValue,
    inputPassValue,
    inputRepetirPassValue
  ]);

  const handleTermosChange = (e) => {
    setTermosAceitos(e.target.checked);
  };

  const handleOptionSelect = (option) => {
    setBtnGeneroName(option);
    setBottomSheetOpen(false);
    setAlert(true);
    setOpcaoSelecionada(true); // Definir como true quando uma opção é selecionada
  }

  const handleClickDrag = () => {
    setBottomSheetOpen(false);
  }

  const toggleEyeHandle = (id) => {
    setShown((prevShown) => ({ ...prevShown, [id]: !prevShown[id] }));
  }

  return (
    <RegistarStyle>
      <Header name="Criar conta" alertHandler={alertHandler} />
      <form className='formRegistar'>
        <Input
          obrigatorio={true}
          placeholder="Nome"
          value={inputNomeValue}
          onChange={handleNomeChange}
        />

        <Input
          obrigatorio={true}
          placeholder="Apelido"
          value={inputApelidoValue}
          onChange={handleApelidoChange}
        />

        <Input
          obrigatorio={true}
          placeholder="E-mail"
          value={inputEmailValue}
          onChange={handleEmailChange}
        />

        <Input
          obrigatorio={true}
          placeholder="Nome de utilizador"
          value={inputNomeUtilizadorValue}
          onChange={handleNomeUtilizadorChange}
        />

        {bottomSheetOpen && <Draggable
          cancel=".no-drag"
          // bounds="parent"
          // positionOffset={{ x: "0", y: "0" }}
          onStop={() => setBottomSheetOpen(false)}
          nodeRef={bottomSheetRef}
        >
          <BottomSheetGender
            ref={bottomSheetRef}
            onSelectOption={handleOptionSelect}
            handleClickDrag={handleClickDrag}
          />

        </Draggable>}
        <ButtonForOpenBottomSheetSignUp
          btnName={btnGeneroName}
          onClick={handleToggleBottomSheet}
          type="button"
          className={opcaoSelecionada ? "opcaoSelecionada" : ""}
        />

        <Input
          obrigatorio={false}
          placeholder="Palavra-passe"
          value={inputPassValue}
          onChange={handlePassChange}
          type={shown.password ? "text" : "password"}
          shown={shown.password}
          isPassword={true}
          matchPassword={matchPassword}
          toggleEyeHandle={() => toggleEyeHandle("password")} // Passa o id correspondente
        />

        <Input
          obrigatorio={false}
          placeholder="Repetir Palavra-passe"
          value={inputRepetirPassValue}
          onChange={handleRepetirPassChange}
          type={shown.repeatPassword ? "text" : "password"}
          shown={shown.repeatPassword}
          matchPassword={matchPassword}
          erroObrigatorio={erroObrigatorio}
          isPassword={true}
          toggleEyeHandle={() => toggleEyeHandle("repeatPassword")} // Passa o id correspondente
        />

        <div className="termsContainer">
          <input type="checkbox" id="terms" name="terms" onChange={handleTermosChange} />
          <label className="termos" htmlFor='terms'> Aceito os <Link>termos</Link> e a <Link>política de privacidade</Link></label>
        </div>
        <div
          className='campoObrigatorio'
          style={
            todosCamposPreenchidos   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
              ? { visibility: "hidden" }
              : { visibility: "visbile" }
          }>
          <span className="colourGreenAsterisk">*</span> Campo Obrigatório
        </div>
      </form>
      <Button
        type="submit"
        onClick={handleEntrarClick}
        text="Concluir"
        disable={!todosCamposPreenchidos || !termosAceitos}
      >
      </Button>
      {/* <div>
        <div className='dragHandleContainer' onClick={dragClickHandle}>
          <div className='dragHandle' />
        </div>
      </div> */}

      <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        alert={alert}
        message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
      />

    </RegistarStyle >
  )
}

const RegistarStyle = styled.div`
  .formRegistar {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: auto;
  }

  .termsContainer {
    width: calc(100% - 48px);
    display: flex;
    align-items: start;
    margin-bottom: 12px; /* Ajuste conforme necessário */
  }

  .termos {
    font-size: 12px;
    margin-left: 5px;
    a {
      text-decoration: underline;
      color: #484954;
    }
  }

  .campoObrigatorio {
    width: calc(100% - 48px);
    margin-bottom: 24px;
    font-size: 14px;
  }

  .colourGreenAsterisk{
  color: #00C17C;
  margin-left: 5px;
  margin-right: 5px;
}
 .inputAsteriskContainer  {
  width: 100%;
  text-align: center;
 }

 .inputAsteriskContainer .colourGreenAsterisk {
  position: absolute;
  right: 40px;
  margin-top: 7px;
 }

 .buttonOpenBottomSheetContainer {
  width: calc(100% - 48px);
  /* margin-top: 24px; */
  margin: 0;
 }

 .headerBoomerang {
  margin-bottom: 24px;
 }

 .btnComponent {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
 }

 .asterisk {
  display: none;
 }

 .buttonOpenBottomSheetContainer button {
  color: gray;
 }

 .buttonOpenBottomSheetContainer button.opcaoSelecionada {
  color: black;
  }
`

export default SignUpPage
