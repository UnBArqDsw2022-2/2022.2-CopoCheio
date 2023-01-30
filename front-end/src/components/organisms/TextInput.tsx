import styled from 'styled-components';
import IconButton from '../molecules/IconButton';

interface TextInputInterface {
    type?: "text" | "email" | "password";
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string;
    hasSearchButton?: boolean;
    onSearch?: VoidFunction
}

interface GenericTextInputInterface extends Omit<TextInputInterface, "placeholder"> {
    type: "text" | "email" | "password",
}

const GenericTextInput = styled.input<GenericTextInputInterface>`
    flex-grow: 1;
    font-size: 1rem;
    border: none;
    padding: 0px;
    background-color: transparent;
    color: ${({ theme }) => theme.secondary};
    font-family: 'Work Sans', sans-serif;
`

const GenericInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.5rem;
`

const TextInput = ({
    type,
    placeholder,
    onChange,
    value,
    hasSearchButton,
    onSearch
}: TextInputInterface) => {
    return (
        <GenericInputContainer>
            <GenericTextInput
                data-testid='email-input'
                type={type || 'text'}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
            {hasSearchButton &&
                <IconButton icon={'search'} onClick={onSearch ? onSearch : () => { }} />
            }
        </GenericInputContainer >
    )
}


export default TextInput;
