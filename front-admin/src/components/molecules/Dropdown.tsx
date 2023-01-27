import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text'
import styled from 'styled-components';
import { IconsTypes } from '../atoms/Icon/IconTypes';


interface DropdownProps {
  label: string;
  icon: IconsTypes;
  options: any[];
}


export const Container = styled.button`
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
`;


export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Dropdown = ({ label, icon, options }: DropdownProps) => {
  return (
    <Container>
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
      />
    </Container >
  );
};
