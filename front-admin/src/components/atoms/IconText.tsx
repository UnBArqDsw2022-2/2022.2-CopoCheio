import styled, { css } from 'styled-components';
import Icon from './Icon/Icon';
import { IconsTypes } from './Icon/IconTypes';
import Text from './Text';

interface IconTextInterface {
    children?: string;
    borderRadius?: string;
    onClick?: VoidFunction;
    iconLeft?: IconsTypes;
    iconRight?: IconsTypes;
    iconSize?: string;
    fontSize?: string;
    iconColor?: string;
    fontColor?: string;
    fontWeight?: string;
}

const IconTextContainer = styled.span`
  display: flex;
  flex-direction:row;
  align-items:center;
`



const IconText = ({
    children,
    onClick,
    iconLeft,
    iconRight,
    fontSize,
    iconSize,
    iconColor,
    fontColor,
    fontWeight,
}: IconTextInterface) => {
    return (
        <IconTextContainer
            onClick={onClick}
        >
            {iconLeft && (
                <Icon  size={iconSize} icon={iconLeft} color={iconColor} marginRight="4px"/>
            )}
            <Text fontWeight={fontWeight} color={fontColor} size={fontSize}>{children}</Text>
            {iconRight && (
                <Icon  size={iconSize} icon={iconRight} color={iconColor} marginLeft="4px"/>
            )}

        </IconTextContainer>
    )
}

export default IconText;
