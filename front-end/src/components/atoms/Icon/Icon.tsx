import styled from "styled-components";
import { IconsTypes } from "./IconTypes";

interface IconStyleInterface {
  size?: string;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
  rotate?: boolean;
  filled?: boolean
}

interface IconInterface extends IconStyleInterface {
  icon: IconsTypes
}

const IconStyle = styled.span<IconStyleInterface>`
  font-family: ${({ filled }) => filled ? 'Material Icons' : 'Material Icons Outlined'};
  font-size: ${({ size }) => size || '14px'};
  font-weight: 300;
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
  rotate,
  filled
}: IconInterface) => (
  <IconStyle
    data-testid='icon test'
    size={size}
    marginLeft={marginLeft}
    marginRight={marginRight}
    color={color}
    rotate={rotate}
    filled={filled}
  >
    {icon}
  </IconStyle>
)

export default Icon;