import React from "react";
import styled from "styled-components";
import Downshift from "downshift";
import marcasJSON from "../data/marcasRoupa.json";
import {useDispatch, useSelector } from "react-redux";
import { updateProgressPublish1 } from "../redux/publicarSlice";

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

const Asterisk = styled.span`
  color: #00c17c;
  margin-left: 5px;
  margin-right: 5px;
`;

const InfoIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  margin-bottom: 1rem;
`;

const MandatoryField = styled.span`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
`;

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 20px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const suggestions = marcasJSON;

const InputBrands = (props) => {
  const dispatch = useDispatch();

  const selectedOptionMarcaValue = useSelector(
    (state) => state.Publicar1.progressPublish1.marcas
  );

  const handleInputChange = (inputValue) => {
    dispatch(updateProgressPublish1({ marcas: inputValue }));
  };

  return (
    <Container>
      <ButtonWrapper>
        <InfoIconContainer>Marca</InfoIconContainer>
        <Downshift
          onChange={(selectedItem) => handleInputChange(selectedItem)}
          itemToString={(item) => (item ? item : "")}
          inputValue={selectedOptionMarcaValue}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            selectedItem,
            highlightedIndex,
          }) => (
            <div>
              <StyledInput
                {...getInputProps({
                  placeholder: "Ex: Gucci",
                  value: inputValue,
                  onChange: (e) => handleInputChange(e.target.value),
                })}
                style={{ width: '100%' }}
              />
              {isOpen && inputValue ? (
                <div>
                  {Object.keys(suggestions.marcas).map((group) => (
                    <div key={group}>
                      {suggestions.marcas[group]
                        .filter(
                          (brand) =>
                            !inputValue ||
                            brand.toLowerCase().startsWith(inputValue.toLowerCase())
                        )
                        .slice(0, 5)
                        .map((brand, index) => (
                          <div
                            {...getItemProps({
                              key: brand,
                              index,
                              item: brand,
                              style: {
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "lightgray"
                                    : "white",
                                fontWeight:
                                  selectedItem === brand ? "600" : "normal",
                                padding: '12px 20px',
                                borderRadius: '0 0 5px 5px',
                                marginTop: "0.3em",
                              },
                            })}
                          >
                            {brand}
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </Downshift>
        <MandatoryField>
          <Asterisk>*</Asterisk> Campo Obrigatório
        </MandatoryField>
      </ButtonWrapper>
    </Container>
  );
};

export default InputBrands;