import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import addMoradaIcon from '../assets/icons/icon_AddMorada.png';
import iconPontoRecolho from '../assets/icons/icon_PontoRecolha.png';
import dropPontoRecolha from '../assets/icons/drop_PontoRecolha.png';
import iconMoradaSelect from '../assets/icons/selectedAdress.svg';
import styled from "styled-components";


const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 25px 30px;
`;

  

const MoradaSelecionada = styled.div`
  background-color: ${props => (props.selecionada ? '#343541' : '#ffffff')};
  border-radius: 5px;
  width: 100%;
  height: 45px;
  margin-bottom: 30px;
  color: ${props => (props.selecionada ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);;

`;

const ConteudoMorada = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden !important;
`;


const BotaoRemover = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.selecionada ? '#ffffff' : '#000000')};
  cursor: pointer;
`;

const IconMoradaSelect = styled.img`
  width: 12px;
  visibility: ${props => (props.selecionada ? 'block' : 'hidden')};
  margin: 0px 10px 0px 5px;
`;


const SelecionarMorada = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);;
  width: 100%;
  height: 45px;
  padding: 10px 0px 10px 30px;
  margin-bottom: 30px;
`;
const PontoRecolha = styled.div`
background-color: white;
border-radius: 5px;
box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);;
width: 100%;
height: 45px;
padding: 10px 10px 10px 30px;
margin-top: 30px;

`;
const ConfirmButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 60px;
`;



const ChooseAdressComponent = ({ onAddressSelect }) => {
    const [moradas, setMoradas] = useState([]);
    const [moradaSelecionada, setMoradaSelecionada] = useState('');

    useEffect(() => {
        const storedMoradas = JSON.parse(localStorage.getItem('moradas')) || [];
        setMoradas(storedMoradas);
    }, []);

    const handleRemoverMorada = (index) => {
        const novasMoradas = [...moradas];
        novasMoradas.splice(index, 1);
        setMoradas(novasMoradas);
        localStorage.setItem('moradas', JSON.stringify(novasMoradas));

        if (moradas[index] === moradaSelecionada) {
            setMoradaSelecionada('');
        }

        onAddressSelect();
    };

    const handleToggleMorada = (morada) => {
        if (morada === moradaSelecionada) {
            setMoradaSelecionada('');
        } else {
            setMoradaSelecionada(morada);
        }
        onAddressSelect();
    };

    return (
        <div>
            <MainContainer>
                {moradas.map((morada, index) => (
                    <MoradaSelecionada
                        key={index}
                        selecionada={morada === moradaSelecionada}
                        onClick={() => {
                            handleToggleMorada(morada)
                          }}
                    >
                        <ConteudoMorada>
                            <IconMoradaSelect
                                src={iconMoradaSelect}
                                alt="icon"
                                selecionada={morada === moradaSelecionada}
                            />
                            {morada}
                        </ConteudoMorada>
                        <BotaoRemover
                            onClick={() => handleRemoverMorada(index)}
                            selecionada={morada === moradaSelecionada}
                        >
                            X
                        </BotaoRemover>
                    </MoradaSelecionada>
                ))}


                <Link to={"/adress-publish"}>
                    <SelecionarMorada>

                        <button style={{
                            backgroundColor: "transparent",
                            border: "none",
                            width: "90%",
                            textAlign: "left",
                            fontSize: "16px",
                            fontWeight: "500",

                        }}>Adicionar Morada</button>
                        <img style={{
                            width: "20px",


                        }} src={addMoradaIcon} alt="Adicioanr Morada"></img>
                    </SelecionarMorada>
                </Link>
                <hr></hr>
                <PontoRecolha>

                    <button style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#cbcbcb",
                        textAlign: "left",
                        fontSize: "16px",
                        fontWeight: "500",

                    }}>Ponto de Recolha</button>

                    <img style={{
                        width: "18px",
                        marginBottom: "1px",

                    }} src={iconPontoRecolho} alt="icon"></img>
                    <img style={{
                        width: "25px",
                        float: "right",
                        marginTop: "9px",

                    }} src={dropPontoRecolha} alt="Adicioanr Morada"></img>
                </PontoRecolha>
                <ConfirmButton>

                </ConfirmButton>

            </MainContainer>
        </div>
    )
}

export default ChooseAdressComponent