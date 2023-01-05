import styled, { css } from 'styled-components';
import MainButton from '../atoms/MainButton';
import Text from '../atoms/Text';

// function LoginContainer(props: any) {
//     return <div style={{
//         backgroundColor: "#FEFEFE", position: 'absolute', justifyContent: "center", alignItems: "center", left: '50%', top: '50%', padding: '50px', transform: 'translate(-50%, -50%)',
//     }}> Teste {props.children} </div>
// }

interface LoginContainerInterface {
    width?: string;
    height?: string;
    border_radius?: string;
    children?: string;
    fontSize?: string;
}

interface GenericContainerInterface extends Omit<LoginContainerInterface, "children"> {
}

const GenericContainer = styled.div<GenericContainerInterface>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.alternative_white};
    width: ${({ width }) => width || 'fit-content'};
    height: ${({ height }) => height};
    border-radius: ${({ border_radius }) => border_radius || '8px'};
`

// position: absolute;
// left: 50%;
// top: 50%;
// transform: translate(-50%, -50%);

const LoginContainer = ({
    width,
    height,
    border_radius,
    children,
    fontSize,

}: LoginContainerInterface) => {
    return (
        <GenericContainer
            data-testid='main button'
            width={width}
            height={height}
            border_radius={border_radius}
        >
            <Text size={fontSize}>{children}</Text>
            <MainButton onClick={() => { }} children='Acessar Conta'></MainButton>
        </GenericContainer>
    )
}

export default LoginContainer;