import { colors } from '../../styles/colors';
import styled from 'styled-components';
import Text from '../atoms/Text';
import ColoredBar from "../atoms/ColoredBar";
import Header from './Header';

const GenericProfileDeskContainer = styled.div`
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.alternative_white};
    border-radius: 8px;
    height: 1024px;
    width: 1440px;
    padding: 3.5vw;
    max-width: 540px;
`
const ProfileDeskContainer = () => {
    return (
        <GenericProfileDeskContainer
            data-testid='profile-desk-container'
        >
            <Header />
            <ColoredBar />
            <Text color={colors.black} size='1.8rem'>Meu perfil</Text>
        </GenericProfileDeskContainer>
    )
}

export default ProfileDeskContainer;