import styled from "styled-components";

import MainButton from "../atoms/MainButton";
import { colors } from "../../styles/colors";
import Icon from "../atoms/Icon/Icon";


const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.alternative_white};
  padding: 0 48px;
`

const Header = () => (
  <HeaderContainer>
    <MainButton
      onClick={() => { }}
      fontSize="20px"
      type="no-background"
    >
      Copo Cheio Admin
    </MainButton>
    <MainButton
      rightElement={<Icon marginLeft='8px' color={colors.black} size="18px" icon='logout' />}
      fontSize="16px"
      type="no-background"
      onClick={() => { }}
    >
      Sair
    </MainButton>
  </HeaderContainer>
);

export default Header;
