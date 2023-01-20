import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface GenericModalInterface {
  isShown: boolean;
  hide: () => void;
  modalBody?: JSX.Element;
  bodyHeight?: string;
  modalFooter?: JSX.Element;
  footerHeight?: string;
  modalHeader?: JSX.Element;
  headerHeight?: string;
  height?: string;
  width?: string;
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

const Container = styled.div<Pick<GenericModalInterface, 'height' | 'width'>>`
  z-index: 100;
  background: ${colors.white};
  position: relative;
  margin: auto;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  border-radius: 8px;
  padding: 2%;
`;

const Header = styled.div<Pick<GenericModalInterface, 'headerHeight'>>`
  border-radius: 8px 8px 0 0;
  display: flex;
  width: 100%;
  height: ${props => props.headerHeight || 'auto'};
  flex-flow: column;
`;

const Body = styled.div<Pick<GenericModalInterface, 'bodyHeight'>>`
  display: flex;
  height: ${props => props.bodyHeight || 'auto'};
  width: 100%;
  padding: 1%;
  overflow: hidden;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Footer = styled.div<Pick<GenericModalInterface, 'footerHeight'>>`
  display: flex;
  width: 100%;
  height: ${props => props.footerHeight || 'auto'};
  align-items: center;
`;

export const GenericModal: FunctionComponent<GenericModalInterface> = ({
  isShown,
  hide,
  modalBody,
  modalFooter,
  modalHeader,
  height,
  width,
  headerHeight,
  bodyHeight,
  footerHeight
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <Wrapper>
        <Container height={height} width={width}>
          <Header headerHeight={headerHeight}>
            {modalHeader}
          </Header>
          <Body bodyHeight={bodyHeight}>
            {modalBody}
          </Body>
          <Footer footerHeight={footerHeight}>
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