import styled, { css } from 'styled-components';
import Text from '../atoms/Text';

interface ButtonInterface {
    variant?: 'primary' | 'secondary',
    children: string,
    onClick: VoidFunction
}

interface GenericButtonInterface extends Omit<ButtonInterface, "onClick" | "children"> { }

const GenericButton = styled.button<GenericButtonInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 16px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;

    ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return css`
                    background-color: ${({ theme }) => theme.secondary};
                    color: ${({ theme }) => theme.primary};
                `
            case 'secondary':
                return css`
                    background-color: transparent;
                    border: ${({ theme }) => `2px solid ${theme.secondary}`};
                    color: ${({ theme }) => theme.secondary};
                `
        }
    }}
`

const Button = ({ variant, children, onClick }: ButtonInterface) => {
    return (
        <GenericButton
            data-testid='main button'
            onClick={onClick}
            variant={variant || 'primary'}
        >
            <Text cta>{children.toUpperCase()}</Text>
        </GenericButton>
    )
}

export default Button;
