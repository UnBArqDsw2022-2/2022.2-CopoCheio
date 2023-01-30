import styled, { css } from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { IconsTypes } from '../atoms/Icon/IconTypes';

interface ButtonInterface {
    icon: IconsTypes,
    onClick: VoidFunction,
    size?: string,
    hasBackground?: boolean,
    selected?: boolean,
    selectedColor?: 'white' | 'secondary',
    unselectedColor?: 'white' | 'secondary'
}

interface IconButtonInterface extends Omit<ButtonInterface, "onClick" | "icon"> { }

const Button = styled.button<IconButtonInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};

    ${({ hasBackground, selected, selectedColor, unselectedColor }) => {
        if (hasBackground) {
            return css`
                color: ${({ theme }) => theme.primary};
                background-color: ${({ theme }) => theme.secondary};
                padding: 1rem;
                border-radius: 999px;
            `
        } else {
            if (selected && selectedColor) return css`
                color: ${({ theme }) => theme[selectedColor]};
            `
            else if (unselectedColor) return css`
                color: ${({ theme }) => theme[unselectedColor]};
            `
        }
    }};
`

const IconButton = ({
    icon,
    onClick,
    size,
    hasBackground,
    selected,
    selectedColor,
    unselectedColor
}: ButtonInterface) => {
    return (
        <Button
            data-testid='icon button'
            onClick={onClick}
            hasBackground={hasBackground}
            selectedColor={selectedColor}
            unselectedColor={unselectedColor}
            selected={selected}
        >
            <Icon
                icon={icon}
                size={size || '24px'}
            />
        </Button>
    )
}

export default IconButton;
