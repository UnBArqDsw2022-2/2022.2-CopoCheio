import styled, { css } from "styled-components";

interface TextInterface {
  color?: string;
  size?: string;
  shadow?: string;
  fontWeight?: string;
}

const Text = styled.span<TextInterface>`
  font-size: ${({size}) => size || '18px'};
  font-weight: ${({fontWeight})=> fontWeight || 'bold'};
  color: ${({color}) => color};
  ${({shadow})=>{
    if(shadow)
      return css`
        text-shadow: ${shadow}
      `
  }}
`

export default Text;
