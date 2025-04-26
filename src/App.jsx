import styled from "styled-components";

import "./reset.css";

import TopLayout from "#components/TopLayout.jsx";



function App() {
  return (
    <Frame>
      <TopLayout />
    </Frame>
  )
}


const Frame = styled.div`
  
  width: 360px;

  padding-left: 3px;
  padding-right: 6px;
  padding-top: 10px; 
`

export default App;
