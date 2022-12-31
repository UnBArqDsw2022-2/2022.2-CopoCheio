import styled, { css } from 'styled-components';

interface MainButtonInterface {
    type?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    width?: string;
    height?: string;
    border_radius?: string;
    children: string;
    onClick: VoidFunction;
}

interface GenericButtonInterface extends MainButtonInterface {
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

const MainButton = ({ type, children, width, height, border_radius, onClick }: MainButtonInterface) => {

    return (
        <GenericButton
            onClick={onClick}
            typeDefinition={type || 'primary'}
            width={width}
            height={height}
            border_radius={border_radius}
        >
            {children}
        </GenericButton>
    )
}


export default MainButton;