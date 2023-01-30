import styled, { css } from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { IconsTypes } from '../atoms/Icon/IconTypes';

interface ButtonInterface {
    icon: IconsTypes,
    onClick: VoidFunction,
    selected?: boolean,
    selectedColor?: string,
    unselectedColor?: string
}

interface GenericButtonInterface extends Omit<ButtonInterface, "onClick" | "icon"> { }

const GenericButton = styled.button<GenericButtonInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};

    ${({ selected, selectedColor, unselectedColor }) => {
        if (selected && selectedColor) {
            return css`
                color: ${({ theme }) => theme.secondary};
            `
        }
        else if(unselectedColor) return css`
                color: ${({ theme }) => theme.secondary};
            `
    }};
`

const IconButton = ({ icon, onClick, selected, selectedColor, unselectedColor }: ButtonInterface) => {
    return (
        <GenericButton
            data-testid='icon button'
            onClick={onClick}
            selectedColor={selectedColor}
            unselectedColor={unselectedColor}
            selected={selected}
        >
            <Icon
                icon={icon}
                size={'24px'}
            />
        </GenericButton>
    )
}

export default IconButton;
