import styled from "styled-components";
import MainButton from '../atoms/MainButton';
import StringInput from '../molecules/StringInput';
import userService from "../../services/UserService";
import Text from '../atoms/Text';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegexValidations from "../../utils/regexValidations";

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
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [stateButton, setStateButton] = useState<"primary" | "loading" | "confirm" | "decline" | "cancel" | "no-background" | undefined>();


    const navigate = useNavigate();

    const callLoginUser = () => {
        const emailValidate = RegexValidations.validateEmail(email);
        const passwordValidate = RegexValidations.validatePassword(password);

        setEmailError(emailValidate || '');
        setPasswordError(passwordValidate || '');


        if (!emailValidate && !passwordValidate) {
            setStateButton('loading');
            userService.loginUser(email.trim(), password)
                .then(() => {
                    setStateButton('primary');
                    navigate("/home");
                })
                .catch((error) => {
                    setStateButton('primary');
                    setResponseError(error)
                })
        }
    };

    return (
        <GenericLoginForm
            data-testid='login-form'
        >
            <Text color="red">{responseError}</Text>
            <StringInput width='100%' height='56px' type='email' placeholder='E-mail' inputError={emailError} onChange={(event) => setEmail(event.target.value)} />
            <StringInput width='100%' height='56px' type='password' placeholder='Senha' inputError={passwordError} onChange={(event) => setPassword(event.target.value)} />
            <MainButton
                width='100%'
                onClick={(e) => {
                    e.preventDefault();
                    callLoginUser();
                }}
                type={stateButton}
                children='Acessar Conta'
                height='56px'
                fontSize='22px'
            />

        </GenericLoginForm>
    )
}

export default LoginForm;