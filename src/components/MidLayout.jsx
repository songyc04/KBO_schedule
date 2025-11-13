import styled from "styled-components"

const MidLayout = () => {
  return (
    <Layout>
      Middle
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  // font-family: 'KBO-Dia-Gothic_bold';
  border: 1px solid black;
`

export default MidLayout;