import styled from "styled-components";
import { IconsTypes } from "./IconTypes";

interface IconStyleInterface {
  size?: string;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
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
`

const Icon = ({
  icon,
  size,
  marginLeft,
  marginRight,
  color
}: IconInterface) => (
  <IconStyle
    data-testid='icon test'
    size={size}
    marginLeft={marginLeft}
    marginRight={marginRight}
    color={color}
  >
    {icon}
  </IconStyle>
)

export default Icon;