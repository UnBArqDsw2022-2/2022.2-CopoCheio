import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { IconsTypes } from '../atoms/Icon/IconTypes';
import Text from '../atoms/Text';

interface StringInputInterface {
    type?: "text" | "email" | "password";
    width?: string;
    height?: string;
    borderRadius?: string;
    fontSize?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string;
    inputError?: string
    icon?: IconsTypes
}

interface GenericStringInputInterface extends Omit<StringInputInterface, "placeholder"> {
    type: "text" | "email" | "password",
}

interface GenericInputFieldInterface {
    borderRadius?: string,
}

interface GenericInputContainerInterface {
    width?: string;
}

const GenericStringInput = styled.input<GenericStringInputInterface>`
    flex-grow: 1;
    height: ${({ height }) => height || '40px'};
    font-size: 1rem;
    line-height: 1.5;
    border: none;
    padding: 0px;
`

const GenericInputField = styled.div<GenericInputFieldInterface>`
    flex-grow: 1;
    width: 100%;
    max-height: 60px;
    border: 1px solid #ced4da;
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    padding: 1rem;
    cursor: pointer;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #495057;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const GenericInputContainer = styled.div<GenericInputContainerInterface>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${({ width }) => width || '100%'};
    gap: 0.5rem;
`

const StringInput = ({
    type,
    width,
    height,
    borderRadius,
    placeholder,
    onChange,
    value,
    fontSize,
    inputError,
    icon
}: StringInputInterface) => {
    return (
        <GenericInputContainer width={width}>
            {placeholder && <Text color='grey' size='1em'>{placeholder}</Text>}
            <GenericInputField borderRadius={borderRadius}>
                {icon &&
                    <Icon
                        icon={icon}
                        size={'24px'}
                        marginRight={'8px'}
                    />
                }

                <GenericStringInput
                    data-testid='email-input'
                    type={type || 'text'}
                    height={height}
                    onChange={onChange}
                    value={value}
                    fontSize={fontSize}
                />
            </GenericInputField >
            {inputError && <Text color='red' size='14px' margin='4px 0px'>{inputError}</Text>}
        </GenericInputContainer>
    )
}


export default StringInput;
