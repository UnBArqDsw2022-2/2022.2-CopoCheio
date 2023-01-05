import { useState } from "react";
import GenericContainer from "../atoms/GenericContainer";
import UndrawImage from "./UndrawImage";
import ColoredBar from "../atoms/ColoredBar";
import { colors } from "../../styles/colors";
import { ReactComponent as ListUndraw } from '../../assets/undrawImages/listUndraw.svg';

import Text from "../atoms/Text";

interface HomePageCardInterface {
  label: string;
  onClick: VoidFunction;
}

const hover = `
  flex-direction: row;
  justify-content: space-between;
  :hover {
    cursor: pointer;
    div#svg_container {
      transform: scale(1.05) rotate(-10deg);
    }
    div#bar_element {
      width: 90%
    }
    svg#svg_element {
      color: ${colors.primary}
    }
  }
`;

const HomePageCard = ({label, onClick}: HomePageCardInterface) => {
  const [onHover, setOnHover] = useState(colors.grey);
  const renderImageElement = <ListUndraw fill={onHover} width="100%" height="100%"/>;
  return (
    <GenericContainer
      otherProps={hover}
      onMouseEnter={() => setOnHover(colors.primary)}
      onMouseLeave={() => setOnHover(colors.grey)}
      width="500px"
      height="200px"
      onClick={onClick}
    >
      <UndrawImage imageElement={renderImageElement} />
      <GenericContainer border_radius="0 8px 8px 0" style={{ alignItems: 'flex-start', padding: '0 16px', gap: '2px' }} width="61%" height="100%">
        <ColoredBar id="bar_element" />
        <Text size="18px" color={colors.black}>{label}</Text>
      </GenericContainer>
    </GenericContainer>
  )
}

export default HomePageCard;
