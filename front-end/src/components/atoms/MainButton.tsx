import styled, { css } from 'styled-components';
import Text from './Text';
import { classImplements } from '@babel/types';
import Icon from './Icon/Icon'; 
import { IconsTypes } from './Icon/IconTypes';

interface MainButtonInterface {
    type?: 'filled' | 'hollow' | 'filter';
    width?: string;
    height?: string;
    borderRadius?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | VoidFunction;
    children: string;
    fontSize?: string;
    icon?: IconsTypes;
}

interface GenericButtonInterface extends Omit<MainButtonInterface, "children"> {
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
    border-radius: ${({ borderRadius }) => borderRadius || '48px'};
    outline: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14);
    border: none;
    flex-basis: 0.5;
    cursor: pointer;

    ${({ typeDefinition }) => {
        switch (typeDefinition) {
            case 'filled':
                return css`
                    background-color: ${({ theme }) => theme.secondary};
                    color: ${({ theme }) => theme.primary};

                    & > span {
                        color: ${({ theme }) => theme.primary} !important;
                        font-family: Work Sans !important;
                    }
                `
            case 'hollow':
                return css`
                    background-color: ${({ theme }) => theme.primary};
                    color: ${({ theme }) => theme.secondary};
                    border: 1px solid ${({ theme }) => theme.secondary};

                    & > span {
                        color: ${({ theme }) => theme.secondary} !important;
                        font-family: Work Sans !important;
                    }
                `
            case 'filter':
                return css`
                    background-color: ${({ theme }) => theme.alternative_primary};
                    color: ${({ theme }) => theme.secondary};
                    border: 1px solid ${({ theme }) => theme.secondary};
                    border-radius: 8px;

                    & > span {
                        color: ${({ theme }) => theme.secondary} !important;
                        font-family: Work Sans !important;
                    }
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
    children,
    fontSize,
    icon
}: MainButtonInterface) => {
    return (
        <GenericButton
            data-testid='main button'
            onClick={onClick}
            typeDefinition={type || 'filled'}
            width={width}
            height={height}
            borderRadius={borderRadius}

        >
            {
                (icon)? <Icon icon={icon} size={fontSize} marginRight={'8px'} /> : null
            }
            
            <Text font-size={fontSize}>{children}</Text>
        </GenericButton>
    )
}

export default MainButton;
