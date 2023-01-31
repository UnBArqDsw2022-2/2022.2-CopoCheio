import styled from 'styled-components';
import Button from "../molecules/Button";
import TextInput from "../organisms/TextInput";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon/Icon";

const GenericContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #191C24;
    align-items: center;
    justify-content: center;
`
const SignUpContainer = styled.div`
    display: flex;
    align-items: center;
    width: 33.3%;
    height: 50%;
    flex-flow: column;
    justify-content: center;
`

const SignUpTemplate = () => {
    return (
        <GenericContainer>
            <SignUpContainer>
                <Icon icon="sports_bar" size="64px" color="#DAB783" />
                <Text size='40px' weight='semibold' color='gold'>CopoCheio</Text>

                <TextInput type="text" placeholder="Insira seu nome de usuário" />
                <TextInput type="email" placeholder="Insira seu e-mail" />
                <TextInput type="password" placeholder="Insira sua senha" />

                <Button variant="primary" children="CRIAR CONTA" onClick={() => { }} />
                <Button variant="secondary" children="LOGIN" onClick={() => { }} />
            </SignUpContainer>
        </GenericContainer>
    );
};

export default SignUpTemplate;