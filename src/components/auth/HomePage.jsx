import React from 'react'
import Header from '../Header/HeaderMain';
import LogoComponent from '../Header/LogoBottom';
import Footer from '../Header/FooterMain';
import FooterComponent from '../Header/FooterLinks';
import Slider from '../Header/Slider';
import CombinedLayout from '../Header/CombinedLayout';

const HomePage = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <CombinedLayout/>
    {/* <CardComponent/> */}
    <FooterComponent/>
    <LogoComponent/> 
    <Footer/>
    
    </>
  )
}

export default HomePage