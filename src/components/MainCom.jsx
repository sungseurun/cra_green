import React from 'react';
import Section1Com from './main/Section1Com';
import Section2Com from './main/Section2Com';

function MainCom({modalOpen}){
  return(
    <main id="main">
      <Section1Com/>
      <Section2Com modalOpen={modalOpen}/>
    </main>

  );
};

export default MainCom;