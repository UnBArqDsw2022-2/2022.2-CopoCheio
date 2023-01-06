import { Card, DrinkDataType } from '../molecules/Card';
import styled from 'styled-components';


interface DrinkPageProps {
  prop1: boolean,
  prop2: string;
}


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.white};
`;


const cardData = {
  id: "32e4d468-7703-41c5-b8ec-007614167a37",
  name: "Drink teste",
  time: 15.50,
  preparation: 'oasdoaknsdoaksdnasd',
  ingredients: ['1 alcool', 'margarida', 'Apenas um test'],
  createdDate: "2023-01-04T03:21:09+0000",
  likes: 5,
  isAlcoholic: true,
  isVerfied: false,
  difficulty: "Easy",
  country: [
    {
      id: "32e4d468-7703-41c5-b8ec-007614167a37",
      nome: "drinkstão"
    }
  ],
  category: [
    {
      id: "32e4d468-7703-41c5-b8ec-007614167a37",
      name: "Categoria 1"
    }
  ]
} as DrinkDataType;

export const DrinkPage = ({ prop1, prop2 }: DrinkPageProps) => {
  return (
    <Container>
      <Card data={cardData} />
    </Container >
  );
};
