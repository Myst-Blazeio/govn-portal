/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  SliderContainer,
  SliderImage,
  SliderText,
  Title,
  Subtitle,
  Logo,
  ArrowButton,
} from '../../styles/Body.styled';

const sliderItems = [
  {
    title: "Water is life,",
    subtitle1: "and clean water",
    subtitle2: "means health",
    image: "../banner/images.png",
  },
  {
    title: "Travel made",
    subtitle1: "trouble-free",
    subtitle2: "",
    image: "../banner/images1.png",
  },
  {
    title: "Better Health",
    subtitle1: "& Hygiene",
    subtitle2: "",
    image: "../banner/images.png",
  },
  {
    title: "Building",
    subtitle1: "self- reliant",
    subtitle2: "Gram Panchayats",
    image: "../banner/images1.png",
  },
  {
    title: "Bridging",
    subtitle1: "Dreams",
    subtitle2: "",
    image: "../banner/images.png",
  },
  {
    title: "The way forward is",
    subtitle1: "to collaborate",
    subtitle2: "with nature",
    image: "../banner/images1.png",
  },
  {
    title: "Put waste in the",
    subtitle1: "right place",
    subtitle2: "",
    image: "../banner/images.png",
  },
  {
    title: "Sustainable",
    subtitle1: "future",
    subtitle2: "",
    image: "../banner/images1.png",
  },
  {
    title: "The pathway",
    subtitle1: "to development",
    subtitle2: "",
    image: "../banner/images.png",
  },
  {
    title: "Food grows where",
    subtitle1: "the water flows",
    subtitle2: "",
    image: "../banner/images1.png",
  },
  {
    title: "Improved",
    subtitle1: "Economy",
    subtitle2: "",
    image: "../banner/images.png",
  },
  {
    title: "Clean Bengal",
    subtitle1: "Healthy Bengal",
    subtitle2: "",
    image: "../banner/images1.png",
  },
  {
    title: "GRAM SANSAD SABHA",
    subtitle1: "THE VOICE OF",
    subtitle2: "RURAL BENGAL",
    image: "../banner/images.png",
  },
];


const BodySlider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length
    );
  };

  return (
    <SliderContainer>
      <SliderImage image={sliderItems[activeIndex].image}>
        <SliderText>
          <Title variant="h3">{sliderItems[activeIndex].title}</Title>
          <Subtitle variant="h5">{sliderItems[activeIndex].subtitle1}</Subtitle>
          <Subtitle variant="h5">{sliderItems[activeIndex].subtitle2}</Subtitle>
          <Logo src="../images/logoBanner.png" alt="ISGPP Logo" />
        </SliderText>
      </SliderImage>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowButton onClick={handlePrev}>
          <ChevronLeft />
        </ArrowButton>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowButton onClick={handleNext}>
          <ChevronRight />
        </ArrowButton>
      </Box>
    </SliderContainer>
  );
};

export default BodySlider;
