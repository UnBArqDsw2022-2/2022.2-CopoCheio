import styled from "styled-components";

interface StyledTextInterface {
  weight?: 'regular' | 'medium' | 'semibold';
  color?: 'gold' | 'white';
  size?: '14px' | '16px' | '18px' | '24px' | '32px';
  cta?: boolean;
}

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600
}

const Text = styled.span<StyledTextInterface>`
font-size: ${({ cta, size }) => cta ? '16px' : size || '18px'};
font-weight: ${({ weight }) => weight ? fontWeights[weight] : fontWeights.regular};
color: ${({ cta, theme, color }) => !cta ? (color === 'gold' ? theme.secondary : theme.white) : ''};
font-family: ${({ cta }) => cta ? 'Work Sans, sans-serif' : ''};
`

export default Text;
