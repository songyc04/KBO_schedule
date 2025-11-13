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

const GameContainer = ({ months }) => {
  const MonthGameData = GameData["2025"][months];
  const MonthGameDataList = MonthGameData ? Object.entries(MonthGameData) : [];

  return (
    <>
      {MonthGameDataList.map(([date, dateData]) => {
        const awayLogo = logo[dateData.away];
        const homeLogo = logo[dateData.home];
        
        return (
          <Layout key={date}>
            <Date>{date}</Date>
            <Time>{dateData.time}</Time>
            <Stadium>{dateData.stadium}</Stadium>
            <TeamImg src={awayLogo}/>
            <Team>{dateData.away}</Team>
            <Score>{dateData.awayScore}</Score>

            <Status>{dateData.status}</Status>

            <Score>{dateData.homeScore}</Score>
            <Team>{dateData.home}</Team>
            <TeamImg src={homeLogo}/>
          </Layout>
        );
      })}
    </>
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
const Status = styled.div`
  width: 10%;
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
  width: 20%;
`
const Score = styled.div`
  width: 5%;
`

const TeamImg = styled.img`
  width: 10%;
`

export default GameContainer;