import Card from '../organisms/Card';
import styled from 'styled-components';
import Header from '../organisms/Header';
import StringInput from '../molecules/StringInput';
import { Dropdown } from '../molecules/Dropdown';
import GenericContainer from "../atoms/GenericContainer";


interface DataDisplayTemplateProps {

}

const PageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 6.25rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 4.5rem;

  @media (max-width: 450px) {
    padding: 0 1.5rem;
  }
`;

export const ControlsContainer = styled.div`
  width: min(80%, 929px);
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 1011px) {
    flex-direction: column;
    gap: 0.5rem;
    width: max(50%, 320px);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 227px;
  height: 291px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.grey};
`;

export const DataContainer = styled.div`
  max-width: 80%;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(227px, 227px));

  @media (max-width: 450px) {
    padding: 0 1.5rem;
    width: 100%;
  }
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
}

const renderCards = () => {
  return Array.from({ length: 10 }, (_, i) => i).map(() => (
    <CardContainer />
  ))
}

const DataDisplayTemplate = ({ }: DataDisplayTemplateProps) => {
  return (
    <PageContainer>
      <Header />

      <Container>
        <ControlsContainer>
          <Dropdown label={'Categorias'} icon={'block'} options={[]} />
          <StringInput height='58px' borderRadius='8px' />
          <Dropdown label={'Filtrar'} icon={'block'} options={[]} />
        </ControlsContainer>

        <DataContainer>
          {renderCards()}
        </DataContainer>
      </Container>
    </PageContainer >
  );
};

export default DataDisplayTemplate;
