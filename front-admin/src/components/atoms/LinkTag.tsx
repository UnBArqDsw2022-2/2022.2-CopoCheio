import styled from 'styled-components';

interface LinkTagInterface {
    href?: string;
    text?: string;
}

const GenericLinkTag = styled.a<LinkTagInterface>`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    text-decoration: none;
`

const LinkTag = ({
    text,
    href,
}: LinkTagInterface) => {
    return (
        <GenericLinkTag
            data-testid='link-tag'
            text={text}
            href={href}
            target="_blank"
        >
            {text}
        </GenericLinkTag>
    )
}

export default LinkTag;
