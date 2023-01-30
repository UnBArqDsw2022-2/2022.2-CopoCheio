import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text'
import styled from 'styled-components';
import { IconsTypes } from '../atoms/Icon/IconTypes';


interface LabelInterface {
    text: string;
    icon: IconsTypes;
}


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  position: relative;
  color: ${({ theme }) => theme.secondary};
`;

const Label = ({ text, icon }: LabelInterface) => {

    return (
        <Container>
            <Icon
                icon={icon}
                size={'24px'}
            />

            <Text
                size='18px'
                weight='medium'
                color='gold'
            >
                {text}
            </Text>

        </Container >
    );
};

export default Label;