import styled from "styled-components";

import GameData from "#data/gamedata.json";

import Heroes from "#images/Heroes.png";
import Tigers from "#images/Tigers.png";


const Game = ({ date, dateData }) => {

  return (
    <Layout>
      <Date>{date}</Date>
      <Time>{dateData.time}</Time>
      <TeamImg src={Tigers}/>
      <Team>{dateData.away}</Team>
      <Score>{dateData.awayScore}</Score>
      <Stadium>{dateData.stadium}</Stadium>
      
      <TeamImg src={Heroes}/>
      <Team>{dateData.home}</Team>
      <Score>{dateData.homeScore}</Score>
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