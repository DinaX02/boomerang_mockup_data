import React, { useState, useEffect } from 'react';
import imgDefaultPreview from '../assets/icons/img_default_card_preview.svg';
import artigosJSON from "../data/artigos.json";
import styled from 'styled-components';
import iconInfo from '../assets/icons/infoIcon.svg';
import { useNavigate } from 'react-router-dom';
import Modal from "./Modal";
// import { useSelector } from "react-redux";

const PreviewValorTotal = (props) => {
    const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);
    const navigate = useNavigate();
    // const list = useSelector((state) => state.Rent.progressRentList);
    const [fecharModal, setFecharModal] = useState(true);

    const handleIconClick = () => {
        setFecharModal(false);
    };

    const handleResize = () => {

        if (window.innerWidth <= 450) {
            setMaxDescriptionLength(40);
        } else {
            setMaxDescriptionLength(90);
        }
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const descriptionSizeControl = (text) => {
        return text.length > maxDescriptionLength
            ? `${text.substring(0, maxDescriptionLength)}...`
            : text;
    };

    const vouchers = () => {
        navigate("/vouchers-page");
    }

    const imageArtigo = !artigosJSON.images
        ? artigosJSON[props.id - 1].images[0]
        : imgDefaultPreview;


    return (
        <MainContainer>
            <Modal
                fecharModal={fecharModal}
                setFecharModal={setFecharModal}
                message={
                    <ParagraphMessageModal1p>
                        Esta taxa de proteção (<strong>2€ + 5% do valor total do aluguer</strong>) é <strong>obrigatória</strong> e permite que <strong>todos os danos até 25€</strong> causados à peça durante o período de aluguer sejam <strong>cobertos pela Boomerang</strong>.
                    </ParagraphMessageModal1p>
                }
            />
            <FirstContainer>
                <div className='imgCardPreview' style={{ backgroundImage: `url(${imageArtigo})` }}>
                </div>

                <div className="textContainerPreview">
                    <h2 className="titlePreview">{artigosJSON[props.id - 1].title}</h2>
                    <p className="descriptionPreview">
                        {descriptionSizeControl(artigosJSON[props.id - 1].description)}
                    </p>
                </div>
            </FirstContainer>
            <SecondContainer>
                <ServiceConatiner>
                    <TextInner>
                        <p aria-label='Parcela preço diário' style={{ margin: "2px 0px", fontWeight: "bold" }}>Preço diário</p>
                        <p aria-label='Cálculo' style={{ margin: "0"}} className='detalhe'>{artigosJSON[props.id - 1].dailyRentalPrice}€ / dia x {props.days} dias</p>
                    </TextInner>
                    <PriceInner>
                        <p style={{ margin: "0", fontWeight: "600" }} aria-label='Preço diário total'>{props.valor}€</p>
                    </PriceInner>
                </ServiceConatiner>
                <ServiceConatiner>
                    <TextInner>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p aria-label='Parcela taxa de proteção' style={{ margin: "2px 0px", fontWeight: "bold" }}>Taxa de proteção</p><button onClick={handleIconClick} className='buttonInfo'><img style={{ width: "16px", height: "16px", marginLeft: "3px" }} src={iconInfo} alt="icone de informação"/></button>
                        </div>
                        <p aria-label='Cálculo' style={{ margin: "0"}} className='detalhe'>{artigosJSON[props.id - 1].dailyRentalPrice}€ x 5% + 2€</p>
                    </TextInner>
                    <PriceInner>
                        <p style={{ margin: "0", fontWeight: "600" }} aria-label='Valor total da taxa de proteção'>{props.taxa}€</p>
                    </PriceInner>
                </ServiceConatiner>
                <ServiceConatiner>
                    <TextInner>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p style={{ margin: "2px 0px", fontWeight: "bold" }} aria-label='Parcela extras'>Extras</p>
                        </div>
                        {props.OpExtras.map((option) => (
                                <p style={{ margin: "0"}} className='detalhe' aria-label='opção'>•{"\u00A0\u00A0"}{option}</p>
                        ))}
                    </TextInner>
                    <PriceInner>
                        <p style={{ margin: "0", fontWeight: "600" }} aria-label='Valor total dos extras'>{props.extras}€</p>
                    </PriceInner>
                </ServiceConatiner>
                <div style={{ textAlign: "center" }}>
                    <button className='btncupao' onClick={vouchers}aria-label='Para inserir cupão'>+ Inserir cupão</button>
                    <p style={{ margin: "5px 0 0 0", fontWeight: "600" }}>Total:</p>
                    <p style={{ margin: "0", fontWeight: "bold", color: "#00c17c", fontSize: "20px" }} aria-label='Valor total do aluguer a pagar'>{props.total}€</p>
                </div>


            </SecondContainer>
        </MainContainer>
    );
};

const ParagraphMessageModal1p = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1rem;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 15px 10px;
  background-color: white;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  border-radius: 5px;
`;
const FirstContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const SecondContainer = styled.div`
  width: 100%;

  .btncupao{
    background-color: transparent;
    border: none;
    outline: none;
    color: #00c17c;
    font-size: 12px;
    font-weight: 600;
    margin: 20px 0px;
  }
`;
const ServiceConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TextInner = styled.div`
  width: 75%;
  font-size: 13px;
  padding: 5px 5px 5px 30px;
  border-right: 2px solid #e4e4e4;
  .buttonInfo{
      border: none;
      background: none;
    }
  .detalhe{
    font-size: 14px;
    font-weight: 500;
  }
`;
const PriceInner = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;






export default PreviewValorTotal;