import { ReactElement } from "react";
import styled from "styled-components";

interface StyledTextInterface {
  color?: string;
  size?: string;
  weight?: 'regular' | 'semibold' | 'bold';
  children?: string;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
}

const Text = styled.span<StyledTextInterface>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
  color: ${({ color }) => color};
`;

export default Text;
