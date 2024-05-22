import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HomePageWeb from './HomePageWeb/HomePageWeb';
import Homepage from './Homepage';

const HomepageGeral = () => {

  const isMobile = useMediaQuery({ maxWidth: 599 });

  return (
    <div>
      {isMobile ? <Homepage /> : <HomePageWeb />}
    </div>
  );
};

export default HomepageGeral;