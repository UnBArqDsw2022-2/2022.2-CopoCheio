import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import StringInput from '../molecules/StringInput';


interface SearchBarParams {
    onSearch?: VoidFunction;
    value?: string;
    setValue: ChangeEventHandler<HTMLInputElement>;
}

// export const SearchBarParamsStyle = styled.div`
//   width: min(80%, 929px);
//   display: flex;
//   justify-content: center;
//   gap: 1rem;

//   @media (max-width: 1011px) {
//     flex-direction: column;
//     gap: 0.5rem;
//     width: max(50%, 320px);
//   }

//   @media (max-width: 450px) {
//     width: 100%;
//   }
// `;

const SearchBar = ({ onSearch, value, setValue }: SearchBarParams) => {

    return (
        <StringInput
            value={value}
            onChange={setValue}
            onSearch={onSearch}
            height='58px'
            width='499px'
            borderRadius='8px'
            hasSearchButton
        />
    );
}

export default SearchBar;