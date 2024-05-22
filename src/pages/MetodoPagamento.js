import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import NavbarWeb from '../components/NavbarWeb';
import { Link} from 'react-router-dom';
import addPagamentoIcon from '../assets/icons/icon_AddMorada.svg';
import iconPagamentoSelect from '../assets/icons/selectedAdress.svg';
import styled from "styled-components";
import PreviewCard from '../components/PreviewCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgressRent } from '../redux/rentSlice';

const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: 25px;
`;

  

const PagamentoSelecionado = styled.div`
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

const ConteudoPagamento = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden !important;
  font-size: 13px;
  font-weight: 400;
`;


const BotaoRemover = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.selecionada ? '#ffffff' : '#000000')};
  cursor: pointer;
`;

const IconPagamentoSelect = styled.img`
  width: 12px;
  visibility: ${props => (props.selecionada ? 'block' : 'hidden')};
  margin: 0px 10px 0px 5px;
`;


const SelecionarPagamento = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);;
  width: 100%;
  height: 45px;
  padding: 10px 0px 10px 30px;
  margin-bottom: 30px;
`;

const ConfirmButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 60px;
`;



const MetodoPagamento = () => {
    const [pagamentos, setPagamentos] = useState([]);
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.Rent.progressRentList);
    const [buttonDisable, setButtonDisable] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedPagamentos = JSON.parse(localStorage.getItem('cartoes')) || [];
        setPagamentos(storedPagamentos);
    }, []);

    const formatarPagamento = (pagamento) => {
        const ultimosDigitos = pagamento.slice(-3);
        const censurado = '*';
        return `${censurado}${ultimosDigitos}`;
    };



    const handleRemoverPagamento = (index) => {
        const novosPagamentos = [...pagamentos];
        novosPagamentos.splice(index, 1);
        setPagamentos(novosPagamentos);
        localStorage.setItem('cartoes', JSON.stringify(novosPagamentos));
    };

    const handleNextStep = () => {
        dispatch(updateProgressRent({ index: 0, updatedData: {pagamento: pagamentoSelecionado} }));
        const rentals= localStorage.getItem("rentals");
        if(rentals){
            localStorage.setItem("rentals", {rentals, ...list})
        }else{
            localStorage.setItem("rentals", list)
        }
        navigate("/alugar-progresso");
      };


    return (
        <div>
            <NavbarWeb />
            <Header name="Método de pagamento" />
            <MainContainer>
            <PreviewCard id={list.article_id} valor={list.total}/>
                <div style={{paddingTop: '25px'}}>

                {pagamentos.map((pagamento, index) => (
                    <PagamentoSelecionado
                        key={index}
                        selecionada={pagamento === pagamentoSelecionado}
                        onClick={() => {setPagamentoSelecionado(pagamento); ; setButtonDisable(true)}}
                    >
                        <ConteudoPagamento>
                            <IconPagamentoSelect
                                src={iconPagamentoSelect}
                                alt="icon"
                                selecionada={pagamento === pagamentoSelecionado}
                            />
                            <p style={{margin:"0"}}>Visa({formatarPagamento(pagamento)})</p>
                        </ConteudoPagamento>
                        <BotaoRemover
                            onClick={() => handleRemoverPagamento(index)}
                            selecionada={pagamento === pagamentoSelecionado}
                        >
                            X
                        </BotaoRemover>
                    </PagamentoSelecionado>
                ))}
                </div>


                <Link to={"/adicionar-pagamento"}>
                    <SelecionarPagamento>

                        <button style={{
                            backgroundColor: "transparent",
                            border: "none",
                            width: "90%",
                            textAlign: "left",
                            fontSize: "13px",
                            fontWeight: "500",

                        }}>Adicionar Pagamento</button>
                        <img style={{
                            width: "20px",


                        }} src={addPagamentoIcon} alt="Adicioanar Pagamento"></img>
                    </SelecionarPagamento>
                </Link>
                <ConfirmButton>
                <Button onClick={handleNextStep} disable={!buttonDisable} text="Confirmar"/>
                </ConfirmButton>

            </MainContainer>
        </div>
    )
}

export default MetodoPagamento