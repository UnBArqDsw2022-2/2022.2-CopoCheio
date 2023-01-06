import { ReactElement } from "react";
import styled from "styled-components";

interface StyledTextInterface {
  weight?: 'regular' | 'semibold' | 'bold';
  color?: string;
  size?: string;
  shadow?: string;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
  margin?: string;
  fontWeight?: string;
}

const Text = styled.span<StyledTextInterface>`
Zfont-size: ${({ size }) => size || '18px'};
font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
color: ${({ color }) => color};
margin: ${({ margin }) => margin};
text-shadow: ${({ shadow }) => shadow};
`

export default Text;
