import React, { useState } from 'react';
import Header from '../components/Header/Header';
import iconMoradaSelect from '../assets/icons/selectedAdress.svg';
import styled from 'styled-components';
import PreviewCard from '../components/PreviewCard';
import iconFolha from '../assets/icons/fa-solid_leaf.svg';
import iconInfo from '../assets/icons/infoIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgressRent } from '../redux/rentSlice';
import Modal from '../components/Modal';

const MainContainer = styled.div`
  padding: 25px;
  width: 100%;
  height: 80vh;
`;

const ConfirmButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 60px;
`;

const LavagemSelecionada = styled.button`
  background-color: ${props => (props.selected ? '#343541' : '#ffffff')};
  border-radius: 5px;
  width: 90%;
  height: 40px;
  margin: 7px 0px;
  color: ${props => (props.selected ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  border: none;
`;

const MainSelection = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
`;

const ButtonInfo = styled.div`
  width: 10%;
`;

const ConteudoLavagem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden !important;
  font-size: 13px;
  font-weight: 500;
`;

const IconLavagemSelect = styled.img`
  width: 10px;
  visibility: ${props => (props.selected ? 'visible' : 'hidden')};
  margin: 0px 10px 0px 0px;
`;

const ValorLavagem = styled.div`
  margin-left: auto;
  font-weight: bold;
  border-left: 1px solid;
  width: 15%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.selected ? 'ffffff' : '#e4e4e4')};
`;

const IconFolha = styled.img`
  width: 12px;
  //visibility: ${props => (props.valorCincoEuros ? 'visible' : 'hidden')};
  margin: 0px 10px 0px 5px;
`;

const AlugarDetalhes = () => {
    const [lavagemSelecionada, setLavagemSelecionada] = useState(null);
    const [transporteSelecionado, setTransporteSelecionado] = useState(null);
    const [fecharModal, setFecharModal] = useState(true);
    const [fecharModal2, setFecharModal2] = useState(true);
    const [fecharModal3, setFecharModal3] = useState(true);
    const [fecharModal4, setFecharModal4] = useState(true);
    const [total, setTotal] = useState(0); // Estado para armazenar o total

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const list = useSelector((state) => state.Rent.progressRentList);

    const modalMessages = [
        (
            <span>
                <strong>Vale de 1 lavagem</strong> numa lavandaria parceira com consumo energético reduzido.
                Com esta opção tens direito a um <strong>cupão de 7%</strong> no teu próximo aluguer.
            </span>
        ),
        (
            <span>
                Lavagem a cargo do utilizador, o mesmo deve lavar a peça antes da devolução.
            </span>
        ),
        (
            <span>
                Transportadora parceira com consumo energético reduzido. Inclui <strong><i>tracking</i></strong> da encomenda.
                Com esta opção tens direito a um <strong>cupão de 7%</strong> no teu próximo aluguer
            </span>
        ),
        (
            <span>
                Transporte a cargo do utilizador, o mesmo deve deslocar-se para efetuar a devolução da peça.
            </span>
        ),
    ];

    const handleIconClick = (index) => {
        switch (index) {
            case 0:
                setFecharModal(false);
                break;
            case 1:
                setFecharModal2(false);
                break;
            case 2:
                setFecharModal3(false);
                break;
            case 3:
                setFecharModal4(false);
                break;
            default:
                break;
        }
    };

    const lavagens = [
        { nome: 'Lavandaria Sustentável', valor: 5, modalIndex: 0 },
        { nome: 'Lavagem feita pelo utilizador', valor: 0, modalIndex: 1 },
    ];

    const transportes = [
        { nome: 'Transportadora Eco-Friendly', valor: 5, modalIndex: 2 },
        { nome: 'Transporte a cargo do utilizador', valor: 0, modalIndex: 3 },
    ];

    const handleLavagemClick = index => {
        if (lavagemSelecionada !== null && lavagens[lavagemSelecionada].valor > 0) {
            // Se uma opção paga foi desselecionada, subtrai o valor dela
            setTotal(prevTotal => prevTotal - lavagens[lavagemSelecionada].valor);
        }
        setLavagemSelecionada(index);
        if (lavagens[index].nome === 'Lavandaria Sustentável') {
            setTotal(prevTotal => prevTotal + lavagens[index].valor);
        }
    };

    const handleTransporteClick = index => {
        if (transporteSelecionado !== null && transportes[transporteSelecionado].valor > 0) {
            // Se uma opção paga foi desselecionada, subtrai o valor dela
            setTotal(prevTotal => prevTotal - transportes[transporteSelecionado].valor);
        }
        setTransporteSelecionado(index);
        if (transportes[index].nome === 'Transportadora Eco-Friendly') {
            setTotal(prevTotal => prevTotal + transportes[index].valor);
        }
    };

    const isContinuarDisabled = lavagemSelecionada === null || transporteSelecionado === null;

    const handleNextStep = () => {
        const detalhes = { detalhes: [lavagemSelecionada, transporteSelecionado] };
        dispatch(updateProgressRent({ index: 0, updatedData: detalhes }));
        navigate("/valor-total");
    };

    return (
        <div>
            <Header name="Detalhes de Aluguer" />
            <MainContainer>
                <Modal
                    fecharModal={fecharModal}
                    setFecharModal={setFecharModal}
                    message={modalMessages[0]}
                />
                <Modal
                    fecharModal={fecharModal2}
                    setFecharModal={setFecharModal2}
                    message={modalMessages[1]}
                />
                <Modal
                    fecharModal={fecharModal3}
                    setFecharModal={setFecharModal3}
                    message={modalMessages[2]}
                />
                <Modal
                    fecharModal={fecharModal4}
                    setFecharModal={setFecharModal4}
                    message={modalMessages[3]}
                />
                <PreviewCard id={list.article_id} valor={list.total+total} />
                <div style={{ paddingTop: "25px" }}>
                    {lavagens.map((lavagem, index) => (
                        <MainSelection key={index}>
                            <LavagemSelecionada
                                selected={lavagemSelecionada === index}
                                onClick={() => handleLavagemClick(index)}
                                name={lavagens.nome}
                            >
                                <ConteudoLavagem>
                                    <IconLavagemSelect src={iconMoradaSelect} alt="icone opção selecionada" selected={lavagemSelecionada === index}/>
                                    {lavagem.nome}
                                    {lavagem.nome==="Lavandaria Sustentável" && <IconFolha src={iconFolha} alt="icone de sustentabilidade" />}
                                    {lavagem.valor !== 0 && <ValorLavagem >{lavagem.valor} €</ValorLavagem>}
                                </ConteudoLavagem>
                            </LavagemSelecionada>
                            <ButtonInfo>
                                <button
                                    style={{ backgroundColor: "transparent", border: "none" }}
                                    onClick={() => handleIconClick(lavagem.modalIndex)}
                                >
                                    <img
                                        style={{ width: "17px" }}
                                        src={iconInfo}
                                        alt="ícone de informação"
                                    ></img>
                                </button>
                            </ButtonInfo>
                        </MainSelection>
                    ))}
                </div>
                <hr style={{ width: "90%" }} />
                <div style={{ paddingTop: "0px" }}>
                    {transportes.map((transporte, index) => (
                        <MainSelection key={index}>
                            <LavagemSelecionada
                            selected={transporteSelecionado === index}
                                onClick={() => handleTransporteClick(index)}
                                name={transporte.nome}
                            >
                                <ConteudoLavagem>
                                    <IconLavagemSelect src={iconMoradaSelect} alt="icone opção selecionada" selected={transporteSelecionado === index}/>
                                    {transporte.nome}
                                    {transporte.nome==="Transportadora Eco-Friendly" && <IconFolha src={iconFolha} alt="icone de sustentabilidade"/>}
                                    {transporte.valor !== 0 && <ValorLavagem>{transporte.valor} €</ValorLavagem>}
                                </ConteudoLavagem>
                            </LavagemSelecionada>
                            <ButtonInfo>
                                <button
                                    style={{ backgroundColor: "transparent", border: "none" }}
                                    onClick={() => handleIconClick(transporte.modalIndex)}
                                >
                                    <img
                                        style={{ width: "17px" }}
                                        src={iconInfo}
                                        alt="ícone de informação"
                                    ></img>
                                </button>
                            </ButtonInfo>
                        </MainSelection>
                    ))}
                </div>
                <ConfirmButton>
                    <button
                        disabled={isContinuarDisabled}
                        onClick={handleNextStep}
                        style={{
                            backgroundColor: isContinuarDisabled ? '#999999' : '#343541',
                            color: 'white',
                            border: 'none',
                            width: '144px',
                            height: '36px',
                            borderRadius: '5px',
                            outline: "none",
                            fontSize: '15px',
                            fontWeight: 'bold',
                            fontFamily: "Montserrat",
                        }}
                    >
                        Continuar
                    </button>
                </ConfirmButton>
            </MainContainer>
        </div>
    );
};

export default AlugarDetalhes;
