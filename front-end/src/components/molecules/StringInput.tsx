import styled from 'styled-components';
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
}

interface GenericStringInputInterface extends Omit<StringInputInterface, "placeholder"> {
    type: "text" | "email" | "password",
}

const GenericStringInput = styled.input<GenericStringInputInterface>`
    display: flex;
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    border: 1px solid ${({ theme }) => theme.secondary};
    padding: 0.375rem 0.75rem;
    font-size: 1em;
    line-height: 1.5;
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.alternative_primary} !important;
    background-clip: padding-box;
    font-family: Work Sans !important;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.secondary};
    }
`

const GenericInputField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
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
}: StringInputInterface) => {
    return (
        <GenericInputField>
            <GenericStringInput
                data-testid='string-input'
                type={type || 'text'}
                width={width}
                height={height}
                borderRadius={borderRadius}
                onChange={onChange}
                value={value}
                fontSize={fontSize}
                placeholder={placeholder}
            >
            </GenericStringInput>
            <Text color='gold' font-size='14px'>{inputError}</Text>
        </GenericInputField >
    )
}


export default StringInput;
