import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Notification = (props) => {

  const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);

  const handleResize = () => {

    if (window.innerWidth <= 400) {
      setMaxDescriptionLength(18);
    } else if (window.innerWidth <= 800) {
      setMaxDescriptionLength(50);
    } else{
      setMaxDescriptionLength(90);
    }
  };

  useEffect(() => {

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const descriptionSizeControl = (text) => {
    return text.length > maxDescriptionLength
      ? `${text.substring(0, maxDescriptionLength)}...`
      : text;
  };

  return (
    <NotificationDiv>
      <NotificationImg alt='notificação' style={{ background: props.image ? `url(${props.image})` : '#2e2e2e' }}>{props.discount}</NotificationImg>
      <div>
      <p><b>{descriptionSizeControl(props.title)}</b></p>
      <p>{descriptionSizeControl(props.sub)}</p>
      </div>
       
    </NotificationDiv> 
  )
}

const NotificationDiv = styled.div`
border-radius: 5px;
background: #fff;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.09);
height: 105px;
display: flex;
flex-direction: row;
align-items: center;
font-size: 0.9rem;
margin-top: 25px;
width: 90vw !important;
p{
  margin-bottom: 5px;
}
`

const NotificationImg =styled.div`
width: 70px;
height: 70px;
min-width: 70px;
min-height: 70px;
border-radius: 500px;
margin-right: 20px;
margin-left: 20px;
background-size: cover !important;
background-position: center center;
font-size: 20px;
color: white;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
`


export default Notification