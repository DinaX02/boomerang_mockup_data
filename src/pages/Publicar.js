import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressPublish1 } from "../redux/publicarSlice";
import { useNavigate } from "react-router-dom";
import CustomizedSteppers from "../components/ProgressBar";
import ModalAlertaForPublish from "../components/ProgressPublish/ModalAlertaForPublish";
import HeaderPublish from "../components/Header/HeaderPublicar";
import EliminarImage from "../assets/icons/eliminar.svg";
import Button from "../components/Button";

const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  margin-top:2em;
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: 500;
  margin-bottom: 0.3em;
  font-size: 14px;
`;

const ProductFormInput = styled.input`
  padding: 0.5rem;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
  border: none;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  max-width: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 0.6em;
`;

const ImagePreview = styled.div`
  position: relative;
  margin-right: 0.5rem;
  display: inline-block;
`;

const ImagePreviewImg = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0.8em;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 17px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 20px;
`;

const BtnProximoPublicar = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
padding-left: 1em;
padding-right: 1em;
margin-bottom: 2em;
padding-bottom:0.5em;
`;

const AddImgInputPublish = styled.label`
  border: 1px solid #cacaca;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 5px;
`;

const DescriptionAddImage= styled.p`
margin-top:0.5em
`
const ImageUpload = styled.div`
display: flex;
flex-direction: column !important;
align-items: center;
justify-content: center;
padding: 0.5rem;
border-radius: 5px;
/* margin-top: 1em; */
box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
height: 300px;
`
const ProductFormInput2 = styled.textarea`
padding: 0.5rem;
box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
border-radius: 5px;
outline: none;
border: none;
`

const Publicar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

   // Dados da store relativos a etapa 1 de publicar
  const { title, description, imageUrls, countChar } = useSelector(
    (state) => state.Publicar1.progressPublish1
  );

  const handleGoToProgress2 = () => {
      // console.log("cliquei no btn")
    dispatch(
      updateProgressPublish1({
        title,
        description,
        imageUrls,
        countChar,
      })
    );
    navigate("/progressPublish-2");
  };

  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  const limitImages = 5; // define o limite de img uploaded

  const isButtonDisabled = !title || !description || imageUrls.length === 0;

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    // verifica se o upload das img nao excede o limite definido
    if (imageUrls.length + newImages.length > limitImages) {
      alert(`Não pode adicionar mais de 5 imagens!`);
      return;
    }

    // atualizar a store redux com as novas img uploaded
    const newImageUrls = newImages.map((image) =>
      URL.createObjectURL(image)
    );

    // atualizar a store redux com as modificacoes feitas ao array das img
    dispatch(
      updateProgressPublish1({
        imageUrls: [...imageUrls, ...newImageUrls],
      })
    );
  };

  const handleRemoveImage = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);

    dispatch(updateProgressPublish1({ imageUrls: newImageUrls }));
  };

  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value;

    if (inputDescription.length <= 150) {
      dispatch(
        updateProgressPublish1({
          description: inputDescription,
          countChar: inputDescription.length,
        })
      );
    }
  };

  const [fecharModal, setFecharModal] = useState(true);

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  };

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler} />
      <ModalAlertaForPublish
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        alert={alert}
        message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
      />
      <CustomizedSteppers
        activeStep={activeStep}
        onStepChange={handleStepChange}
      />
      <ProductForm>
        <ImageUpload htmlFor="images">
          <AddImgInputPublish htmlFor="images" className="addImgInputPublish">
            <span className="colourGreenAsterisk">+</span> Adicionar Fotografias
            <span className="colourGreenAsterisk">*</span>
          </AddImgInputPublish>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{
              opacity: 0,
              position: "absolute",
              zIndex: -1,
              maxWidth: "600px",
              width: "90%",
            }}
          />
          <DescriptionAddImage>Adiciona até 5 fotografias</DescriptionAddImage>

          <ImagePreviewContainer>
            {imageUrls.map((imageUrl, index) => (
              <ImagePreview key={index} className="imagePreview">
                <ImagePreviewImg
                  className="imagePreviewImg"
                  src={imageUrl}
                  alt={`Imagem da peça ${index}`}
                />
                <RemoveImageButton
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                >
                  <img src={EliminarImage} alt="eliminar_img" />
                </RemoveImageButton>
              </ImagePreview>
            ))}
          </ImagePreviewContainer>
        </ImageUpload>

        <Label htmlFor="title">
          Título <span className="colourGreenAsterisk">*</span>
        </Label>
        <ProductFormInput2
          className="productFormInput"
          type="text"
          id="title"
          placeholder="Ex: Casaco de Pele Preto" style={{fontSize:"15px"}}
          value={title}
          onChange={(e) =>
            dispatch(
              updateProgressPublish1({
                title: e.target.value,
                description,
                imageUrls,
                countChar,
              })
            )
          }
        />

        <Label htmlFor="description">
          Descrição <span className="colourGreenAsterisk">*</span>
          <span className="countCharDescription">{countChar}/150</span>
        </Label>
        <ProductFormInput
          className="productFormInput"
          id="description"
          placeholder="Ex: Casaco de Pele em bom estado." style={{fontSize:"15px"}}
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
          data-testid="description-input"
        />

        <Label htmlFor="description">
          <span className="colourGreenAsterisk">*</span> Campo Obrigatório
        </Label>
        <BtnProximoPublicar>
          <Button
            text="Próximo"
            onClick={handleGoToProgress2}
            disable={isButtonDisabled}
          />
        </BtnProximoPublicar>
      </ProductForm>
    </div>
  );
};

export default Publicar;