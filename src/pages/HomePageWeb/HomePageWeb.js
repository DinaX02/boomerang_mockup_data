import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import InfiniteCloset from "./InfiniteCloset";
import KnowMore from "./KnowMoreHere";
import SustainabilityServices from "./SustainabilityServices";
import EcoFriendly from "./EcoFriendly";
import DownloadApp from "./DownloadApp";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from "./Footer";

const FlexContainer = styled.div`
 display: unset;
 flex-direction: unset;

 @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
 }
`;

const HomePageWeb = () => {
  return (
    <div style={{backgroundColor: "#F8F8F8"}}>
      <Helmet>
        <title>Boomerang</title>
        <meta name="description" content="App para aluguer de roupa peer-to-peer com o objetivo de reduzir o desperdício têxtil." />
        <meta name="keywords" content="aluguer, roupa, peer-to-peer, sustentável, eco-friendly" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <FlexContainer>
        <HeroSection />
        <InfiniteCloset />
        <KnowMore />
        <SustainabilityServices />
        <EcoFriendly />
        <DownloadApp />
      </FlexContainer>
      <Footer />
    </div>
  );
};

export default HomePageWeb;