import styled, { css } from 'styled-components';
import Text from './Text';
import Icon from './Icon/Icon';
import { IconsTypes } from './Icon/IconTypes';


interface LinkTagInterface {
    href?: string;
    text?: string;
    colorText?: string;
}

const GenericLinkTag = styled.a<LinkTagInterface>`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    text-decoration: none;
`

const LinkTag = ({
    text,
    href,
    colorText,
}: LinkTagInterface) => {
    return (
        <GenericLinkTag
            data-testid='link-tag'
            text={text}
            href={href}
            target="_blank"
            color={colorText}
        >
            {text}
        </GenericLinkTag>
    )
}

export default LinkTag;
