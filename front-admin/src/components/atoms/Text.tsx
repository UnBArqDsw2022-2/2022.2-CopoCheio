import { ReactElement } from "react";
import styled from "styled-components";

interface StyledTextInterface {
  color?: string;
  size?: string;
  shadow?: string;  
  weight?: 'regular' | 'semibold' | 'bold';
  leftElement?: ReactElement;
  rightElement?: ReactElement;
}

const Text = styled.span<StyledTextInterface>`
  font-size: ${({size}) => size || '18px'};
  font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
  color: ${({color}) => color};
  text-shadow: ${({shadow}) => shadow}
`

export default Text;
