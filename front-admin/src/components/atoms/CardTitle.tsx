import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';
import Text from '../atoms/Text';

interface CardTitleInterface {
    children: string;
    onClick?: VoidFunction;
}

const CardTitleContainer = styled.span`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  row-gap:4px;
`


const CardTitle = ({
    children,
    onClick,
}: CardTitleInterface) => {
    return (
        <CardTitleContainer>
            <Text 
                size='16px' 
                fontWeight='600' 
                shadow='0px 4px 4px rgba(0, 0, 0, 0.25)' 
                color={colors.alternative_white}>
                    {children}
                </Text>
            {onClick && (
                <Text 
                    onClick={()=>onClick()}
                    size='10px' 
                    fontWeight='400' 
                    color={colors.success} 
                    style={{
                        textDecoration:'underline',
                        cursor:'pointer'
                    }}>
                        Clique para ver mais
                    </Text>
            )}
        </CardTitleContainer>
    )
}

export default CardTitle;