import styled from "styled-components";

interface TextInterface {
  color?: string;
  size?: string;
  margin?: string;
  fontWeight?: string;
}

const Text = styled.span<TextInterface>`
  font-size: ${({ size }) => size || '18px'};
  font-weight:${({ fontWeight }) => fontWeight || 'bold'};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color}
`

export default Text;
