import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import userService from "../services/UserService";

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #191C24;
    align-items: center;
    justify-content: center;
`
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    width: 33.3%;
    height: 50%;
    flex-flow: column;
    justify-content: center;
`
const Icon = styled.span`
    font-family: 'Material Icons';
    font-size: 64px;
    color: #DAB783;
`
const Header = styled.h1`
    font-size: 40px;
    color: #DAB783;
    font-weight: medium;
    margin: unset;
    margin-bottom: 8px;
    font-family: 'PlayFair Display';
`;

const InputField = styled.input`
    width: 97%;
    border-width: 2px;
    border-color: #DAB783;
    border-radius: 8px;
    background-color: #272F38;
    color: #DAB783;
    font-size: 16px;
    padding: 5px;
    margin-top: 16px;
    
`

const LoginButton = styled.button`
    width: 100%;
    background-color: #DAB783;
    border-radius: 50px;
    border-width: 0;
    font-size: 16px;
    font-weight: bold;
    color: #191C24;
    padding: 5px;
    margin-top: 24px;
    justify-content: center;
    
    :hover {
        background-color: #d6bc98;
        cursor: pointer;
    }
`

const RegisterButton = styled.button`
    width: 100%;
    background-color: #DAB783;
    border-radius: 50px;
    border-color: #DAB783;
    background-color: #191C24;
    font-size: 16px;
    font-weight: bold;
    color: #DAB783;
    padding: 5px;
    margin-top: 16px;
    justify-content: center;

    :hover {
        background-color: #272F38;
        cursor: pointer;
    }

`
const LoginPage = () => {

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const login = async () => {
        await userService.loginUser(userName, password);
        navigate('/home');
    }

    return (
        <Container>
            <LoginContainer>
                <Icon>sports_bar</Icon>
                <Header>CopoCheio</Header>
                <InputField placeholder="Nome de usuário" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                <InputField placeholder="Senha" value={password} type='password' onChange={(e) => { setPassword(e.target.value) }} />
                <LoginButton onClick={login}>Login</LoginButton>
                <RegisterButton onClick={() => { navigate('/cadastro') }}>Cadastrar</RegisterButton>
            </LoginContainer>
        </Container>
    );
}

export default LoginPage;