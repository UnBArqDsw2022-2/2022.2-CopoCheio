import styled from "styled-components";

interface GenericContainerInterface {
  width?: string;
  height?: string;
  border_radius?: string;
  fontSize?: string;
}

const GenericContainer = styled.div<GenericContainerInterface>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.alternative_white};
    width: ${({ width }) => width || 'fit-content'};
    height: ${({ height }) => height};
    border-radius: ${({ border_radius }) => border_radius || '8px'};
`

const HomePageCard = () => (
  <GenericContainer width="100px" height="100px">
      Narutin
  </GenericContainer>
)

export default HomePageCard;
