import styled from "styled-components";
import { IconsTypes } from "./IconTypes";

interface IconStyleInterface {
  size?: string;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
  rotate?: boolean;
}

interface IconInterface extends IconStyleInterface {
  icon: IconsTypes
}

const IconStyle = styled.span<IconStyleInterface>`
  font-family: 'Material Icons';
  font-size: ${({ size }) => size || '14px'};
  color: ${({ color }) => color};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  rotate: ${({ rotate }) => rotate ? '180deg' : ''};
`

const Icon = ({
  icon,
  size,
  marginLeft,
  marginRight,
  color,
  rotate
}: IconInterface) => (
  <IconStyle
    data-testid='icon test'
    size={size}
    marginLeft={marginLeft}
    marginRight={marginRight}
    color={color}
    rotate={rotate}
  >
    {icon}
  </IconStyle>
)

export default Icon;