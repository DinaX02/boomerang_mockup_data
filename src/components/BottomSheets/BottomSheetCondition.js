import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Draggable from "react-draggable";
import styled from "styled-components";
import { FocusOn } from 'react-focus-on';

const ModalContainer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #eee;
  padding-bottom: 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: grab;
  min-height: 250px;

  @media (max-width: 500px) {
    min-height: 230px;}

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

`

const DragHandle = styled.div`
margin-top:15px;
width: 25%;
height: 4px;
background-color: #F8F8F8;
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
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 15px;
  background-color: #F8F8F8;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #CACACA !important;
  text-align: center;
  cursor: pointer !important;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const BottomSheet = React.forwardRef(({ onSelectOption }, ref) => {
  const [isOpen, setIsOpen] = useState(true);


  // const handleClose = () => {
  //   setIsOpen(false);
  //   onClose();
  // };

  const handleOptionSelect = (option) => {
    // console.log(`Opção selecionada: ${option}`);
    onSelectOption(option);
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
      <ModalContainer style={{ ...modalProps, transform: `translateY(${isOpen ? 0 : 100}%)` }} ref={ref}>
        <FocusOn enabled autoFocusLock={false}>
          <DragContainer>
            <DragHandle />
          </DragContainer>
          <ButtonContainer>
            <Button onTouchStart={() => handleOptionSelect("Muito Bom")}>Muito Bom</Button>
            <Button onTouchStart={() => handleOptionSelect("Bom")}>Bom</Button>
            <Button onTouchStart={() => handleOptionSelect("Satisfatório")}>Satisfatório</Button>
          </ButtonContainer>
        </FocusOn>
      </ModalContainer>
    </Draggable>
  );
});

export default BottomSheet;