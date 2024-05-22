import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Button from '../components/Button';
import Input from '../components/Input';
import CloseIcon from '../assets/icons/close2.svg';

const LoginRegistar = () => {
    const navigate = useNavigate();
    const [fecharBottomSheet, setFecharBottomSheet] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [inputNomeValue, setInputNomeValue] = useState('');
    const [inputPassValue, setInputPassValue] = useState('');
    const [erroObrigatorio, setErroObrigatorio] = useState(false);
    const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false);
    const [shown, setShown] = useState(false);
    const ref = useRef(null);

    const handleCriarContaClick = () => {
        navigate('/sign-up-page');
    };

    useEffect(() => {
        // Verifica se todos os campos estão preenchidos
        const camposPreenchidos =
            inputNomeValue.trim() !== '' &&
            inputPassValue.trim() !== '';

        // Atualiza o estado de todosCamposPreenchidos
        setTodosCamposPreenchidos(camposPreenchidos);

        const handleBodyScroll = () => {
            // Desativa o scroll quando fecharBottomSheet é falso
            document.body.style.overflow = !fecharBottomSheet ? 'hidden' : 'auto';
        };

        // Adiciona o evento de scroll ao montar o componente
        handleBodyScroll();

        // Remove o evento de scroll ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [
        inputNomeValue,
        inputPassValue,
        fecharBottomSheet
    ]);

    const handleEntrarClick = () => {
        if (mostrarLogin) {
            if (todosCamposPreenchidos) {
                setFecharBottomSheet(true);
            }
            else {
                setErroObrigatorio(true);
            }
        } else {
            setMostrarLogin(true);
        }
    };

    const dragClickHandle = () => {
        setFecharBottomSheet(true);
        localStorage.setItem('login', true);
    }


    const handleInputNomeChange = (e) => {
        setInputNomeValue(e.target.value);
    };

    const handleInputPassChange = (e) => {
        setInputPassValue(e.target.value);
    };

    const clickContinuarHandle = () => {
        setFecharBottomSheet(true);
    }

    const clickCriarContaHandle = () => {
        navigate('/sign-up-page')
    }


    const toggleEyeHandle = () => {
        setShown(!shown);
    }

    return (
        <LoginRegistarStyle>
            {!fecharBottomSheet && <div className='fundoBlured'>
                <div
                    ref={ref}
                    className='bottomSheetLoginRegistar'
                    style={
                        mostrarLogin
                            ? { height: "354px" }
                            : { height: "220px" }
                    }>
                    <div className='dragHandleContainer'>
                        {/* <div className='dragHandle' /> */}
                        <img src={CloseIcon} alt='close icon' className='closeIcon' onClick={dragClickHandle} />
                    </div>
                    {!mostrarLogin && <div className='loginRegistarContainer' >
                        <Button
                            isBtnLoginRegistar={true}
                            width="236px"
                            onClick={handleEntrarClick}
                            text="Entrar"></Button>
                        <Button
                            isBtnLoginRegistar={true}
                            width="236px"
                            onClick={handleCriarContaClick}
                            text="Criar conta"></Button>
                        <Link className='ignorar' onTouchStart={clickContinuarHandle} style={{ visibility: 'hidden' }}>Continuar sem conta</Link>
                    </div>}
                    {mostrarLogin && <div className='loginContainer'>
                        <form className='formLogin'>
                            <Input
                                erroObrigatorio={erroObrigatorio}
                                placeholder="E-mail ou nome de utilizador"
                                value={inputNomeValue}
                                onChange={handleInputNomeChange}
                            />
                            <Input
                                erroObrigatorio={erroObrigatorio}
                                placeholder="Palavra-passe"
                                value={inputPassValue}
                                onChange={handleInputPassChange}
                                type={shown ? "text" : "password"}
                                isPassword={true}
                                toggleEyeHandle={() => toggleEyeHandle()}
                                login={true}
                            />
                        </form>
                        <Link className='ignorar forgetPassword'>Esqueceste-te da palavra-passe?</Link>
                        <Button
                            isBtnLoginRegistar={true}
                            width="236px"
                            type="submit"
                            onClick={handleEntrarClick}
                            text="Entrar"></Button>
                        <Link className='ignorar' onTouchStart={clickCriarContaHandle}>Criar conta</Link>
                    </div>}
                </div>
            </div>}
        </LoginRegistarStyle>
    )
}

const LoginRegistarStyle = styled.div`
.bottomSheetLoginRegistar {
    background-color: #f8f8f8;
    height: 220px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }

  .dragHandleContainer {
    position: relative;
    width: 100%;
    margin-bottom: 24px;
  }

  .dragHandle {
    margin-top: 15px;
    width: 25%;
    border: 2px solid #cacaca;
    border-radius: 5px;
    margin: 15px auto 1.5em;
  }

  .closeIcon {
    scale: 1.2;
    float: right;
    margin: 24px auto 0.5em;
    margin-right: 24px;
  }

  .btnComponent {
    margin-bottom: 24px;
  }

  .ignorar {
        font-weight: normal;
        font-size: 13px;
        text-decoration: underline;
        color: #484954;
        display: block;
        margin-top: -12px;
    }

  .fundoBlured {
    background-color: rgba(0,0,0,0.3);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(1.5px);
  }

  .loginRegistarContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .loginContainer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .formLogin {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .forgetPassword {
    width: calc(100% - 48px);
    margin-top: 0;
  }

  @media only screen and (min-width: 600px) {
    .fundoBlured {
      display: none;
    }
  }
`

export default LoginRegistar
