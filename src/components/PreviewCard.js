import React, { useState, useEffect } from 'react';
import imgDefaultPreview from '../assets/icons/img_default_card_preview.svg';
import artigosJSON from "../data/artigos.json";

const PreviewCard = (props) => {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);

  const handleResize = () => {

    if (window.innerWidth <= 450) {
      setMaxDescriptionLength(40);
    } else {
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

  const imageArtigo = artigosJSON[props.id-1].images.length > 0
    ? artigosJSON[props.id-1].images[0]
    : imgDefaultPreview;

  return (
    <div className="containerPreview">
      <div className='imgCardPreview' style={{backgroundImage:`url(${imageArtigo})`}}>
      </div>
      <div className="textContainerPreview">
        <h2 className="titlePreview">{artigosJSON[props.id-1].title}</h2>
        <p className="descriptionPreview">
          {descriptionSizeControl(artigosJSON[props.id-1].description)}
        </p>
      </div>
      <div className="priceContainerPreview">
        <p className="priceLabelPreview">{artigosJSON[props.id-1].dailyRentalPrice}€ / dia</p>
        <p className="totalPreview">Total:</p>
        <p className="totalPricePreview">{props.valor}€</p>
      </div>
    </div>
  );
};

export default PreviewCard;