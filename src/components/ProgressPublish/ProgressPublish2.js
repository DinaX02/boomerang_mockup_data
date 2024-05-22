import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ButtonForOpenBottomSheet from "../ButtonForOpenBottomSheet";
import HeaderPublish from "../Header/HeaderPublicar";
import Draggable from "react-draggable";
import BottomSheetSizes from "../BottomSheets/BottomSheetSize";
import { useDispatch, useSelector } from "react-redux";
import { updateProgressPublish1 } from "../../redux/publicarSlice";
import BottomSheetColours from "../BottomSheets/BottomSheetColours";
import BottomSheetCategories from "../BottomSheets/BottomSheetCategories";
import ModalAlertaForPublish from "./ModalAlertaForPublish";
import InputBrands from "../InputBrands";
import CustomizedSteppers from "../ProgressBar";

const SpaceTopComponent = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDoisBtn = styled.div`
position: fixed;
bottom: 3.5em;
width: 100%;
display: flex;
justify-content: space-evenly;
z-index: -1;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressPublish2 = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheetColoursOpen, setBottomSheetColoursOpen] = useState(false);
  const [bottomSheetCategoriesOpen, setBottomSheetCategoriesOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const [fecharModal, setFecharModal] = useState(true); // fechar modal de alerta de voltar para a homepage (perder dados inseridos)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedOption = useSelector(
    (state) => state.Publicar1.progressPublish1.size
  );

  const selectedOptionColours = useSelector(
    (state) => state.Publicar1.progressPublish1.colour
  );

  const selectedOptionCategories = useSelector(
    (state) => state.Publicar1.progressPublish1.categories
  );

  const selectedOptionMarcaValue = useSelector(
    (state) => state.Publicar1.progressPublish1.marcas
  );

  const [nextButtonDisabled, setNextButtonDisabled] = useState(!selectedOption || !selectedOptionColours || !selectedOptionCategories);

   // Abre e fecha o bottom sheet dos tamanhos

  const handleToggleBottomSheet = () => {
    setBottomSheetColoursOpen(false);
    setBottomSheetCategoriesOpen(false);
    setBottomSheetOpen(!bottomSheetOpen);
  };

  // Abre e fecha o bottom sheet das cores

  const handleToggleBottomSheetColours = () => {
    setBottomSheetOpen(false);
    setBottomSheetCategoriesOpen(false);
    setBottomSheetColoursOpen(!bottomSheetColoursOpen);
  };

  // Abre e fecha o bottom sheet das categorias

  const handleToggleBottomSheetCategories = () => {
    setBottomSheetOpen(false);
    setBottomSheetColoursOpen(false);
    setBottomSheetCategoriesOpen(!bottomSheetCategoriesOpen);
  };

  // Fecha o bottom sheet se clicar fora -> evitar sobreposição

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setBottomSheetOpen(false);
      setBottomSheetColoursOpen(false);
      setBottomSheetCategoriesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleModalClick);

    return () => {
      document.removeEventListener("click", handleModalClick);
    };
  }, []);

  useEffect(() => {
    setNextButtonDisabled(
      !selectedOption || !selectedOptionColours || !selectedOptionCategories
    );
  }, [selectedOption, selectedOptionColours, selectedOptionCategories]);

  useEffect(() => {
  }, [selectedOptionMarcaValue]);

  const handleGoBackStepPublish = () => {
    navigate("/publicar-page");
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-3");
  };

  const handleOptionSelect = (option) => {
    dispatch(updateProgressPublish1({ size: option }));
    setBottomSheetOpen(false);
    setNextButtonDisabled(false);
  };

  const handleOptionSelectColours = (option) => {
    dispatch(updateProgressPublish1({ colour: option }));
    setBottomSheetColoursOpen(false);
  };

  const handleOptionSelectCategories = (option) => {
    dispatch(updateProgressPublish1({ categories: option }));
    setBottomSheetCategoriesOpen(false);
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  }

  const handleChangeStepInProgressBar = (newStep) => { // passar para o proximo step
  };

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler}/>
      <CustomizedSteppers
      activeStep={1}
      onStepChange={handleChangeStepInProgressBar}
      onNext={handleNextStepPublish}
      onBack={handleGoBackStepPublish}
      />
      <ModalAlertaForPublish
          fecharModal={fecharModal}
          setFecharModal={setFecharModal}
          alert={alert}
          message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
        />
      {/*  bottom sheet dos tamanhos */}
      {bottomSheetOpen && (
        <ModalOverlay className="modal-overlay">
          <Draggable
            cancel=".no-drag"
            bounds="parent"
            positionOffset={{ x: "0", y: "0" }}
            onStop={() => setBottomSheetOpen(false)}
            nodeRef={bottomSheetRef}
          >
            <BottomSheetSizes
              ref={bottomSheetRef}
              onClose={() => setBottomSheetOpen(false)}
              onSelectOptionSizes={handleOptionSelect}
            />
          </Draggable>
        </ModalOverlay>
      )}

      {/*  bottom sheet dos cores */}
      {bottomSheetColoursOpen && (
        <ModalOverlay className="modal-overlay">
          <Draggable
            cancel=".no-drag"
            bounds="parent"
            positionOffset={{ x: "0", y: "0" }}
            onStop={() => setBottomSheetColoursOpen(false)}
            nodeRef={bottomSheetRef}
          >
            <BottomSheetColours
              ref={bottomSheetRef}
              onClose={() => setBottomSheetColoursOpen(false)}
              onSelectOptionColours={handleOptionSelectColours}
            />
          </Draggable>
        </ModalOverlay>
      )}

      {/*  bottom sheet das categorias */}
      {bottomSheetCategoriesOpen && (
        <ModalOverlay className="modal-overlay">
          <Draggable
            cancel=".no-drag"
            bounds="parent"
            positionOffset={{ x: "0", y: "0" }}
            onStop={() => setBottomSheetCategoriesOpen(false)}
            nodeRef={bottomSheetRef}
          >
            <BottomSheetCategories
              ref={bottomSheetRef}
              onClose={() => setBottomSheetCategoriesOpen(false)}
              onSelectOptionCategories={handleOptionSelectCategories}
            />
          </Draggable>
        </ModalOverlay>
      )}

      <SpaceTopComponent>
        <ButtonForOpenBottomSheet
          btnName="Tamanho"
          onClick={handleToggleBottomSheet}
          selectedOption={selectedOption}
        />
        <ButtonForOpenBottomSheet
          btnName="Cor"
          onClick={handleToggleBottomSheetColours}
          selectedOption={selectedOptionColours}
        />
        <ButtonForOpenBottomSheet btnName="Categorias" onClick={handleToggleBottomSheetCategories}
          selectedOption={selectedOptionCategories} />

        <InputBrands selectedOptionMarcaValue={selectedOptionMarcaValue}/>

      </SpaceTopComponent>
      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button
          text="Próximo"
          onClick={handleNextStepPublish}
          disable={nextButtonDisabled}
        />
      </ContainerDoisBtn>
    </div>
  );
};

export default ProgressPublish2;