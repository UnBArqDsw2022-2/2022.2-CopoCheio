import styled, { css } from 'styled-components';
import MainButton from '../atoms/MainButton';
import Text from '../atoms/Text';
import StringInput from '../atoms/StringInput';

interface LoginContainerInterface {
    width?: string;
    height?: string;
    borderRadius?: string;
    title?: string;
    fontSizeTitle?: string;
    subtitle?: string;
    fontSizeSubtitle?: string;
}

const GenericContainer = styled.div<LoginContainerInterface>`
    display: flex;
    padding: 56px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.alternative_white};
    width: ${({ width }) => width || 'fit-content'};
    height: ${({ height }) => height};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
`
// position: absolute;
// left: 50%;
// top: 50%;
// transform: translate(-50%, -50%);

const LoginContainer = ({
    width,
    height,
    borderRadius,
    title,
    fontSizeTitle,
    subtitle,
    fontSizeSubtitle,
}: LoginContainerInterface) => {
    return (
        <GenericContainer
            data-testid='main button'
            width={width}
            height={height}
            borderRadius={borderRadius}
        >
            <Text size={fontSizeTitle} margin-bottom="40px">{title}</Text>
            <MainButton width='100%' onClick={() => { }} children='Acessa Conta'></MainButton>
            <StringInput width='100%' type='submit' value='email'></StringInput>
            <Text size={fontSizeSubtitle}>{subtitle}</Text>
        </GenericContainer>
    )
}

export default LoginContainer;
