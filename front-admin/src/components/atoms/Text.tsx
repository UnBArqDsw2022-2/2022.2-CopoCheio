import styled from "styled-components";

interface TextInterface {
  color?: string;
  size?: string;
}

const Text = styled.span<TextInterface>`
  font-size: ${({size}) => size || '18px'};
  font-weight: bold;
  color: ${({color}) => color}
`

export default Text;
