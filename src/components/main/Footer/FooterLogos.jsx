import React from 'react';
import { Box } from '@mui/material';

const FooterLogos = () => {
  const logos = [
    { src: '../images/clientImg.png', alt: 'Data.Govn' },
    { src: '../images/clientImg2.png', alt: 'India.govn.in' },
    { src: '../images/clientImg3.png', alt: 'MyGovn' },
    { src: '../images/clientImg4.png', alt: 'Digital India' },
    { src: '../images/clientImg5.png', alt: 'Department of Panchayats & Rural Development' },
    { src: '../images/clientImg6.png', alt: 'Egiye Bangla' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3dddc',
        padding: 2,
      }}
    >
      {logos.map((logo, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo.src} alt={logo.alt} style={{ height: '50px' }} /> {/* Adjusted height */}
        </Box>
      ))}
    </Box>
  );
};

export default FooterLogos;
