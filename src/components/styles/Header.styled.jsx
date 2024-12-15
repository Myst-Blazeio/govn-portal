import styled from '@emotion/styled';
import { AppBar, Box } from '@mui/material';

export const TopHeader = styled(Box)`
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

export const PrimaryHeader = styled(Box)`
  background: linear-gradient(to top, #e5f8ff, #b0e7f4) repeat-x;
  height: 200px;
  display: flex;
  align-items: center;

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

export const NavBarContainer = styled(AppBar)`
  background: linear-gradient(to top, #009fdf, #60cdf8) repeat-x;
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
