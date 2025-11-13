import { useState } from "react";

import styled from "styled-components";


import MonthsMenu from "#components/MonthsMenu.jsx"
import GameContainer from "#components/GameContainer.jsx"

import GameData from "#data/gamedata.json";



const MainLayout = () => {
  const months = ["3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const MonthSelectingFunc = (month) => {
    setSelectedMonth(month)
  }

  return (
    <Layout>
      <MonthsMenu months={months} selectedMonth={selectedMonth} onMonthClick={MonthSelectingFunc} />
      <GameContainer months={selectedMonth} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`


export default MainLayout;