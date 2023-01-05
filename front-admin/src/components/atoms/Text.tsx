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

const StyledText = styled.span<StyledTextInterface>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
  color: ${({ color }) => color};
  margin-left: ${({ leftElement }) => leftElement && '8px'};
  margin-right: ${({ rightElement }) => rightElement && '8px'};
`;

const Container = styled.section`
  display: flex;
  align-items: center;
`

const Text = ({ size, color, weight, children, leftElement, rightElement }: StyledTextInterface) => (
  <Container>
    {leftElement}
    <StyledText
      leftElement={leftElement}
      size={size || '18px'}
      color={color}
      weight={weight || 'regular'}
      rightElement={rightElement}
    >
      {children}
    </StyledText>
    {rightElement}
  </Container>
);

export default Text;
