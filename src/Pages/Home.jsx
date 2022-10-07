import React from 'react';
import Banner1 from '../Components/Elemants/Banner1';
import Hero from '../Components/Elemants/Hero';
import OurPlan from '../Components/Elemants/OurPlan';
import WhatHF from '../Components/Elemants/WhatHF';
import Whitepaper from '../Components/Elemants/Whitepaper';
import Faqs from '../Components/Utiles/Faqs';


const Home = () => {
  return (
    <>
     <Hero/>
     <WhatHF/>
     <Banner1/>
     <OurPlan/>
     <Whitepaper/>
     <Faqs/>
     
    </>
  )
}

export default Home