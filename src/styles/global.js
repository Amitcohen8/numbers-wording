import { createGlobalStyle } from 'styled-components';
import { device } from '../utills/constants';
export const GlobalStyles = createGlobalStyle`
  

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Trocchi', serif;
    transition: all 0.25s linear;
    @media only screen and ${device.mobileL}{
  
      font-size:12px;
    }
  }`