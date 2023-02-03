import { ChangeEventHandler } from 'react';
import StringInput from '../molecules/StringInput';


interface SearchBarParams {
    onSearch?: VoidFunction;
    value?: string;
    setValue: ChangeEventHandler<HTMLInputElement>;
}


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