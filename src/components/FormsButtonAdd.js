import React from "react";
import styled from "styled-components";

const FormsButtonAdd = (props) => {


  return (
      <FormsButton>
        <FormsButtonOrg>
          <p>{props.name}</p> <Adder>+</Adder>
        </FormsButtonOrg>
      </FormsButton>
  );
};

const FormsButton = styled.button`
margin: auto;
width: 90%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
border-radius: 5px;
background: #FFF;
font-weight: 500;
font-size: 94%;
outline: 0;
border: 0;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
p{
  margin: 0;
}
@media only screen and (min-width: 600px) {
  width: 380px !important;
}
@media only screen and (max-width: 375px) {
padding-left: 15px !important;
}
}`

const FormsButtonOrg = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 15px;
padding-left: 35px;
`

const Adder = styled.p`
font-size: 25px;
color: #00C17C;
`


export default FormsButtonAdd;
