import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text'
import styled from 'styled-components';
import { IconsTypes } from '../atoms/Icon/IconTypes';
import { useState } from 'react';


interface DropdownProps {
  label: string;
  icon: IconsTypes;
  options: any[];
  width?:string;
  onSelect: (value: string) => void
}

interface GenericContainerWidth {
  width?: string;
}


export const Container = styled.button<GenericContainerWidth>`
  max-height: 60px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  min-width:${({width})=>width};
  max-width:${({width})=>width};
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
  background-color: white;
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
  
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;


export const Dropdown = ({ label, icon, options,width, onSelect }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setOpen(false);
  }

  const renderOptions = () => {
    return options.map((option) => (
      <Option onClick={() => handleSelect(option)}>
        {option}
      </Option>
    ))
  }

  return (
    <Container width={width} onClick={() => setOpen(!open)}>
      <LabelContainer>
        <Icon
          icon={icon}
          size={'24px'}
          marginRight={'8px'}
        />
        <Text size='16px'>{label}</Text>
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
  );
};
