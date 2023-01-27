import { colors } from '../../styles/colors';
import styled from 'styled-components';
import Text from '../atoms/Text';
import LinkTag from '../atoms/LinkTag';
import LoginForm from '../molecules/LoginForm';
import Image from '../atoms/Image';


const GenericLoginContainer = styled.div`
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.alternative_white};
    border-radius: 8px;
    height: 700px;
    width: clamp(300px, 40vw, 775px);
    padding: 3.5vw;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
    max-width: 540px;
`

const LoginContainer = () => {
    return (
        <GenericLoginContainer
            data-testid='login-container'
        >
            <Image src="/images/toast-glass.png" />
            <Text color={colors.black} size='1.8rem'>Acesse sua conta</Text>
            <LoginForm />
            <Text size='1rem' color={colors.black} weight='regular'>
                Para ter acesso a nossa plataforma de controle, entre em contato com um dos
                <LinkTag href='https://unbarqdsw2022-2.github.io/2022.2-CopoCheio/#/'
                    text=' nossos desenvolvedores.' />
            </Text>
        </GenericLoginContainer>
    )
}

export default LoginContainer;