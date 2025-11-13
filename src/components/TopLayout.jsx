import styled from "styled-components"


import logo from "#images/kbo_logo_2025_latest.png"

const TopLayout = () => {
  return (
    <Layout>
      <Logo src={logo} alt="no images"/>
      <Title>KBO</Title>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  font-family: 'KBO-Dia-Gothic_bold';
  border: 1px solid black;
`

const Title = styled.span`
  margin-left: 5px;
`

const Logo = styled.img`
  width: 30px;
  height: 30px;
`


export default TopLayout;