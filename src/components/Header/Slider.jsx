/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { css } from '@emotion/react';

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

const Slider = () => {
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
    <Box
      css={css`
        position: relative;
        width: 100%;
        height: 400px;
      `}
    >
      <Box
        css={css`
          background-image: url(${sliderItems[activeIndex].image});
          background-size: cover;
          background-position: center;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 20px;
        `}
      >
        <Box
          css={css`
            background: rgba(255, 255, 255, 0.7);
            padding: 20px;
            border-radius: 5px;
          `}
        >
          <Typography
            variant="h3"
            css={css`
              color: black;
              font-weight: bold;
            `}
          >
            {sliderItems[activeIndex].title}
          </Typography>
          <Typography
            variant="h5"
            css={css`
              color: green;
            `}
          >
            {sliderItems[activeIndex].subtitle1}
          </Typography>
          <Typography
            variant="h5"
            css={css`
              color: green;
            `}
          >
            {sliderItems[activeIndex].subtitle2}
          </Typography>
          <img src="../images/logoBanner.png" alt="ISGPP Logo" style={{ borderRadius: '5px'}} />
        </Box>
        
      </Box>

      <Box
        sx={css`
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 1;
        `}
      >
        <IconButton
          onClick={handlePrev}
          css={css`
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
          `}
        >
          <ChevronLeft />
        </IconButton>
      </Box>

      <Box
        css={css`
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 1;
        `}
      >
        <IconButton
          onClick={handleNext}
          css={css`
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
          `}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slider;
