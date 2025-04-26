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
  
  // width: 410px;
  width: 100vw;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 10px;
`

export default App;
