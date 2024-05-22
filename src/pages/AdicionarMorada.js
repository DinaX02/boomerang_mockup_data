import React, { useState, useRef } from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 25px 30px;
`;

const AddMorada = styled.div`
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

const AdicionarMorada = () => {
    const [morada, setMorada] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [cidade, setCidade] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const navigate = useNavigate();

    // Refs para os inputs
    const localidadeRef = useRef(null);
    const cidadeRef = useRef(null);
    const codigoPostalRef = useRef(null);

    const handleFormSubmit = () => {
        // event.preventDefault();

        if (!morada || !localidade || !cidade || !codigoPostal) {
            // Lógica de tratamento de erro, se necessário
            return;
        }


        // Armazene apenas a string da morada no localStorage
        const storedMoradas = JSON.parse(localStorage.getItem('moradas')) || [];
        storedMoradas.push(morada);
        localStorage.setItem('moradas', JSON.stringify(storedMoradas));

        // Navegue de volta para a página de alugar morada
        navigate('/alugar-morada', { state: { moradas: storedMoradas } });
    };

    const handleKeyDown = (event, ref) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            ref.current.focus();
        }
    };

    return (
        <div>
            <Header name="Adicionar Morada" />
            <MainContainer>

                <form  style={{ marginTop: "100px" }}>
                    <AddMorada>
                        <input type="text" name="Morada" value={morada} onChange={(e) => setMorada(e.target.value)}
                            placeholder="Adicionar Morada"
                            aria-label='Caixa de texto para escrever a morada'
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required
                            onKeyDown={(e) => handleKeyDown(e, localidadeRef)}
                        />
                        <span>*</span>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="localidade" value={localidade} onChange={(e) => setLocalidade(e.target.value)}
                            placeholder="Localidade"
                            aria-label='Caixa de texto para escrever a localidade'
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required
                            ref={localidadeRef}
                            onKeyDown={(e) => handleKeyDown(e, cidadeRef)}
                        />
                        <span>*</span>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}
                            placeholder="Cidade"
                            aria-label='Caixa de texto para escrever a cidade'
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required
                            ref={cidadeRef}
                            onKeyDown={(e) => handleKeyDown(e, codigoPostalRef)}
                        />
                        <span>*</span>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="codigoPost" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)}
                            placeholder="Código Postal"
                            aria-label='Caixa de texto para escrever o código postal'
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required
                            ref={codigoPostalRef}
                            onKeyDown={(e) => handleKeyDown(e, codigoPostalRef)}
                        />
                        <span>*</span>
                    </AddMorada>
                    <h6><span style={{ color: "#65d9b0" }}>*</span> Campo Obrigatório</h6>
                    <ConfButton>
                        <Button type="submit" text="Guardar" onClick={handleFormSubmit}/>
                        {/* <input type="submit" value="Guardar" style={{
                            backgroundColor: "#343541",
                            width: "144px",
                            height: "36px",
                            border: "none",
                            borderRadius: "5px",
                            color: "white",
                            fontSize: "15px",
                            fontWeight: "bold",
                            outline: "none",
                        }} /> */}
                    </ConfButton>


                </form>



            </MainContainer>
        </div>
    );
};

export default AdicionarMorada;