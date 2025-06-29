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
      <Team>{testData.away}</Team>
      <Score>{testData.awayScore}</Score>
      <Stadium>{testData.stadium}</Stadium>
      
      <TeamImg src={Heroes}/>
      <Team>{testData.home}</Team>
      <Score>{testData.homeScore}</Score>
    </Layout>
  );
};


const Layout = styled.div`
  border: 1px solid brown;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Date = styled.div`
  width: 100%;

`
const Time = styled.div`
  width: 10%;
  
  text-align: center;
`
const Stadium = styled.div`
  width: 10%;
  
  text-align: center;
`
const Team = styled.div`
  width: 30%;
  
`
const Score = styled.div`
  width: 48%;
  
`

const TeamImg = styled.img`
  width: 10%;
  

`
export default Game;