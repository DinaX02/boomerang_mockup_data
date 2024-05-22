import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

const Chip = (props) => {
    let url;
    let label;

    if (props.category) {
        url = `/results?type=articles&category=${props.category}`;
        label = props.category;
    } else if (props.brand) {
        url = `/results?type=articles&brand=${props.brand}`;
        label = props.brand;
    } else {
        // Handle case where neither category nor brand is provided
        return null; // or render a default value
    }

    return (
        <ChipLinkStyle to={url}>
            {label}
        </ChipLinkStyle>
    );
}

const ChipLinkStyle = styled(Link)`
      text-decoration: none;
      color: black;
      padding: 5px 10px;
      background-color: white;
      border: 1px solid #CACACE;
      border-radius: 5px;
      font-size: 12px;
  font-weight: 500;
`


export default Chip;
