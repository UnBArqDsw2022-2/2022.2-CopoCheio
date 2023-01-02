import styled from "styled-components";

interface TextInterface {
  color?: string;
}

const Text = styled.span<TextInterface>`
  font-size: 18px;
  font-weight: bold;
  color: ${({color}) => color || '#fefefe'}
`

export default Text;
