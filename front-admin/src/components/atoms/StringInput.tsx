import styled, { css } from 'styled-components';
import Text from './Text';
import Icon from './Icon/Icon';
import { IconsTypes } from './Icon/IconTypes';

interface StringInputInterface {
    type?: "text" | "submit" | "password";
    width?: string;
    height?: string;
    border_radius?: string;
    fontSize?: string;
    value?: string;
}

interface GenericStringInputInterface extends Omit<StringInputInterface, "value" | "type"> {
    type?: string,
}

const GenericStringInput = styled.input<GenericStringInputInterface>`
    background: #00aec9;
    color: #fff;
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    &:active {
    background-color: #f1ac15;
    }

    ${({ type }) => {
        switch (type) {
            case 'submit':
                return css`
                    background-color: #000;
                `
        }
    }}
`

const StringInput = ({
    type,
    width,
    height,
    border_radius,
    fontSize,
    value,
}: StringInputInterface) => {
    return (
        <GenericStringInput
            data-testid='email-input'
            type={type || 'submit'}
            value={value}
            width={width}
            height={height}
            border_radius={border_radius}
        >
        </GenericStringInput>
    )
}

export default StringInput;
