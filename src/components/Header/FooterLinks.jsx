import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Link, Typography, Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#E0F2F2',
  padding: '20px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'spaced-',
}));

const FooterButton = styled(Button)(({ theme }) => ({
    height: 40,
  backgroundColor: '#30504f',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#213429',
  },
}));

const FooterComponent = () => {
  return (
    <FooterContainer>
      <Box>
        <Typography variant="h6">Follow Us</Typography>
        <SocialIcons>
          <a href="https://www.facebook.com/ISGPPII/">
            <img src="../linkassets/brand-scicn4.png" alt="Facebook" />
          </a>
          <a href="https://in.pinterest.com/isgpp/">
            <img src="../linkassets/brand-scicn3.png" alt="Pinterest" />
          </a>
          <a href="https://x.com/isgppII?prefetchTimestamp=1734209241780">
            <img src="../linkassets/brand-scicn6.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/wbisgppii/">
            <img src="../linkassets/brand-scicn2.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UC7bJuAJLaqiUFx4E0AGV89g">
            <img src="../linkassets/Ytube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="../linkassets/brand-scicn5.png" alt="LinkedIn" />
          </a>
        </SocialIcons>
      </Box>
      <Box sx={{marginLeft:10}}>
        <Typography variant="h6">More About ISGPP</Typography>
        <FooterButton href="https://isgpp.wordpress.com/" target="_blank" variant="contained">ISGPP Blog
            <YouTubeIcon fontSize="large" sx={{marginLeft:1}} />
        </FooterButton>
      </Box>
    </FooterContainer>
  );
};

export default FooterComponent;