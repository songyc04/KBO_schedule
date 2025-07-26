import styled from "styled-components";

import GameData from "#data/gamedata.json";

import Bears from "#images/Bears.png";
import Dinos from "#images/Dinos.png";
import Eagles from "#images/Eagles.png";
import Giants from "#images/Giants.png";
import Heroes from "#images/Heroes.png";
import Landers from "#images/Landers.png";
import Lions from "#images/Lions.png";
import Tigers from "#images/Tigers.png";
import Twins from "#images/Twins.png";
import Wiz from "#images/Wiz.png";


const logo = {
  두산: Bears,
  NC: Dinos,
  한화: Eagles,
  롯데: Giants,
  키움: Heroes,
  SSG: Landers,
  삼성: Lions,
  KIA: Tigers,
  LG: Twins,
  KT: Wiz
};

const Game = ({ date, dateData }) => {
  const awayLogo = logo[dateData.away];
  const homeLogo = logo[dateData.home]


  return (
    <Layout>
      <Date>{date}</Date>
      <Time>{dateData.time}</Time>
      <TeamImg src={awayLogo}/>
      <Team>{dateData.away}</Team>
      <Score>{dateData.awayScore}</Score>
      <Stadium>{dateData.stadium}</Stadium>
      
      <TeamImg src={homeLogo}/>
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