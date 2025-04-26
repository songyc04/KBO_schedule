import styled from "styled-components";

const Months = ( {num} ) => {
  return (
    <Month>{num}월</Month>
  );
}

const Month = styled.button`
  background: none;
  border: none;

  flex-grow: 1;


  font-size: 20px;
`

export default Months;