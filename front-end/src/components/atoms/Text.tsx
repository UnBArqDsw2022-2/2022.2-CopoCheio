import styled from "styled-components";

interface StyledTextInterface {
  weight?: 'regular' | 'medium' | 'semibold';
  color?: 'gold' | 'white';
  size?: '14px' | '16px' | '18px' | '24px' | '32px';
}

const Text = styled.span<StyledTextInterface>`
font-size: ${({ size }) => size || '18px'};
font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
color: ${({ theme, color }) => color === 'gold' ? theme.secondary : theme.white};
`

export default Text;
