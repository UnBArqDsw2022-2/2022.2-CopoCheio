import styled from "styled-components";
import MainButton from '../atoms/MainButton';
import StringInput from '../molecules/StringInput';

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
    return (
        <GenericLoginForm
            data-testid='login-form'
        >
            <StringInput width='100%' height='56px' type='email' placeholder='E-mail' />
            <StringInput width='100%' height='56px' type='password' placeholder='Senha' />
            <MainButton width='100%'
                onClick={() => {
                    // for (let index = 1; index < 6; index++) {
                    //     userService.endPoint = `contest-type/${index}`;
                    //     userService.getUserData();
                    // }
                }}
                children='Acessar Conta'
                height='56px'
                fontSize='22px'
            />            
        </GenericLoginForm>
    )
}

export default LoginForm;