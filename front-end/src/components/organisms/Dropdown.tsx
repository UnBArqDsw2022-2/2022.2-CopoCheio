import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text'
import styled from 'styled-components';
import { IconsTypes } from '../atoms/Icon/IconTypes';
import { useState } from 'react';
import BoxContainer from '../atoms/BoxContainer';


interface DropdownProps {
    label: string;
    icon: IconsTypes;
    options: any[];
    onSelect: (value: string) => void
}


export const Container = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  color: ${({ theme }) => theme.secondary};
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 64px;
  border-radius: 8px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
  background-color: ${({ theme }) => theme.alternative_primary};
  color: ${({ theme }) => theme.white};
  width: 100%;
  max-height: 11rem;
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
  
  :hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;


const Dropdown = ({ label, icon, options, onSelect }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (option: string) => {
        onSelect(option);
        setOpen(false);
    }

    const renderOptions = () => {
        return options.map((option) => (
            <Option onClick={() => handleSelect(option)}>
                <Text cta size='16px'>{option}</Text>
            </Option>
        ))
    }

    return (
        <BoxContainer>
            <Container
                data-testid='dropdown'
                onClick={() => setOpen(!open)}
            >
                <LabelContainer>
                    <Icon
                        icon={icon}
                        size={'24px'}
                        marginRight={'8px'}
                    />
                    <Text cta size='16px' weight='medium'>{label}</Text>
                </LabelContainer>

                <Icon
                    icon={'expand_more'}
                    size={'40px'}
                    rotate={open}
                />

                {open &&
                    <OptionsContainer>
                        {renderOptions()}
                    </OptionsContainer>
                }
            </Container >
        </BoxContainer>
    );
};

export default Dropdown;