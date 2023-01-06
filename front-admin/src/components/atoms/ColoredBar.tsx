import styled from "styled-components";

const ColoredBar = styled.div`
  width: 20%;
  height: 5px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 1000px;
  transition: all ease 400ms;
`

export default ColoredBar;
