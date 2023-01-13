import styled from "styled-components";
import MainButton from '../atoms/MainButton';
import StringInput from '../molecules/StringInput';
import userService from "../../services/UserService";
import Text from '../atoms/Text';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenericLoginForm = styled.form`
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: clamp(270px, 95%, 700px);
`



const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [responseError, setResponseError] = useState<string>("");

    const navigate = useNavigate();

    const callLoginUser = () => {
        userService.loginUser(email, password)
            .then((status) => {
                if (status === 200) {
                    navigate("/home");
                }
            }
            ).catch((error) => {
                setResponseError(error)
            })
    }

    return (
        <GenericLoginForm
            data-testid='login-form'
        >

            <Text color="red">{responseError}</Text>
            <StringInput width='100%' height='56px' type='email' placeholder='E-mail' onChange={(event) => { setEmail(event.target.value) }} />
            <StringInput width='100%' height='56px' type='password' placeholder='Senha' onChange={(event) => { setPassword(event.target.value) }} />
            <MainButton width='100%'
                onClick={(event) => {
                    event.preventDefault();
                    if (email && password)
                        callLoginUser();
                }}
                children='Acessar Conta'
                height='56px'
                fontSize='22px'
            />

        </GenericLoginForm>
    )
}

export default LoginForm;