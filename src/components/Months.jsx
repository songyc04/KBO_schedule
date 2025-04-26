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


  font-size: 10px;
`

export default Months;