import styled from "styled-components";
import { colors } from "../../styles/colors";

interface CloseButtonInterface {
    onClick: VoidFunction;
}

const CloseButtonbtn = styled.button`
  border: none;
  border-radius: 3px;
  margin-right: 2%;
  background: none;
  color: ${colors.denied};
  font: menu;
  font-weight: bolder;
  font-size: 35px;
  align-self: flex-end;
  :hover {
    cursor: pointer;
    color: #ff9595;
  }
`;

const CloseButton = ({
    onClick
}: CloseButtonInterface) => (
    <CloseButtonbtn onClick={onClick}>x</CloseButtonbtn>
)

export default CloseButton
