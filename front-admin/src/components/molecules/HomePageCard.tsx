import { useState } from "react";
import GenericContainer from "../atoms/GenericContainer";
import UndrawImage from "./UndrawImage";
import ColoredBar from "../atoms/ColoredBar";
import { colors } from "../../styles/colors";
import { ReactComponent as ListUndraw } from '../../assets/undrawImages/listUndraw.svg';
import { ReactComponent as AddFileUndraw } from '../../assets/undrawImages/addFileUndraw.svg'
import { ReactComponent as BeerUndraw } from '../../assets/undrawImages/beerUndraw.svg'
import { ReactComponent as AppreciateUndraw } from '../../assets/undrawImages/appreciateUndraw.svg'

import Text from "../atoms/Text";

interface HomePageCardInterface {
  label: string;
  onClick: VoidFunction;
}

const hover = `
  flex-direction: row;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
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

  @media (max-width: 1200px) {
    width: 400px;
    height: 160px;

    div#svg_container {
      transform: scale(0.8);
    }

    :hover {
      div#svg_container {
        transform: scale(0.9) rotate(-10deg);
      }
    }
  }

  @media (max-width: 800px) {
    width: 260px;
    height: 120px;

    div#svg_container {
      transform: scale(0.6);
    }
    span#home_page_text {
      font-size: 14px
    }
    :hover {
      div#svg_container {
        transform: scale(0.68) rotate(-10deg);
      }
    }
  }
`;

const HomePageCard = ({ label, onClick }: HomePageCardInterface) => {
  const [onHover, setOnHover] = useState(colors.grey);

  const renderImageElement = () => {
    switch (label) {
      case 'Lista de usuários':
        return <ListUndraw fill={onHover} width="100%" height="100%" />
      case 'Lista de drinks':
        return <BeerUndraw fill={onHover} width="100%" height="100%" />
      case 'Indicar drinks':
        return <AppreciateUndraw fill={onHover} width="100%" height="100%" />
      case 'Bebidas recomendadas':
        return <AddFileUndraw fill={onHover} width="100%" height="100%" />
    }
  };

  const svgElement = renderImageElement();
  return (
    <GenericContainer
      otherProps={hover}
      onMouseEnter={() => setOnHover(colors.primary)}
      onMouseLeave={() => setOnHover(colors.grey)}
      width="500px"
      height="200px"
      onClick={onClick}
    >
      <UndrawImage imageElement={svgElement} />
      <GenericContainer border_radius="0 8px 8px 0" style={{ alignItems: 'flex-start', padding: '0 16px', gap: '2px' }} width="61%" height="100%">
        <ColoredBar id="bar_element" />
        <Text id="home_page_text" size="18px" color={colors.black}>{label}</Text>
      </GenericContainer>
    </GenericContainer>
  )
}

export default HomePageCard;
