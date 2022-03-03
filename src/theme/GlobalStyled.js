import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`


  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 62.5%; // 1rem == 10px
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    background-color: ${theme.colors.primary};
  }

  button {
    outline: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.white};
    line-height: 1.7;
    margin: 0 0 15px;
    font-family: "DroidSerif", sans-serif;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 22px;
  }

  h6 {
    font-size: 18px;
  }

  p {
    margin-bottom: 10px;
    color: ${theme.colors.textColor};
    line-height: 1.8;
    font-size: 1.6rem;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default GlobalStyle;
