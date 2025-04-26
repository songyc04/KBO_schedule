import styled from "styled-components";


import TopHeader from "#components/TopHeader.jsx"
import TopMiddle from "#components/TopMiddle.jsx"
import TopBottom from "#components/TopBottom.jsx"



const TopMenu = () => {
  return (
    <MainLayout>
      <TopHeader />
      <TopMiddle />
      <TopBottom />
    </MainLayout>

  );
}

const MainLayout = styled.div`
  width: 100%;
  height: 200px;
  border: 3px solid black;

`


export default TopMenu;