import styled from '@emotion/styled';
import { Box, Typography, Card, Link, IconButton } from '@mui/material';

// Styled components for ImportantLinks
export const ServiceBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px; /* Reduced padding */
  margin-bottom: 8px; /* Reduced margin */
  border-radius: 8px;
  border: 1px solid #424040;
  background-color: #f9f9f9;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #eef2f7;
    transform: translateY(-2px);
  }
`;

export const ServiceImage = styled('img')`
  height: 40px;
  width: 40px;
  margin-right: 12px; /* Reduced spacing */
  border-radius: 4px;
`;

export const QuickLink = styled(Link)`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

// Styled components for QuickLinks
export const QuickLinkContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
  width: 50vh;
  height: 40vh;
`;

export const QuickLinkItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px; /* Reduced margin */
`;

export const QuickLinkText = styled(Typography)`
  font-weight: bold;
  margin-left: 20px;
`;

export const QuickLinkButton = styled('div')`
  color: #312f91;
  margin-left: auto;
`;

// Styled components for LatestUpdateCard
export const LatestUpdateCard = styled(Box)`
  padding: 12px;
  border: 1px black solid;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
  width: 45vh; 
  height: 40vh;
`;

export const LatestUpdateTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LatestUpdateContent = styled(Box)`
  margin-top: 8px;
`;

// Styled components for ImportantLinks container (Card)
export const ImportantLinksCard = styled(Card)`
  padding: 2;
  border: 1px black solid;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 2;
  width: 100vh;
  height: 100vh;
`;

export const ImportantLinksTitle = styled(Typography)`
  margin-bottom: 2;
  text-align: center;
  color: #333;
  font-weight: bold;
`;

export const ServiceColumn = styled(Box)`
  flex: 1;
  margin-right: ${(props) => (props.md ? '2' : '0')};
  margin-bottom: ${(props) => (props.xs ? '2' : '0')};
`;

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: ${(props) => (props.xs ? 'column' : 'row')};
`;

export const BodyLinksContainer = styled(Box)`
  display: flex;
  flex-direction: ${(props) => (props.xs ? 'column' : 'row')};
  gap: 2;
  padding: 2;
`;

export const SliderContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const SliderImage = styled(Box)`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

export const SliderText = styled(Box)`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 5px;
`;

export const Title = styled(Typography)`
  color: black;
  font-weight: bold;
`;

export const Subtitle = styled(Typography)`
  color: green;
`;

export const Logo = styled('img')`
  border-radius: 5px;
`;

export const ArrowButton = styled(IconButton)`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;