import styled, { css } from 'styled-components';
import Text from './Text';
import { ReactElement } from 'react';
import SpinnerLoading from './SpinnerLoading';

interface MainButtonInterface {
    type?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background' | 'loading';
    width?: string;
    height?: string;
    borderRadius?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | VoidFunction;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
    children?: string;
    fontSize?: string;
}

interface GenericButtonInterface extends Omit<MainButtonInterface, "children" | "leftElement" | "rightElement"> {
    typeDefinition: string
}

const GenericButton = styled.button<GenericButtonInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${({ width }) => width || 'fit-content'};
    height: ${({ height }) => height};
    padding: 8px 16px;
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    outline: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14);
    border: none;
    cursor: pointer;

    ${({ typeDefinition }) => {
        switch (typeDefinition) {
            case 'primary':
                return css`
                    background-color: ${({ theme }) => theme.primary};
                    color: ${({ theme }) => theme.alternative_white};
                `
            case 'confirm':
                return css`
                    background-color: ${({ theme }) => theme.success};
                    color: ${({ theme }) => theme.black};
                `
            case 'decline':
                return css`
                    background-color: ${({ theme }) => theme.denied};
                    color: ${({ theme }) => theme.alternative_white};
                `
            case 'cancel':
                return css`
                    background-color: rgba(153, 153, 153, 0.3);
                    color: ${({ theme }) => theme.black};
                `
            case 'no-background':
                return css`
                    background-color: transparent;
                    color: ${({ theme }) => theme.black};
                    box-shadow: none;
                    padding: 0;
                `
            case 'loading':
                return css`
                    color: ${({ theme }) => theme.loading};
                    cursor: default;
                `
        }
    }}
`

const MainButton = ({
    type,
    width,
    height,
    borderRadius,
    onClick,
    leftElement,
    rightElement,
    children,
    fontSize,
}: MainButtonInterface) => {
    return (
        <GenericButton
            data-testid='main button'
            onClick={type === 'loading' ? (e) => { e.preventDefault(); } : onClick}
            typeDefinition={type || 'primary'}
            width={width}
            height={height}
            borderRadius={borderRadius}

        >
            {leftElement}
            {type === 'loading' ? <SpinnerLoading /> : <Text size={fontSize}>{children}</Text>}
            {rightElement}
        </GenericButton>
    )
}

export default MainButton;
