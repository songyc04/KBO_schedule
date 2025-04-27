import styled from "styled-components";

import Month from "#components/Months.jsx";


const TopBottom = () => {
  return (
    <Layout>
      {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
        <Month key={num} num={num} />
      ))}
    </Layout>
  );
}


const Layout = styled.div`
  border-bottom: 2px solid black;

  height: 30px;

  display: flex;
`


export default TopBottom;