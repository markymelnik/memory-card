import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components';
import Skranji from './assets/fonts/skranji.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Bangers';
    src: url(${Skranji}) format('truetype');
  }

  * {
    font-family: Bangers;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

`

root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </>
)