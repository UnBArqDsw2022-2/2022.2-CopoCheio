import Card from '../organisms/Card';
import styled from 'styled-components';
import Header from '../organisms/Header';
import StringInput from '../molecules/StringInput';
import { Dropdown } from '../molecules/Dropdown';
import { useEffect, useState } from 'react';
import DrinkService from '../../services/DrinkService';
import CategoryService from '../../services/CategoryService';

interface DataDisplayTemplateProps {
  type: 'drink' | 'user',
}

const PageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 99px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 76px;

  @media (max-width: 450px) {
    padding: 0 21px;
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
  gap: 56px;
  grid-template-columns: repeat(auto-fit, minmax(227px, 227px));

  @media (max-width: 450px) {
    padding: 0 21px;
    width: 100%;
  }
`;



const DataDisplayTemplate = ({type}: DataDisplayTemplateProps) => {
  const [data, setData] = useState<any[]>([]);
  const [nameQuery, setNameQuery] = useState<string>('');
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryQuery, setCategoryQuery] = useState<string>('Categorias');

  const drinksService=DrinkService.getInstance();
  const categoriesService=CategoryService.getInstance();
  

  const getDrinksHandle=async ()=>{
      const drinks=await drinksService.getDrinks();
      setData(drinks);
  }

  const getCategoryHandle=async ()=>{
      const categories=await categoriesService.getCategories();
      setCategories(categories)
  }

  useEffect(() => {
    // getCategories
    // getDrinks or getUsers

    if(type==="drink"){
      // eslint-disable-next-line
      getDrinksHandle();
      // eslint-disable-next-line
      getCategoryHandle();
    }
  });

  useEffect(() => {
    console.log(categoryQuery); // replace with back end req
  }, [categoryQuery]);

  const renderCards = () => {
    return data && data.map((item) => (
      <Card
        key={item.id}
        cardTitle={item.name}
        cardType={'drink'}
        height='291px'
        width='227px'
        backgroundImage={item.picture}
        drinkTime={item.time.toString()+" min"}
        drinkDifficulty={item.difficulty}
        drinkLocation={(item.country!==undefined?item.country.join(","):"Não definido")}
        drinkCategories={(item.category!==undefined?item.category.join(","):"Não definido")}
      />
    ))
  }

  return (
    <PageContainer>
      <Header />

      <Container>
        <ControlsContainer>
          {(type==="drink")&&(
            <Dropdown
              label={categoryQuery}
              icon={'segment'}
              options={categories}
              width='238px'
              onSelect={(category) => setCategoryQuery(category)}
            />
          )}
          <StringInput
            value={nameQuery}
            onChange={(event) => setNameQuery(event.target.value)}
            height='58px'
            width='499px'
            borderRadius='8px'
            hasSearchButton
            onSearch={() => { }} // replace with back end req
          />
          {(type==="drink")&&(
            <Dropdown
              label={'Filtrar'}
              icon={'filter_list'}
              options={[]}
              onSelect={(option) => { }}
            />
          )}
        </ControlsContainer>

        <DataContainer>
          {renderCards()}
        </DataContainer>
      </Container>
    </PageContainer >
  );
};

export default DataDisplayTemplate;
