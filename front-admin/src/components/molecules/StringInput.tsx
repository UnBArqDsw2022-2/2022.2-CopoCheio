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
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '40px'};
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    border: 1px solid #ced4da;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const GenericInputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    align-items: flex-start;
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
            <Text color='grey' size='1em'>{placeholder}</Text>
            <GenericStringInput
                data-testid='email-input'
                type={type || 'text'}
                width={width}
                height={height}
                borderRadius={borderRadius}
                onChange={onChange}
                value={value}
                fontSize={fontSize}
            >
            </GenericStringInput>
            <Text color='red' size='14px' margin='4px 0px'>{inputError}</Text>
        </GenericInputField >
    )
}


export default StringInput;
