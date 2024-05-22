import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header/Header';
import styled from 'styled-components';


const ContainerFaq = styled.div`
width:90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2em auto; 
`;

const StyledAccordion = styled(Accordion)`
  && {
    width:90%;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  && {
    background-color: #fff;
    transition: background-color 0.3s;
    box-shadow: none;

    &:focus-within {
      background-color: #BEEFDE;
    }
  }
`;


const StyledAccordionDetails = styled(AccordionDetails)`
  && {
    background-color: #E8F9F3;
  }
`;

const FAQ = () => {
  return (
    <div>
      <Header name="FAQs - Perguntas frequentes"/>
      <ContainerFaq>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Como alugar uma peça de roupa?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Para alugar uma peça basta navegares pelo nosso catálogo e selecionar a peça de roupa desejada. Escolhe a data de aluguer pretendida e confirma a disponibilidade. Depois, procede ao checkout, onde preencherás os detalhes de entrega e pagamento. Receberás a confirmação do teu pedido diretamente na aplicação.
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          É possível alterar ou cancelar um pedido após a confirmação?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          O que está incluído no preço do aluguer?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          O que acontece se a peça de roupa não servir?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Como devolver a peça alugada?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          E se a peça chegar danificada ou em condições insatisfatórias?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Existem taxas por atraso na devolução?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Como posso garantir a qualidade e higiene das peças alugadas?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </StyledAccordionDetails>
      </StyledAccordion>

      </ContainerFaq>
    </div>
  );
}

export default FAQ;