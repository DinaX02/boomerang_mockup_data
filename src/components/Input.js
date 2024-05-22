import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EyeOpenIcon from '../assets/icons/eye.svg'
import EyeSlashIcon from '../assets/icons/eye-slash.svg'

const Input = (props) => {
    const [campoPreenchido, setCampoPreenchido] = useState(false);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        if (props.value.trim() !== '') {
            setCampoPreenchido(true);
        } else {
            setCampoPreenchido(false);
        }
    }, [props.value]);

    const toggleEyeHandle = () => {
        setShown(!shown);
        // Chame a função passada de SignUpPage para alternar a visibilidade
        if (props.toggleEyeHandle) {
            props.toggleEyeHandle(props.id);
        }
    }

    return (
        <InputStyle className='inputAsteriskContainer'>
            <input
                className='inputComponent'
                type={props.type || 'text'}
                disabled={props.disabled}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name='input'
                style={
                    (props.erroObrigatorio && !campoPreenchido) || (props.isPassword && (!props.matchPassword && campoPreenchido))
                        ? { outline: "0.5px solid #c80000" }
                        : (props.matchPassword && campoPreenchido)
                            ? { outline: "0.5px solid #00C17C" } // Quando a nova condição é verdadeira
                            : { outline: "none" }
                }
            ></input>
            {props.isPassword && (
                <img
                    className={`sideIndication icon`}
                    src={shown ? EyeSlashIcon : EyeOpenIcon}
                    alt="Toggle Eye Icon"
                    onTouchStart={toggleEyeHandle}
                />
            )}            
            {props.obrigatorio && !campoPreenchido && <span className="colourGreenAsterisk sideIndication">*</span>}
            <p
                className='textErroObrigatorio'
                style={
                    (props.erroObrigatorio && !campoPreenchido && !props.isPassword) || ((props.erroObrigatorio && !campoPreenchido) && (props.isPassword && props.login))
                        ? { visibility: "visible" }
                        : { visibility: "hidden" }
                }
            >Campo obrigatório</p>
        </InputStyle>
    );
};

const InputStyle = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

 .sideIndication {
  position: absolute;
  right: 40px;
  margin-top: 7px;
 }

 .icon {
    margin-top: 17px;
    opacity: 0.5;
 }

.inputComponent {
    width: calc(100% - 48px);
    padding: 12px 20px;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
    border: none;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 5px;
    line-height: normal;
}

::placeholder {
        font-weight: 500;
        /* color: black; */
}

.textErroObrigatorio {
    color: #c80000;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: calc(24px - 18px);
    text-align: left;
    padding-left: 24px;
}
`;

export default Input;
