import React from 'react';
import { Box, Typography, Link, Card, Button } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { ServiceBox, ServiceImage, QuickLink, QuickLinkContainer, QuickLinkItem, QuickLinkText, QuickLinkButton, LatestUpdateCard, LatestUpdateTitle, LatestUpdateContent, ImportantLinksCard, ImportantLinksTitle, ServiceColumn, FlexBox, BodyLinksContainer } from '../../styles/Body.styled';

// Data for ImportantLinks
const links = [
  {
    imgSrc: '../images/network.png',
    alt: 'GIS Logo',
    title: 'Geographic Information System (GIS)',
    href: 'https://gis.wbprd.gov.in',
  },
  {
    imgSrc: '../images/webbased.png',
    alt: 'GPIMS Logo',
    title: 'Gram Panchayats Integrated Monitoring System (GPIMS)',
    href: 'https://gpims.wb.gov.in/ISGPP_ProtectedPage/WBMS_Login.aspx',
  },
  {
    imgSrc: '../images/grms.png',
    alt: 'GRMS Logo',
    title: 'Grievance Redressal Management System (GRMS)',
    href: 'https://www.grm.wbprd.gov.in',
  },
  {
    imgSrc: '../images/stampapd.png',
    alt: 'MIS Training Logo',
    title: 'MIS Training',
    href: 'https://www.grm.wbprd.gov.in/New_StarPard/',
  },
  {
    imgSrc: '../images/images.png',
    alt: 'GWM Logo',
    title: 'Gram Panchayat Works Manual (GWM)',
    href: 'https://wbisgpp.in',
  },
  {
    imgSrc: '../images/gram.png',
    alt: 'Engineering Logo',
    title: 'Engineering Gram Panchayat Vetting System',
    href: 'https://wbisgpp.in/wbprdonlinevetting',
  },
];

// Component for a single service item
const ServiceItem = ({ imgSrc, alt, title, href }) => (
  <ServiceBox>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ServiceImage src={imgSrc} alt={alt} />
      <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
        <Link
          href={href}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ color: '#000', fontWeight: 500 }}
        >
          {title}
        </Link>
      </Typography>
    </Box>
    <QuickLink href={href} target="_blank" rel="noopener" aria-label="Open link">
      <ArrowForwardIos fontSize="small" />
    </QuickLink>
  </ServiceBox>
);

const ImportantLinks = () => {
  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3);

  return (
    <Card
      sx={{
        padding: 2,
        border: '1px black solid',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: 2,
        width:'100vh',
        heigth:'100vh',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          textAlign: 'center',
          color: '#333',
          fontWeight: 'bold',
        }}
      >
        Important Links
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left Column */}
        <Box sx={{ flex: 1, marginRight: { md: 2 }, marginBottom: { xs: 2, md: 0 } }}>
          {leftLinks.map((link, index) => (
            <ServiceItem key={index} {...link} />
          ))}
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1, marginLeft: { md: 2 } }}>
          {rightLinks.map((link, index) => (
            <ServiceItem key={index} {...link} />
          ))}
        </Box>
      </Box>
    </Card>
  );
};


const QuickLinks = () => (
  <QuickLinkContainer>
    <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
      Quick Links
    </Typography>
    {[
      { icon: '../quicklinks/galleryIco.png', text: 'Reports', href: 'https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_document_report.aspx'},
      { icon: '../quicklinks/publication.png', text: 'Tenders', href: 'https://gpims.wb.gov.in/ISGPPHtmlPages/ISGPP_Tender_only.aspx'},
      { icon: '../quicklinks/tenders.png', text: 'Career', href: 'https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_noti.aspx'},
      { icon: '../quicklinks/galleryIco.png', text: 'Circulars & Orders', href: 'https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_noti.aspx'},
      { icon: '../quicklinks/contract.png', text: 'NEW Engineering', href: 'https://gpims.wb.gov.in/IsgppHtmlPages/ISGPPEngineering.aspx'},
    ].map((link, index) => (
      <QuickLinkItem key={index}>
        <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>
          <img src={link.icon} alt={`Icon ${index + 1}`} />
          <QuickLinkText>{link.text}</QuickLinkText>
          <QuickLinkButton>
            <ArrowForwardIos fontSize="small" />
          </QuickLinkButton>
        </a>
      </QuickLinkItem>
    ))}
  </QuickLinkContainer>
);


const CardComponent = () => (
  <LatestUpdateCard >
    <LatestUpdateTitle>Latest Update</LatestUpdateTitle>
    <LatestUpdateContent>
      <p>This is some sample content for the latest update.</p>
      <a href="#">Read More</a>
    </LatestUpdateContent>
  </LatestUpdateCard>
);

// Combined layout
const BodyLinks = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 2, // Minimal gap between columns
        padding: 2,
      }}
    >
      {/* Left Column: Important Links */}
      <Box sx={{ flex: 1 }}>
        <ImportantLinks />
      </Box>

      {/* Middle Column: Quick Links */}
      <Box sx={{ flex: 1 }}>
        <QuickLinks />
      </Box>
      {/* Right Column: CardComponent  */}
      <Box sx={{ flex: 1, minWidth: { lg: '300px' } }}>
        <CardComponent />
      </Box>
    </Box>
  );
};

export default BodyLinks;
