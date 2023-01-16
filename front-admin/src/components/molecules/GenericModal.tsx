import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface GenericModalInterface {
  isShown: boolean;
  hide: () => void;
  modalBody?: JSX.Element;
  modalFooter?: JSX.Element;
  modalHeader?: JSX.Element;
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

const Container = styled.div`
  z-index: 100;
  background: ${colors.white};
  position: relative;
  margin: auto;
  height: 65vh;
  width: 56.2vw;
  border-radius: 8px;
  padding: 2%;
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  width: 100%;
  height: 5%;
  flex-flow: column;
`;

const Body = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  padding: 1%;
  overflow: hidden;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
`;

export const GenericModal: FunctionComponent<GenericModalInterface> = ({
  isShown,
  hide,
  modalBody,
  modalFooter,
  modalHeader,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <Wrapper>
        <Container>
          <Header>
            {modalHeader}
          </Header>
          <Body>
            {modalBody}
          </Body>
          <Footer>
            {modalFooter}
          </Footer>
        </Container>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};