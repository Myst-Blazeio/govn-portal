import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const FooterContainer = styled(Box)`
  background-color: #e0f2f2;
  padding: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const SocialIcons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterButton = styled(Button)`
  height: 40px;
  background-color: #30504f;
  color: #fff;
  &:hover {
    background-color: #213429;
  }
`;
