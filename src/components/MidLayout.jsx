import styled from "styled-components"

const MidLayout = () => {
  return (
    <Layout>
      <LeftArrow />
      <Year>2025</Year>
      <RightArrow />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  // font-family: 'KBO-Dia-Gothic_bold';
  border: 1px solid black;
  line-height: 1;
`

const Year = styled.span`
  font-size: 40px;
  border: 1px solid red;
  line-height: 1;
`
const LeftArrow = styled.button`
  // display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 3px solid black;
  border-right: none;
  border-bottom: 3px solid black;
  border-top: none;
  transform: rotate(45deg);
  background-color: transparent;
`

const RightArrow = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 3px solid black;
  border-right: none;
  border-bottom: 3px solid black;
  border-top: none;
  transform: rotate(-135deg);
  background-color: transparent;
`

export default MidLayout;