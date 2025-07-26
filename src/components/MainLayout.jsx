import styled from "styled-components";

import Game from "#components/Game.jsx";

import GameData from "#data/gamedata.json";


const MainLayout = () => {

  const monthData = GameData["2025"]["6월"];
  // console.log(monthData);
  // const dateData = Object.keys(month);
  // console.log(dateData);


  return (
    <Layout>
      {Object.entries(monthData).map(([date, dateData]) => (
        <Game key={date} date={date} dateData={dateData} />
      ))}
      
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`


export default MainLayout;