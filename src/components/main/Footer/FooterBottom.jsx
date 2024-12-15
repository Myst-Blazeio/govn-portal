import React from 'react';
import { Box, Typography } from '@mui/material';

const FooterBottom = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Left counter section (can be added content here if needed) */}
        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 2 }}>
          {/* This section can be expanded later if needed */}
        </Box>

        {/* Center content */}
        <Box sx={{ width: '100%', textAlign: 'center' , opacity: '50%'}}>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            Designed, Developed & Maintained by the ISGP Program, P&RD Department, Government of West Bengal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Legal Disclaimer | Copyright &copy; 2016-2017 ISGPP - All Right Reserved
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default FooterBottom;
