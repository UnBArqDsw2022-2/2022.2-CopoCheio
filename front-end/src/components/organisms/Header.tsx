import { useState } from 'react';
import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text'
import styled from 'styled-components';
import Options from '../molecules/Options';
import IconButton from '../molecules/IconButton';


export const Container = styled.section`
  width: 100%;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${({ theme }) => theme.secondary};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: min(50%, 240px);
  position: relative;
`;

const Header = ({ }) => {
    const [open, setOpen] = useState(false);

    const navigationOptions = {
        'Minha conta': '',
        'Drinks favoritos': '',
        'Minhas bebidas': '',
        'Sair': '',
    };

    const handleSelect = (option: string) => {
        // navigate to navigationOptions[option]
        setOpen(false);
    }

    return (
        <Container
            data-testid='header'
            onClick={() => setOpen(!open)}
        >
            <TitleContainer>
                <Icon
                    icon={'sports_bar'}
                    size={'40px'}
                />
                <Text size='32px' weight='semibold' color='gold'>CopoCheio</Text>
            </TitleContainer>

            <OptionsContainer>
                <IconButton
                    icon={'reorder'}
                    size={'40px'}
                    onClick={() => setOpen(!open)}
                />
                {open &&
                    <Options
                        options={Object.keys(navigationOptions)}
                        onSelect={handleSelect}
                        distance="-13rem"
                    />
                }
            </OptionsContainer>
        </Container >
    );
};

export default Header;