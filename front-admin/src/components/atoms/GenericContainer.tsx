import styled from "styled-components";

interface GenericContainerInterface {
  otherProps?: string;
  width?: string;
  height?: string;
  border_radius?: string;
  fontSize?: string;
  color?: string;
}

const GenericContainer = styled.section<GenericContainerInterface>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color, theme }) => color || theme.alternative_white};
  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height};
  border-radius: ${({ border_radius }) => border_radius || '8px'};
  ${({ otherProps }) => otherProps};
`;

export default GenericContainer;
