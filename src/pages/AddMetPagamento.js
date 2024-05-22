import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 25px 30px;


  .mensagem{
    color: rgb (84,84,84);
    font-size: 13px;
  }
`;

const AddMetPagamentoContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  width: 100%;
  height: 45px;
  padding: 10px 0px 10px 30px;
  margin-bottom: 25px;
  display: flex;
  color: #65d9b0;
`;

const ConfButton = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

const AddMetPagamento = () => {
    const [novoCartao, setNovoCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [nomeTitular, setNomeTitular] = useState('');
    const [dataValidade, setDataValidade] = useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');
    const navigate = useNavigate();

    const handleNumeroCartaoChange = (e) => {
        const inputNumeroCartao = e.target.value.replace(/\D/g, ''); // Remove não números
        if (/^\d{0,16}$/.test(inputNumeroCartao)) { // Verifica se tem até 16 dígitos
            setNumeroCartao(inputNumeroCartao);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!novoCartao || !numeroCartao || !nomeTitular || !dataValidade || !codigoSeguranca) {
            // Lógica de tratamento de erro, se necessário
            return;
        }

        // Armazene apenas a string do novo cartão no localStorage
        const novosPagamentos = JSON.parse(localStorage.getItem('cartoes')) || [];
        novosPagamentos.push(numeroCartao);
        localStorage.setItem('cartoes', JSON.stringify(novosPagamentos));

        // Navegue de volta para a página de alugar morada
        navigate('/metodo-pagamento', { state: { cartoes: novosPagamentos } });
    };

    return (
        <div>
            <Header name="Adicionar Novo Cartão" />
            <MainContainer>
                <span className='mensagem'>Por motivos de segurança, a informação do cartão é encriptada.</span>
                <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
                    <AddMetPagamentoContainer>
                        <input type="text" name="NovoCartao" value={novoCartao} onChange={(e) => setNovoCartao(e.target.value)}
                            placeholder="Novo Cartão"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMetPagamentoContainer>
                    <AddMetPagamentoContainer>
                        <input type="text" name="NumeroCartao" value={numeroCartao} onChange={handleNumeroCartaoChange}
                            placeholder="Número do Cartão"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMetPagamentoContainer>
                    <AddMetPagamentoContainer>
                        <input type="text" name="NomeTitular" value={nomeTitular} onChange={(e) => setNomeTitular(e.target.value)}
                            placeholder="Nome do Titular"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMetPagamentoContainer>
                    <AddMetPagamentoContainer>
                        <input type="text" name="DataValidade" value={dataValidade} onChange={(e) => setDataValidade(e.target.value)}
                            placeholder="Data de Validade"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMetPagamentoContainer>
                    <AddMetPagamentoContainer>
                        <input type="text" name="CodigoSeguranca" value={codigoSeguranca} onChange={(e) => setCodigoSeguranca(e.target.value)}
                            placeholder="Código de Segurança"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMetPagamentoContainer>
                    <h6><span style={{ color: "#65d9b0" }}>*</span> Campo Obrigatório</h6>
                    <ConfButton>
                        {/* <Button type="submit" text="Guardar" /> */}
                                <input type="submit" value="Guardar" style={{
                            backgroundColor: "#343541",
                            width: "144px",
                            height: "36px",
                            border: "none",
                            borderRadius: "5px",
                            color: "white",
                            fontSize: "15px",
                            fontWeight: "bold",
                            outline: "none",
                        }} />
                    </ConfButton>
                </form>
            </MainContainer>
        </div>
    );
};

export default AddMetPagamento;