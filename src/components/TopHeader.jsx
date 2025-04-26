import styled from "styled-components"


import logo from "#images/kbo_logo_latest.svg"

const TopHeader = () => {
  return (
    <Layout>
      <Logo src={logo} alt="no images"/>
      <Title>KBO</Title>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
`

const Title = styled.span`
  // border: 1px solid yellow;
`

const Logo = styled.img`
  width: 30px;
  height: 30px;
`


export default TopHeader;