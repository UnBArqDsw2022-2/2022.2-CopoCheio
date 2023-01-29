import styled from "styled-components";

interface StyledTextInterface {
  weight?: 'regular' | 'medium' | 'semibold';
  color?: 'gold' | 'white';
  size?: '14px' | '16px' | '18px' | '24px' | '32px';
  cta?: boolean;
}

const Text = styled.span<StyledTextInterface>`
font-size: ${({ cta, size }) => cta ? '16px' : size || '18px'};
font-weight: ${({ weight }) => weight === 'semibold' ? '600' : weight};
color: ${({ cta, theme, color }) => !cta ? (color === 'gold' ? theme.secondary : theme.white) : ''};
font-family: ${({ cta }) => cta ? 'Work Sans, sans-serif' : ''};
`

export default Text;
