import styled, { css } from 'styled-components';
import Image from './Image';
import Text from './Text';

interface ImageTextInterface {
    children?: string;
    borderRadius?: string;
    onClick?: VoidFunction;
    imageLeft?: string;
    imageRight?: string;
    imageSize?: string;
    fontSize?: string;
    fontColor?: string;
}

const ImageTextContainer = styled.span`
  display: flex;
  flex-direction:row;
  align-items:center;
`


const ImageText = ({
    children,
    onClick,
    imageLeft,
    imageRight,
    fontSize,
    imageSize,
    fontColor,
}: ImageTextInterface) => {
    return (
        <ImageTextContainer
            onClick={onClick}
        >
            {imageLeft && (
                <Image src={imageLeft} height={imageSize} width={imageSize} borderRadius={imageSize} marginRight='4px'/>
            )}
            <Text fontWeight='400' color={fontColor} size={fontSize}>{children}</Text>
            {imageRight && (
                <Image src={imageRight} height={imageSize} width={imageSize} borderRadius={imageSize} marginLeft='4px' />
            )}

        </ImageTextContainer>
    )
}

export default ImageText;
