import Text from '../atoms/Text'
import styled from 'styled-components';
import Label from '../molecules/Label';
import IconButton from '../molecules/IconButton';
import Card from '../organisms/Card';
import Dropdown from '../organisms/Dropdown';
import MainButton from '../atoms/MainButton';
import StringInput from '../molecules/StringInput';

interface DrinkCarouselInterface {
    title: string,
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 1em;
  
  & > span {
    padding-left: 16px;
  }

  & > div  {
    flex-basis: 0.4 !important;
  }  

`;

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
]

const pass = () => {
    console.log('passou')
}

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`

const ParametersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`



const SeachBar = ({
    title
}: DrinkCarouselInterface) => {

    return (
        <Container>
            <ParametersWrapper>
                <StringInput placeholder='Pesquisar |'/>
                <Dropdown label='Categorias' icon='segment' options={options} onSelect={pass} />
                <MainButton type='filter' icon='filter_list' onClick={pass}>Filtrar</MainButton>
            </ParametersWrapper>
            <ButtonWrapper>
                <MainButton type='filled' onClick={pass} width='50%'>SORTEAR DRINK</MainButton>
                <MainButton type='hollow' onClick={pass} width='50%'>REGISTRAR RECEITA</MainButton>
            </ButtonWrapper>
        </Container >
    );
};

export default SeachBar;