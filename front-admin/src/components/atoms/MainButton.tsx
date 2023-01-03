import styled, { css } from 'styled-components';
import Text from '../atoms/Text';

interface MainButtonInterface {
    type?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    width?: string;
    height?: string;
    border_radius?: string;
    onClick: VoidFunction;
    iconLeft?: string;
    iconRight?: string;
    children: string
}

interface GenericButtonInterface extends Omit<MainButtonInterface, "children" | "iconLeft" | "iconRight"> {
    typeDefinition: string
}

const GenericButton = styled.button<GenericButtonInterface>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    max-width: 446px;
    min-height: 55px;
    border-radius: ${({ border_radius }) => border_radius || '8px'};
    outline: none;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
    border: none;
    cursor: pointer;

    ${({ typeDefinition }) => {
        switch (typeDefinition) {
            case 'primary':
                return css`
                    background-color: #FEA444;
                    color: #fefefe;
                `
            case 'confirm':
                return css`
                    background-color: #8CE563;
                    color: #4a4a4a;
                `
            case 'decline':
                return css`
                    background-color: #FF5F5F;
                    color: #fefefe;
                `
            case 'cancel':
                return css`
                    background-color: rgba(153, 153, 153, 0.3);;
                    color: #4a4a4a;
                `
            case 'no-background':
                return css`
                    background-color: none;
                    color: #4a4a4a;
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
}: MainButtonInterface) => {
    return (
        <GenericButton
            onClick={onClick}
            typeDefinition={type || 'primary'}
            width={width}
            height={height}
            border_radius={border_radius}
        >
            {
                iconLeft && 'Narutin '
            }
            <Text>{children}</Text>
            {
                iconRight && ' Sasuke'
            }
        </GenericButton>
    )
}


export default MainButton;