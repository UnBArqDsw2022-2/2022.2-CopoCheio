import styled, { css } from 'styled-components';
import Text from '../atoms/Text';
import Icon from './Icon/Icon';
import { IconsTypes } from './Icon/IconTypes';

interface MainButtonInterface {
    type?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    width?: string;
    height?: string;
    border_radius?: string;
    onClick: VoidFunction;
    iconLeft?: IconsTypes;
    iconRight?: IconsTypes;
    children: string;
    fontSize?: string;
}

interface GenericButtonInterface extends Omit<MainButtonInterface, "children" | "iconLeft" | "iconRight"> {
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
    border-radius: ${({ border_radius }) => border_radius || '8px'};
    outline: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14);
    border: none;
    cursor: pointer;

    ${({ typeDefinition }) => {
        switch (typeDefinition) {
            case 'primary':
                return css`
                    background-color: ${({theme}) => theme.primary};
                    color: ${({theme}) => theme.alternative_white};
                `
            case 'confirm':
                return css`
                    background-color: ${({theme}) => theme.success};
                    color: ${({theme}) => theme.black};
                `
            case 'decline':
                return css`
                    background-color: ${({theme}) => theme.denied};
                    color: ${({theme}) => theme.alternative_white};
                `
            case 'cancel':
                return css`
                    background-color: rgba(153, 153, 153, 0.3);
                    color: ${({theme}) => theme.black};
                `
            case 'no-background':
                return css`
                    background-color: transparent;
                    color: ${({theme}) => theme.black};
                    box-shadow: none;
                `
        }
    }}
`

const MainButton = ({
    type,
    width,
    height,
    border_radius,
    onClick,
    iconLeft,
    iconRight,
    children,
    fontSize,
}: MainButtonInterface) => {
    return (
        <GenericButton
            data-testid='main button'
            onClick={onClick}
            typeDefinition={type || 'primary'}
            width={width}
            height={height}
            border_radius={border_radius}
        >
            {iconLeft && <Icon marginRight='4px' size={fontSize} icon={iconLeft} />}
            <Text size={fontSize}>{children}</Text>
            {iconRight && <Icon marginLeft='4px' size={fontSize} icon={iconRight} />}
        </GenericButton>
    )
}

export default MainButton;
