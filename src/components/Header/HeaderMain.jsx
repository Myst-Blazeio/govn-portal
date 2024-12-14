// src/components/Header.js
import React,  { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton, Button, Link } from '@mui/material';



const TopHeader = styled(Box)`
   background: #f0f0f0;
  height: 36px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 150px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;
      display: flex;
      align-items: center;

      span {
        color: #c3c3c3;
        margin: 0 6px;
      }

      a {
        text-decoration: none;
        color: #4e4e4e;
        font-size: 14px;

        &:hover {
          color: #0395c4;
        }
      }
    }
  }
`;

const PrimaryHeader = styled(Box)`
  background: linear-gradient(to top, #e5f8ff, #b0e7f4) repeat-x;
  height: 200px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end;
  padding: 4px 20px;
  font-size: 14px; */

  .logo {
    width: 200px;
    height: 195px;
    padding: 0px 100px;
    padding-top: 5px;
  }

  .headTitle {
    flex: 1;
    text-align: center;
    padding-top: 30px;

    h1 {
      font-size: 25px;
      font-weight: 300;
      color: #016fbc;
      /* margin: 6px 0; */
    }

    h2 {
      font-size: 20px;
      font-weight: 200;
      color: #016fbc;
    }

    img {
      margin-top: 50px;
      height: 50px;
      width: 100%;
    }
  }

  .rightLogo {
    width: 100px;
    height: 100px;
    padding: 4px 150px;
  }
`;

const NavBarContainer = styled(AppBar)`
  background: linear-gradient(to top, #009fdf , #60cdf8) repeat-x;
  height: 35px;
  display: flex;
  justify-content: center;

  .menuWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    
      .navItem {
        color: #fff;
        padding: 0 15px;
        line-height: 35px;
        text-decoration: none;

        &:hover {
          background: #008db9 repeat-x;
        }
      }
  }
`;



function Header() {

 const [programmeAnchorEl, setProgrammeAnchorEl] = useState(null);
  const [iecAnchorEl, setIecAnchorEl] = useState(null);
  const [notificationsAndReportsAnchorEl, setNotificationsAndReportsAnchorEl] = useState(null);
  const [atGlance, setAtGlance] = useState(null);

  const handleGlanceClick =(event) => {
    setAtGlance(event.currentTarget);
    setProgrammeAnchorEl(null); 
    setIecAnchorEl(null); 
    setNotificationsAndReportsAnchorEl(null);
  };

  // Open the PROGRAMME OVERVIEW menu on hover
  const handleProgrammeMenuClick = (event) => {
    setProgrammeAnchorEl(event.currentTarget);
    setIecAnchorEl(null); 
    setNotificationsAndReportsAnchorEl(null);  
    setAtGlance(null);
  };

  // Open the IEC INITIATIVES menu on hover
  const handleIecMenuClick = (event) => {
    setIecAnchorEl(event.currentTarget);
    setProgrammeAnchorEl(null);  
    setNotificationsAndReportsAnchorEl(null); 
    setAtGlance(null);
  };

  // Open the Notifications & Reports menu on hover
  const handleNotificationsAndReportsMenuClick = (event) => {
    setNotificationsAndReportsAnchorEl(event.currentTarget);
    setProgrammeAnchorEl(null); 
    setIecAnchorEl(null); 
    setAtGlance(null);
  };

  // Close all menus when mouse leaves
  const handleMenuClose = () => {
    setProgrammeAnchorEl(null);
    setIecAnchorEl(null);
    setNotificationsAndReportsAnchorEl(null);
    setAtGlance(null);
  };

  return (
    <>
    <header>
      {/* Top Header */}
      <TopHeader>
        <ul>
          <li>
            <Link href="#Script">Skip to main content</Link>
            <span>|</span>
          </li>
          <li>
            <Link href="#">Sitemap</Link>
            <span>|</span>
          </li>
          <li>
            <Link href="#">
              <img src="../images/hindi.jpg" alt="Hindi" title="HIND" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="../images/bangla.jpg" alt="Bangla" title="BANG" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="../images/engb.jpg" alt="English" title="ENGB" />
            </Link>
          </li>
          <li>
            <span>|</span>
            <label className="zmout">- A</label>
            <span>/</span>
            <label className="zmin">A +</label>
          </li>
        </ul>
      </TopHeader>

      {/* Primary Header */}
      <PrimaryHeader>
        <Box component="img" src="../images/logo.png" alt="Logo" className="logo" />
        <Box className="headTitle">
          <Typography variant="h1">Institutional Strengthening of Gram Panchayats (ISGP) Program</Typography>
          <Typography variant="h2">
            Panchayats & Rural Development Department, Government of West Bengal
          </Typography>
          <img src="../images/header_banner.png" alt="Banner" />
        </Box>
        <Box component="img" src="../images/logo_1.png" alt="Logo Right" className="rightLogo" />
      </PrimaryHeader>

      {/* NavBar */}
      <NavBarContainer position="static">
        <Toolbar className="menuWrapper">
          <Link href="../IsgppHtmlPages/IsgppDefaultHome.aspx" className="navItem">
            HOME
          </Link>
        
            <Box sx={{cursor:"pointer", display:"flex"}}>
      {/* PROGRAMME OVERVIEW Dropdown */}
      <Box
        onMouseEnter={handleProgrammeMenuClick}
        onMouseLeave={handleMenuClose}
        className="navItem"
        sx={{ cursor: "pointer" }}
      >
        PROGRAMME OVERVIEW
        <Menu
          anchorEl={programmeAnchorEl}
          open={Boolean(programmeAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/IsgppHtmlPages/ISGPPProgramOverView.aspx" underline="none" className="menuLink">
              Overview of Program Design - ISGPP-II
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/IsgppHtmlPages/ISGPPKeyResult.aspx" underline="none" className="menuLink">
              Key Results Area (KRA)
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/IsgppHtmlPages/ISGPPKeyProgramme.aspx" underline="none" className="menuLink">
              Key Program Activities (KPA)
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/IsgppHtmlPages/ISGPPDLI.aspx" underline="none" className="menuLink">
              Disbursement Linked Indicators (DLI)
            </Link>
          </MenuItem>
        </Menu>
      </Box>

      {/* IEC INITIATIVES Dropdown */}
      <Box
        onMouseEnter={handleIecMenuClick}
        onMouseLeave={handleMenuClose}
        className="navItem"
        sx={{ cursor: "pointer" }}
      >
        IEC INITIATIVES
        <Menu
          anchorEl={iecAnchorEl}
          open={Boolean(iecAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/ViewAlbum.aspx" target="_blank" underline="none" className="menuLink">
              Photo Gallery
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/IsgppVideoGallery.aspx" target="_blank" underline="none" className="menuLink">
              Video Gallery
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/Isgpp_case_study.aspx" target="_blank" underline="none" className="menuLink">
              Case Studies
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/ISGPP_Publication.aspx" target="_blank" underline="none" className="menuLink">
              Publications
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/AwardsAndLaurels.aspx" target="_blank" underline="none" className="menuLink">
              Awards & Laurels
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ADMIN/Reports/Ebooks" underline="none" className="menuLink">
              Ebooks
            </Link>
          </MenuItem>
        </Menu>
      </Box>
   
          <Box
        onMouseEnter={handleGlanceClick}
        onMouseLeave={handleMenuClose}
        className="navItem"
        sx={{ cursor: "pointer" }}
      >
        AT A GLANCE
        <Menu
          anchorEl={atGlance}
          open={Boolean(atGlance)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPP_ProtectedPage/ISGPPDashBoard.aspx" target="_blank" underline="none" className="menuLink">
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPP_ProtectedPage/GPProfile.aspx" target="_blank" underline="none" className="menuLink">
              GP Profile
            </Link>
          </MenuItem>
        </Menu>
      </Box>


           <Box
        onMouseEnter={handleNotificationsAndReportsMenuClick}
        onMouseLeave={handleMenuClose}
        className="navItem"
        sx={{ cursor: "pointer"}}
      >
        NOTIFICATIONS & REPORTS
        <Menu
          anchorEl={notificationsAndReportsAnchorEl}
          open={Boolean(notificationsAndReportsAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_document_report.aspx" target="_blank" underline="none" className="menuLink">
              Reports
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/ISGPP_Tender_only.aspx" target="_blank" underline="none" className="menuLink">
              Tenders
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_noti.aspx" target="_blank" underline="none" className="menuLink">
              Career
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_noti.aspx" target="_blank" underline="none" className="menuLink">
             Circulars & Orders
            </Link>
          </MenuItem>
        </Menu>
      </Box>
          <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_know_ur_isgp.aspx"  target="_blank" className="navItem" >
            CONTACT US
          </Link>
 </Box>
        </Toolbar>
      </NavBarContainer>
    </header>
    
    </>
  );
}

export default Header;
