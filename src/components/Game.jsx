import styled from "styled-components";

import GameData from "#data/gamedata.json";

import Heroes from "#images/Heroes.png";
import Tigers from "#images/Tigers.png";


const Game = () => {
  const monthData = GameData["2025"]["6월"];
  const months = Object.keys(monthData);
  const testData = GameData["2025"]["6월"]["6월 24일 (화)"];

  // const Heroes = "src/images/Heroes.png";
  // const Tigers = "src/images/Tigers.png";

  return (
    <Layout>
      <Date>{months.find(key => key.includes("24일"))}</Date>
      <Time>{testData.time}</Time>
      <TeamImg src={Tigers}/>
      <AwayTeam>{testData.away}</AwayTeam>
      <AwayScore>{testData.awayScore}</AwayScore>
      <Stadium>{testData.stadium}</Stadium>
      
      <TeamImg src={Heroes}/>
      <HomeTeam>{testData.home}</HomeTeam>
      <HomeScore>{testData.homeScore}</HomeScore>
    </Layout>
  );
};


const Layout = styled.div`
  border: 1px solid brown;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
`

const Date = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid black;

`
const Time = styled.div`
  width: ;
  border: 1px solid black;

`
const Stadium = styled.div`
  width: 30%;
  border: 1px solid black;
`
const AwayTeam = styled.div`
  border: 1px solid black;
`
const AwayScore = styled.div`
  border: 1px solid black;
`
const HomeTeam = styled.div`
  border: 1px solid black;
`
const HomeScore = styled.div`
  border: 1px solid black;
`

const TeamImg = styled.img`
  width: 40px;
  border: 1px solid black;
`
export default Game;