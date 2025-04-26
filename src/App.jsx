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
  
  width: 1050px;

  padding-left: 8px;
  padding-right: 16px;
  padding-top: 10px; 
`

export default App;
