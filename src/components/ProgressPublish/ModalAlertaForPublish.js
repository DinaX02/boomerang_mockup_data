import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetProgressPublish1 } from "../../redux/publicarSlice";
const ModalAlertaForPublish = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSimClick = () => {
        dispatch(resetProgressPublish1()); // limpar os dados do redux quando o utilizador clicar no "sim" do modal alert
        navigate("/");
    };

    return (
        <ModalStyle className="fundoModal"
            style={
                props.fecharModal   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
                    ? { display: "none" }
                    : { display: "block" }
            }>
            <div className="modalContent">
                <p className="textoModal">{props.message}</p>
                {!props.alert && <hr className="divisorModal"></hr>}
                {!props.alert && <button
                    className="btnOK"
                    onClick={() => {
                        props.setFecharModal(!props.fecharModal)
                    }}>OK</button>}
                {props.alert && <button
                    className="btnOK alert"
                    onClick={() => {
                        props.setFecharModal(!props.fecharModal)
                    }}>Não</button>}
                {props.alert && <div className="vl"></div>}
                {props.alert && <button
                    className="btnOK alert sim"
                    onClick={handleSimClick}
                >Sim</button>}
            </div>
        </ModalStyle>
    )
}

const ModalStyle = styled.div`
/*fundo da modal*/
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    z-index: 2000;

/*contentor do conteudo da modal*/
.modalContent {
    background-color: white;
    border-radius: 5px;
    text-align: center;
    padding: 0 28px;
    padding-top: 16px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 48px);
}

/*divisor da modal*/
hr.divisorModal {
    border-top: 2px solid #e4e4e4;
    border-radius: 5px;
    opacity: 1;
    margin-bottom: 0;
}

/*texto da modal*/
.textoModal {
    font-size: 12px;
    font-weight: normal;
}

/*botao ok da modal*/
.btnOK {
    background-color: transparent;
    font-size: 11px;
    outline: none;
    width: 100%;
    padding: 15px 0;
    border: 1px transparent;
    font-weight: 500;
}

.btnOK.alert{
    width: max-content;
    padding: 15px 30px;
    margin: 0;
}
.btnOK.alert.sim{
    color: #C80000
}

.vl {
    border-left: 2px solid #CACACA;
    border-radius: 5px;
    height: 4px;
    display: inline;
  }
  

@media only screen and (min-width: 600px) {
// .modalContent {
//     margin: 0;
// }

    /*texto da modal*/
    .textoModal {
        font-size: 16px;
        font-weight: normal;
    }

    .btnOK {
        font-size: 15px;
    }
}

@media only screen and (min-width: 768px) {
    .modalContent{
        width: 672px;
    }
  }
`

export default ModalAlertaForPublish