import { useState } from "react";
import styled from "styled-components";

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
    background-color: white;
    width: 33.3%;
    height: 50%;
    flex-flow: row;
    justify-content: center;
`
const Icon = styled.div`
    height: 64px;
    background-color: #DAB783;
    width: 64px;
    border-radius: 100%;
`
const LoginPage = () => {

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = () => {
        console.log('Login');
    }

    return (
        <Container>
            <LoginContainer>
                <Icon/>
            </LoginContainer>
        </Container>
    );
}

export default LoginPage;