import styled from "styled-components";


const MonthsMenu = ({ months, onMonthClick }) => {
  return (
    <Layout>
      {months.map((month) => (
        <MonthBtn key={month}
                  onClick={() => onMonthClick(month)}
        >
          {month}
        </MonthBtn>
      ))}
    </Layout>
  );
}


const Layout = styled.div`

  height: 30px;

  display: flex;
`

const MonthBtn = styled.button`
  flex: 1 1 0;
  // border: 1px solid brown;
`

export default MonthsMenu;