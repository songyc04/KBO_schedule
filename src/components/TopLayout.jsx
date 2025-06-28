import styled from "styled-components";


import TopHeader from "#components/TopHeader.jsx"
import TopMiddle from "#components/TopMiddle.jsx"
import TopBottom from "#components/TopBottom.jsx"



const TopMenu = () => {
  return (
    <Layout>
      <TopHeader />
      <TopMiddle />
      <TopBottom />
    </Layout>

  );
}

const Layout = styled.div`
  width: 100%;

`


export default TopMenu;