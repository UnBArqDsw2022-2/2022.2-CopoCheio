import styled, { css } from 'styled-components';
import Text from './Text';

interface StringInputInterface {
    type?: "text" | "email" | "password";
    width?: string;
    height?: string;
    border_radius?: string;
    fontSize?: string;
    placeholder?: string;
}

interface GenericStringInputInterface extends Omit<StringInputInterface, "placeholder"> {
    type: "text" | "email" | "password",
}

const GenericStringInput = styled.input<GenericStringInputInterface>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '40px'};
    border-radius: ${({ border_radius }) => border_radius || '4px'};
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
    border_radius,
    fontSize,
    placeholder: placeholder,
}: StringInputInterface) => {
    return (
        <GenericInputField>
            <Text color='grey' size='0.8em'>{placeholder}</Text>
            <GenericStringInput
                data-testid='email-input'
                type={type || 'text'}
                placeholder={placeholder}
                width={width}
                height={height}
                border_radius={border_radius}
            >
            </GenericStringInput>
        </GenericInputField>
    )
}

export default StringInput;
