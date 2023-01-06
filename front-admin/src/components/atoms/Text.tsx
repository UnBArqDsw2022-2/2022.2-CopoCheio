import { ReactElement } from "react";
import styled from "styled-components";

interface StyledTextInterface {
  weight?: 'regular' | 'semibold' | 'bold';
  color?: string;
  size?: string;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
  margin?: string;
  fontWeight?: string;
}

const Text = styled.span<StyledTextInterface>`
  font-size: ${({ size }) => size || '18px'};
  margin: ${({ margin }) => margin};
  font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
  color: ${({ color }) => color};
`

export default Text;
