import { ReactElement } from "react";
import styled from "styled-components";

const DropDownContainer = styled.section`
  position: absolute;
  margin-top: 4px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 16px;
  height: fit-content;
  max-height: 160px;
  width: fit-content;
  min-width: 130px;
  max-width: 200px;
  background: ${({theme}) => theme.alternative_white};
  border: 1px solid ${({theme}) => theme.grey};
  border-radius: 4px;
  z-index: 2;
`;

interface DropDownInterface {
  element: ReactElement
}

const DropDown = ({element}: DropDownInterface) => {
  return (
    <DropDownContainer>
      {element}
    </DropDownContainer>
  )
}

export default DropDown;
