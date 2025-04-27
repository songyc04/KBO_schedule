import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import "./reset.css";

import TopLayout from "#components/TopLayout.jsx";



function App() {
  return (
    
    <Frame>
      <GlobalStyle />
      <TopLayout />
    </Frame>
  )
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

@font-face {
    font-family: 'KBO-Dia-Gothic_bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
`


const Frame = styled.div`
  width: 90vw;
  margin-left: 5vw;
  
  margin-top: 20px;
`



export default App;
