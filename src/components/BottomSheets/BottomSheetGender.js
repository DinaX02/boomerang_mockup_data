import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Draggable from "react-draggable";
import { FocusOn } from 'react-focus-on';

const ModalContainer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  /* padding-bottom: 16px; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: grab;
  z-index: 1;
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

  &:active {
    background-color: #dcdcdc;
  }

`;

const BottomSheet = React.forwardRef((props, ref) => {
    // const [isOpen, setIsOpen] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    const springProps = useSpring({
        from: { transform: "translateY(100%)" }, // Posição inicial (fora do ecra)
        to: { transform: "translateY(0%)" },    // Posição final (ecra cheio)
    });

    const handleOptionSelect = (option) => {
        props.onSelectOption(option);
    };

    // const modalProps = useSpring({
    //     opacity: isOpen ? 1 : 0,
    // });


    return (
        <Draggable
            axis="y"
            bounds={{ top: 0, bottom: window.innerHeight - 250 }}
            nodeRef={ref}
        >
            <ModalContainer style={isDragging ? {} : springProps} ref={ref} >
                <FocusOn enabled autoFocusLock={false}>
                    <DragContainer className="handle" onClick={props.handleClickDrag}>
                        <DragHandle />
                    </DragContainer>
                    <ButtonContainer>
                        <Button onTouchStart={() => handleOptionSelect("Masculino")} type="button">Masculino</Button>
                        <Button onTouchStart={() => handleOptionSelect("Feminino")} type="button">Feminino</Button>
                        <Button onTouchStart={() => handleOptionSelect("Outro")} type="button">Outro</Button>
                        <Button onTouchStart={() => handleOptionSelect("Prefiro não dizer")} type="button">Prefiro não dizer</Button>
                    </ButtonContainer>
                </FocusOn>
            </ModalContainer>
        </Draggable>
    );
});

export default BottomSheet;