import styled, { css } from "styled-components";

interface TextInterface {
  color?: string;
  size?: string;
  shadow?: string;
}

const Text = styled.span<TextInterface>`
  font-size: ${({size}) => size || '18px'};
  font-weight: bold;
  color: ${({color}) => color};
  ${({shadow})=>{
    if(shadow)
      return css`
        text-shadow: ${shadow}
      `
  }}
`

export default Text;
