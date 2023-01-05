import styled, { css } from 'styled-components';
import Icon from './Icon/Icon';
import { IconsTypes } from './Icon/IconTypes';

interface IconButtonInterface {
    type?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    width?: string;
    height?: string;
    border_radius?: string;
    onClick: VoidFunction;
    icon?: IconsTypes;
    fontSize?: string;
    iconColor?: string;
}

interface GenericIconButtonInterface extends Omit<IconButtonInterface, "icon"> {
    typeDefinition: string
}

const GenericIconButton = styled.button<GenericIconButtonInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${({ width }) => width || 'fit-content'};
    height: ${({ height }) => height};
    padding: 8px;
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
            case 'default':
                return css`
                    background-color: rgba(254, 254, 254, 1);
                    color: ${({theme}) => theme.black};
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

const IconButton = ({
    type,
    width,
    height,
    border_radius,
    onClick,
    icon,
    fontSize,
    iconColor,
}: IconButtonInterface) => {
    return (
        <GenericIconButton
            data-testid='icon button'
            onClick={onClick}
            typeDefinition={type || 'default'}
            width={width}
            height={height}
            border_radius={border_radius}
        >
            {icon && <Icon size={fontSize} icon={icon} color={iconColor && iconColor} />}
        </GenericIconButton>
    )
}

export default IconButton;
