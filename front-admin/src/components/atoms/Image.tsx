
import styled, { css } from "styled-components";

interface ImageInterface {
  height?: string;
  width?: string;
  marginLeft?:string;
  marginRight?:string;
  borderRadius?:string;
  shadow?: string;
}

const Image = styled.img<ImageInterface>`
    height:${({height})=>height};
    width:${({width})=>width};
    border-radius:${({borderRadius})=>borderRadius};
    margin-left:${({marginLeft})=>marginLeft};
    margin-right:${({marginRight})=>marginRight};

  ${({shadow})=>{
    if(shadow)
      return css`
        box-shadow: ${shadow};
      `
  }}
`

export default Image;
