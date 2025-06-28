import styled from "styled-components";

import GameData from "#data/gamedata.json";

const Game = () => {
  const testData = GameData["2025"]["4월"]["4월 2일 (수)"];
  return (
    <Layout>
      <div>{testData.time}</div>
      <Date />
      <Time />
      <Stadium />
      <AwayTeam />
      <ScoreBoard />
      <HomeTeam />
    </Layout>
  );
};


const Layout = styled.div`
  border: 1px solid brown;
  width: 100%;
  display: flex;
`

const Date = styled.div`
`
const Time = styled.div`
`
const Stadium = styled.div`
`
const AwayTeam = styled.div`
`
const ScoreBoard = styled.div`
`
const HomeTeam = styled.div`
`
export default Game;