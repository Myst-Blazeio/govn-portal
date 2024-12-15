import React, { useState, useEffect } from 'react';
import { Toolbar, Typography, Box, Menu, MenuItem, Link } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TopHeader, PrimaryHeader, NavBarContainer } from '../../styles/Header.styled';

function Header() {
  const [programmeAnchorEl, setProgrammeAnchorEl] = useState(null);
  const [iecAnchorEl, setIecAnchorEl] = useState(null);
  const [notificationsAndReportsAnchorEl, setNotificationsAndReportsAnchorEl] = useState(null);
  const [atGlance, setAtGlance] = useState(null);

  const handleClickOutside = (event) => {
    if (
      programmeAnchorEl &&
      !programmeAnchorEl.contains(event.target) &&
      !event.target.closest('.navItem')
    ) {
      setProgrammeAnchorEl(null);
    }
    if (
      iecAnchorEl &&
      !iecAnchorEl.contains(event.target) &&
      !event.target.closest('.navItem')
    ) {
      setIecAnchorEl(null);
    }
    if (
      notificationsAndReportsAnchorEl &&
      !notificationsAndReportsAnchorEl.contains(event.target) &&
      !event.target.closest('.navItem')
    ) {
      setNotificationsAndReportsAnchorEl(null);
    }
    if (
      atGlance &&
      !atGlance.contains(event.target) &&
      !event.target.closest('.navItem')
    ) {
      setAtGlance(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [programmeAnchorEl, iecAnchorEl, notificationsAndReportsAnchorEl, atGlance]);

  const handleProgrammeMenuClick = (event) => {
    setProgrammeAnchorEl(event.currentTarget);
    setIecAnchorEl(null);
    setNotificationsAndReportsAnchorEl(null);
    setAtGlance(null);
  };

  const handleIecMenuClick = (event) => {
    setIecAnchorEl(event.currentTarget);
    setProgrammeAnchorEl(null);
    setNotificationsAndReportsAnchorEl(null);
    setAtGlance(null);
  };

  const handleNotificationsAndReportsMenuClick = (event) => {
    setNotificationsAndReportsAnchorEl(event.currentTarget);
    setProgrammeAnchorEl(null);
    setIecAnchorEl(null);
    setAtGlance(null);
  };

  const handleGlanceClick = (event) => {
    setAtGlance(event.currentTarget);
    setProgrammeAnchorEl(null);
    setIecAnchorEl(null);
    setNotificationsAndReportsAnchorEl(null);
  };

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

            <Box sx={{ cursor: "pointer", display: "flex" }}>
              {/* PROGRAMME OVERVIEW Dropdown */}
              <Box
                onClick={handleProgrammeMenuClick}
                className="navItem"
                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                PROGRAMME OVERVIEW <ArrowDropDownIcon />
                <Menu
                  anchorEl={programmeAnchorEl}
                  open={Boolean(programmeAnchorEl)}
                  onClose={handleMenuClose}
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
                onClick={handleIecMenuClick}
                className="navItem"
                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                IEC INITIATIVES <ArrowDropDownIcon />
                <Menu
                  anchorEl={iecAnchorEl}
                  open={Boolean(iecAnchorEl)}
                  onClose={handleMenuClose}
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

              {/* AT A GLANCE Dropdown */}
              <Box
                onClick={handleGlanceClick}
                className="navItem"
                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                AT A GLANCE <ArrowDropDownIcon />
                <Menu
                  anchorEl={atGlance}
                  open={Boolean(atGlance)}
                  onClose={handleMenuClose}
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

              {/* NOTIFICATIONS & REPORTS Dropdown */}
              <Box
                onClick={handleNotificationsAndReportsMenuClick}
                className="navItem"
                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                NOTIFICATIONS & REPORTS <ArrowDropDownIcon />
                <Menu
                  anchorEl={notificationsAndReportsAnchorEl}
                  open={Boolean(notificationsAndReportsAnchorEl)}
                  onClose={handleMenuClose}
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
            </Box>
            <Link href="https://gpims.wb.gov.in/ISGPPHtmlPages/isgpp_know_ur_isgp.aspx" target="_blank" className="navItem">
              CONTACT US
            </Link>
          </Toolbar>
        </NavBarContainer>
      </header>
    </>
  );
}

export default Header;
