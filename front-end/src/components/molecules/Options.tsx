import Text from '../atoms/Text'
import styled from 'styled-components';

interface OptionsInterface {
    options: any[];
    onSelect: (value: string) => void
}


export const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 64px;
  border-radius: 8px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.alternative_white};
  gap: 1px;
  width: 100%;
  max-height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  overflow-y: scroll;
`;

export const Option = styled.button`
  border: none;
  background: transparent;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.alternative_primary};
  
  :hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;


const Options = ({ options, onSelect }: OptionsInterface) => {

    const renderOptions = () => {
        return options.map((option) => (
            <Option onClick={() => onSelect(option)}>
                <Text cta size='16px'>{option}</Text>
            </Option>
        ))
    }

    return (
        <OptionsContainer>
            {renderOptions()}
        </OptionsContainer>
    );
};

export default Options;