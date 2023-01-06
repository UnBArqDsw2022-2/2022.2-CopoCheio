import { colors } from '../../styles/colors';
import styled from 'styled-components';
import MainButton from '../atoms/MainButton';
import Text from '../atoms/Text';
import StringInput from '../molecules/StringInput';
import LinkTag from '../atoms/LinkTag';
import ImageLogo from '../atoms/ImageLogo';
// import userService from "../../services/UserService";

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
    height: 55em;
    width: clamp(300px, 40vw, 650px);
    padding: 3.5vw;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
`

const LoginContainer = () => {
    return (
        <GenericLoginContainer
            data-testid='login-container'
        >
            <ImageLogo path='/images/toast-glass.png' />
            <Text size='1.8rem' margin="0px 0px 20px 0px" >Acesse sua conta</Text>
            <StringInput width='100%' height='56px' type='email' placeholder='E-mail' />
            <StringInput width='100%' height='56px' type='password' placeholder='Senha' />
            <MainButton width='100%'
                onClick={() => {
                    // for (let index = 1; index < 6; index++) {
                    //     userService.endPoint = `contest-type/${index}`;
                    //     userService.getUserData();
                    // }
                }}
                children='Acessar Conta' height='56px' margin-bottom='40px' fontSize='22px'></MainButton>
            <Text size='1rem' color={colors.black} margin-top='40px' fontWeight='400' margin="40px 0px 0px 0px">
                Para ter acesso a nossa plataforma de controle, entre em contato com um dos
                <LinkTag href='https://unbarqdsw2022-2.github.io/2022.2-CopoCheio/#/'
                    text='nossos desenvolvedores.' />
            </Text>
        </GenericLoginContainer>
    )
}

export default LoginContainer;