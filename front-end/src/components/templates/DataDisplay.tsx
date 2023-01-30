import styled from 'styled-components';
import BoxContainer from '../atoms/BoxContainer';
import Icon from '../atoms/Icon/Icon';
import Dropdown from '../organisms/Dropdown';
import Header from '../organisms/Header';
import TextInput from '../organisms/TextInput';
import Text from '../atoms/Text';

interface DataDisplayProps {
    children: React.ReactNode
}

const PageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
`;

export const ControlsContainer = styled.div`
  width: min(80%, 929px);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;

  @media (max-width: 850px) {
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SingleSpan = styled.div`
  grid-column: span 1 / span 1;
`;

export const DoubleSpan = styled.div`
  grid-column: span 2 / span 2;
`;


const DataDisplay = ({ children }: DataDisplayProps) => {
    return (
        <PageContainer>
            <Header />

            <ControlsContainer>
                <DoubleSpan>
                    <TextInput hasSearchButton placeholder='Pesquisar...' />
                </DoubleSpan>

                <SingleSpan>
                    <BoxContainer>
                        <Icon
                            icon={'filter_list'}
                            size={'24px'}
                        />

                        <Text
                            size={'18px'}
                            weight='medium'
                            color={'gold'}
                            cta
                        >
                            Filtrar
                        </Text>
                    </BoxContainer>
                </SingleSpan>

                <SingleSpan>
                    <Dropdown icon={'segment'} label={"Categorias"} options={[1, 2, 3]} onSelect={() => { }} />
                </SingleSpan>
            </ControlsContainer>

            {children}
        </PageContainer >
    );
};

export default DataDisplay;