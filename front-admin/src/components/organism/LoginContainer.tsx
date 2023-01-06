import styled, { css } from 'styled-components';
import MainButton from '../atoms/MainButton';
import Text from '../atoms/Text';
import StringInput from '../atoms/StringInput';
import LinkTag from '../atoms/LinkTag';
import { colors } from '../../styles/colors';
import React from 'react';
// import toastGlass from '../../assets/toastGlass.png';

interface LoginContainerInterface {
    width?: string;
    height?: string;
    borderRadius?: string;
    title?: string;
    fontSizeTitle?: string;
    subtitle?: string;
    fontSizeSubtitle?: string;
    textLinked?: string;
    href?: string;
}


// const Globe = () => {
//     return (
//         <img src={''} alt="Logo" />
//     )
// }

const GenericContainer = styled.div<LoginContainerInterface>`
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.alternative_white};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    height: 45em;
    width: clamp(300px, 40vw, 800px);
    padding: 5vw;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
`

const LoginContainer = ({
    width,
    height,
    borderRadius,
    title,
    fontSizeTitle,
    subtitle,
    fontSizeSubtitle,
    textLinked,
    href,
}: LoginContainerInterface) => {
    return (
        <GenericContainer
            data-testid='login-container'
            width={width}
            height={height}
            borderRadius={borderRadius}
        >
            {/* <Globe /> */}
            {/* <Text size={fontSizeTitle} margin="0px 0px 40px 0px">{title}</Text>

            <MainButton width='100%' height='55px' onClick={() => { }} children='Acessa Conta'></MainButton>

            <Text size={fontSizeSubtitle} color={colors.black} margin='40px 18% 0px 18%' fontWeight='400'>
                {subtitle}
                <LinkTag href={href} text={textLinked} />
            </Text> */}

            <Text size={fontSizeTitle} margin-bottom="40px">{title}</Text>
            <StringInput width='100%' type='email' placeholder='E-mail' />
            <StringInput width='100%' type='password' placeholder='Senha' />
            <MainButton width='100%' onClick={() => { }} children='Acessa Conta'></MainButton>
            <Text size={fontSizeSubtitle}>{subtitle}</Text>
        </GenericContainer>
    )
}

export default LoginContainer;
