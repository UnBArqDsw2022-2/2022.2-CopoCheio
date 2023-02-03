import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text'
import styled from 'styled-components';
import { IconsTypes } from '../atoms/Icon/IconTypes';
import { useState } from 'react';
import BoxContainer from '../atoms/BoxContainer';
import Options from '../molecules/Options';


interface DropdownInterface {
    label: string;
    icon: IconsTypes;
    options: any[];
    onSelect: (value: string) => void
}


export const Container = styled.div`
  width: 100%;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.secondary};
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dropdown = ({ label, icon, options, onSelect }: DropdownInterface) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (option: string) => {
        onSelect(option);
        setOpen(false);
    }

    return (
        <BoxContainer onClick={() => setOpen(!open)}>
            <Container>
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
                    size={'24px'}
                    rotate={open}
                />

            </Container >
            {open && <Options options={options} onSelect={handleSelect} />}
        </BoxContainer>
    );
};

export default Dropdown;