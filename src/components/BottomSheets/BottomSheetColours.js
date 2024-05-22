import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Draggable from "react-draggable";
import styled from "styled-components";
import MulticorSvg from "../../assets/cores/multicolor.svg";
import PretoSvg from "../../assets/cores/preto.svg";
import BrancoSvg from "../../assets/cores/branco.svg";
import VermelhoSvg from "../../assets/cores/vermelho.svg";
import VerdeSvg from "../../assets/cores/verde.svg";
import AzulSvg from "../../assets/cores/azul.svg";
import AmareloSvg from "../../assets/cores/amarelo.svg";
import { FocusOn } from 'react-focus-on';

const ModalContainer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: grab;
  max-height: 415px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    min-height: 230px;
  }
`;

const DragContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  background-color: #343541;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 30px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const DragHandle = styled.div`
  margin-top: 15px;
  width: 25%;
  height: 4px;
  background-color: #f8f8f8;
  cursor: grab;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 1.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 40px;
  padding: 15px;
  background-color: #f8f8f8;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #cacaca !important;
  text-align: center;
  cursor: pointer !important;
  padding-left: 30px;

  &:hover {
    background-color: #dcdcdc;
  }

  img {
    margin-right: 15px;
    max-height: 20px;
  }
`;

const BottomSheetColours = React.forwardRef(
  ({ onSelectOptionColours }, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOptionSelectColours = (option) => {
      // console.log(`Opção selecionada: ${option}`);
      onSelectOptionColours(option);
    };

    const modalProps = useSpring({
      opacity: isOpen ? 1 : 0,
    });

    return (
      <Draggable
        axis="y"
        bounds={{ top: 0, bottom: window.innerHeight - 250 }}
        position={{ x: 0, y: isOpen ? 0 : window.innerHeight - 250 }}
        onStop={() => setIsOpen(false)}
        nodeRef={ref}
      >
        <ModalContainer
          style={{
            ...modalProps,
            transform: `translateY(${isOpen ? 0 : 100}%)`,
          }}
          ref={ref}
        >
          <FocusOn enabled autoFocusLock={false}>
            <DragContainer>
              <DragHandle />
            </DragContainer>
            <ButtonContainer>
              <Button onTouchStart={() => handleOptionSelectColours("Multicor")}>
                <img src={MulticorSvg} alt="multicor_img" /> Multicor
              </Button>
              <Button onTouchStart={() => handleOptionSelectColours("Preto")}>
                <img src={PretoSvg} alt="preto_img" /> Preto
              </Button>
              <Button onTouchStart={() => handleOptionSelectColours("Branco")}>
                <img src={BrancoSvg} alt="branco_img" /> Branco
              </Button>
              <Button onTouchStart={() => handleOptionSelectColours("Vermelho")}>
                <img src={VermelhoSvg} alt="vermelho_img" /> Vermelho
              </Button>
              <Button onTouchStart={() => handleOptionSelectColours("Verde")}>
                <img src={VerdeSvg} alt="verde_img" /> Verde
              </Button>
              <Button onTouchStart={() => handleOptionSelectColours("Azul")}>
                <img src={AzulSvg} alt="azul_img" /> Azul
              </Button>
              <Button onTouchStart={() => handleOptionSelectColours("Amarelo")}>
                <img src={AmareloSvg} alt="amarelo_img" /> Amarelo
              </Button>
            </ButtonContainer>
          </FocusOn>
        </ModalContainer>
      </Draggable>
    );
  }
);

export default BottomSheetColours;
