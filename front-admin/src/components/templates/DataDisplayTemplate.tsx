import Card from '../organisms/Card';
import styled from 'styled-components';
import Header from '../organisms/Header';
import StringInput from '../molecules/StringInput';
import { Dropdown } from '../molecules/Dropdown';
import { useEffect, useState } from 'react';

interface DataDisplayTemplateProps {
  type: 'drink' | 'user'
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



const DataDisplayTemplate = ({ }: DataDisplayTemplateProps) => {
  const [data, setData] = useState<any[]>([]);
  const [nameQuery, setNameQuery] = useState<string>('');
  const [categories, setCategories] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState<string>('');

  useEffect(() => {
    // getCategories
    // getDrinks or getUsers
  }, []);

  useEffect(() => {
    console.log(categoryQuery); // replace with back end req
  }, [categoryQuery]);

  const renderCards = () => {
    return data.map((item) => (
      <Card
        key={item.id}
        cardTitle={item.name}
        cardType={'drink'}
        height='291px'
        drinkTime={item.time.toString()}
        drinkDifficulty={item.difficulty}
        drinkLocation={item.country[0].nome}
        drinkCategories={item.category[0].name}
      />
    ))
  }

  return (
    <PageContainer>
      <Header />

      <Container>
        <ControlsContainer>
          <Dropdown
            label={'Categorias'}
            icon={'segment'}
            options={categories}
            onSelect={(category) => setCategoryQuery(category)}
          />
          <StringInput
            value={nameQuery}
            onChange={(event) => setNameQuery(event.target.value)}
            height='58px'
            borderRadius='8px'
            hasSearchButton
            onSearch={() => { }} // replace with back end req
          />
          <Dropdown
            label={'Filtrar'}
            icon={'filter_list'}
            options={[]}
            onSelect={(option) => { }}
          />
        </ControlsContainer>

        <DataContainer>
          {renderCards()}
        </DataContainer>
      </Container>
    </PageContainer >
  );
};

export default DataDisplayTemplate;
