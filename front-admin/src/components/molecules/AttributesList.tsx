import styled, { css } from 'styled-components';
import IconText from '../atoms/IconText';
import {colors} from '../../styles/colors';


interface AttributesListInterface {
    time?: string;
    difficulty?: string;
    location?: string;
    categories?: string;
}

const AttributesListContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  cursor:default;
  row-gap:4px;
`



const AttributesList = ({
    time,
    difficulty,
    location,
    categories,
}: AttributesListInterface) => {
    return (
        <AttributesListContainer>
            <IconText 
                iconColor={colors.primary}
                iconLeft='schedule'
                iconSize='18px'
                fontColor={colors.alternative_white}
                fontSize='16px'
                weight='regular'
            >
                {time}
            </IconText>
            <IconText 
                iconColor={colors.primary}
                iconLeft='school'
                iconSize='18px'
                fontColor={colors.alternative_white}
                fontSize='16px'
                weight='regular'
            >
                {difficulty}
            </IconText>
            <IconText 
                iconColor={colors.primary}
                iconLeft='flag'
                iconSize='18px'
                fontColor={colors.alternative_white}
                fontSize='16px'
                weight='regular'
            >
                {location}
            </IconText>
            <IconText 
                iconColor={colors.primary}
                iconLeft='sports_bar'
                iconSize='18px'
                fontColor={colors.alternative_white}
                fontSize='16px'
                weight='regular'
            >
                {categories}
            </IconText>
        </AttributesListContainer>
    )
}

export default AttributesList;
