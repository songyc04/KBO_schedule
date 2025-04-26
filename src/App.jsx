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
  width: 90vw;
  margin-left: 5vw;
  
  margin-top: 20px;
`

export default App;
