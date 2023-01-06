import Text from '../atoms/Text';
import styled from 'styled-components';


export interface DrinkDataType {
  id: string,
  name: string,
  time: number,
  preparation: string,
  ingredients: string[],
  createdDate: string,
  likes: number,
  isAlcoholic: boolean,
  isVerfied: boolean,
  difficulty: string,
  country: [
    {
      id: string,
      nome: string
    }
  ],
  category: [
    {
      id: string,
      name: string
    }
  ]
}

interface CardProps {
  data: DrinkDataType;
}


export const Container = styled.div`
  width: 14rem;
  height: 18rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  color: ${({ theme }) => theme.alternative_white};
  border: none;
  text-decoration: none;
  padding: 0;
  position: relative;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: calc(18rem - 6px);
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background: ${({ theme }) => `${theme.black}90`};
  padding: 16px;
  cursor: pointer;
  opacity: 0;

  &:hover{
    opacity: 1;
  }
`;

export const Card = ({ data }: CardProps) => {
  return (
    <Container>
      <InnerContainer style={{backgroundImage: `url(${require('../../assets/narutin.png')})`}}>
        <InfoContainer>
          <Text size="16px">{`${data.time} min`}</Text>
          <Text size="16px">{data.difficulty}</Text>
          <Text size="16px">{data.country[0].nome}</Text>
          <Text size="16px">{data.ingredients.map(ingredient => `${ingredient}, `)}</Text>
        </InfoContainer>

        <div style={{ position: 'absolute', left: 16, top: 16 }}>
          <Text size="16px">{data.name}</Text>
        </div>
      </InnerContainer>
    </Container >
  );
};
