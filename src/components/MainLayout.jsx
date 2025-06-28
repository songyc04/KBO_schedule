import styled from "styled-components";

import Game from "#components/Game.jsx";

const MainLayout = () => {
  return (
    <Layout>
      <Game />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`


export default MainLayout;