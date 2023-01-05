import styled, { css } from 'styled-components';
import Text from './Text';
import Icon from './Icon/Icon';
import { IconsTypes } from './Icon/IconTypes';


interface LinkTagInterface {
    text?: string;
    href?: string;    
    colorText?: string;
}

const GenericLinkTag = styled.text<LinkTagInterface>`
    
`

const LinkTag = ({
    text,
    href,    
    colorText,
}: LinkTagInterface) => {
    return (
        <GenericLinkTag
            data-testid='link-tag'
            href={href}
            colorText={colorText} 
        >
            <Text></Text>
            {text}
        </GenericLinkTag>
    )
}

export default LinkTag;
