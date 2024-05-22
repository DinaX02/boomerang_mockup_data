import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';

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

const AddAdressComponent = () => {
  const [morada, setMorada] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [cidade, setCidade] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!morada || !localidade || !cidade || !codigoPostal) {
        return;
    }

    const storedMoradas = JSON.parse(localStorage.getItem('moradas')) || [];
    storedMoradas.push(morada);
    localStorage.setItem('moradas', JSON.stringify(storedMoradas));

    navigate('/progressPublish-5', { state: { moradas: storedMoradas } });
};


  return (
      <div>
          <Header name="Adicionar Morada" />
          <MainContainer>

              <form onSubmit={handleFormSubmit} style={{ marginTop: "100px" }}>
                  <AddMorada>
                      <input type="text" name="Morada" value={morada} onChange={(e) => setMorada(e.target.value)}
                          placeholder="Adicionar Morada"
                          style={{
                              border: "none",
                              width: "90%",
                              textAlign: "left",
                              fontSize: "15px",
                              outline: "none",
                          }}
                          required />
                      <span>*</span>
                  </AddMorada>
                  <AddMorada>
                      <input type="text" name="localidade" value={localidade} onChange={(e) => setLocalidade(e.target.value)}
                          placeholder="Localidade"
                          style={{
                              border: "none",
                              width: "90%",
                              textAlign: "left",
                              fontSize: "15px",
                              outline: "none",
                          }}
                          required />
                      <span>*</span>
                  </AddMorada>
                  <AddMorada>
                      <input type="text" name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}
                          placeholder="Cidade"
                          style={{
                              border: "none",
                              width: "90%",
                              textAlign: "left",
                              fontSize: "15px",
                              outline: "none",
                          }}
                          required />
                      <span>*</span>
                  </AddMorada>
                  <AddMorada>
                      <input type="text" name="codigoPost" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)}
                          placeholder="Código Postal"
                          style={{
                              border: "none",
                              width: "90%",
                              textAlign: "left",
                              fontSize: "15px",
                              outline: "none",
                          }}
                          required />
                      <span>*</span>
                  </AddMorada>
                  <h6 style={{fontSize:"14px", fontWeight:"500"}}><span style={{ color: "#65d9b0" }}>*</span> Campo Obrigatório</h6>
                  <ConfButton>
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

export default AddAdressComponent;