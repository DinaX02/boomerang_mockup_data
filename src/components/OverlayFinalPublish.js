import React from 'react'
import styled from "styled-components";

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1.5px);
  z-index: 999;
`;

const ContentWrapper = styled.div`
  // background: #F8F8F8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const OverlayFinalPublish = ({ children }) => {
  return (
    <OverlayWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </OverlayWrapper>
  );
};

export default OverlayFinalPublish