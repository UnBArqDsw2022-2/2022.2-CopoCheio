import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MainButton from '../atoms/MainButton';
import Icon from '../atoms/Icon/Icon';
import { colors } from '../../styles/colors';
import Text from '../atoms/Text';
import ModalHeader from '../molecules/ModalHeader';
import ModalText from '../molecules/ModalText';

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
  background: white;
  position: relative;
  margin: auto;
  height: 65vh;
  width: 60vw;
  border-radius: 8px;
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  margin-right: 1.8%;
  height: 10%;
`;

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  color: #FF5F5F;
  font: menu;
  font-weight: bolder;
  font-size: 35px;
  :hover {
    cursor: pointer;
    color: #ff9595;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 10px;
  height: 75%;
  width: 100%;
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

const TextSide = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  padding: 3%;
  overflow: hidden;
  flex-direction: column;
`;

const CardSide = styled.div`
  height: 100%;
  width: 40%;
  padding: 3%;
  overflow: hidden;
  background-color: darkred;
`;

const FooterBigBox = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

const FooterSmallBox = styled.div`
  display: flex;
  height: 100%;
  width: 25%;
  justify-content: center;
  align-items: center;
`;

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent?: JSX.Element;
  headerText?: string;
}

export const DrinkModal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <Wrapper>
        <Container>
          <Header>
            <CloseButton onClick={hide}>x</CloseButton>
          </Header>
          <Content>
            <TextSide>
              <ModalHeader title='Caipirinha de Limão' userName='Sasuke Uchiha'/>
              <ModalText title='Ingredientes' text='1 dose de cachaça, 3 colheres de açucar, 5ml de sangue de virgem, açucar, tempero e tudo que há de bom, essas são as ferramentas necessárias para sei lá mano.' />
              <ModalText title='Modo de preparo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate bibendum nisl ac fringilla. Vestibulum sed hendrerit magna. Nulla vel odio eu ipsum cursus malesuada id ut lorem. Donec viverra, felis eu vulputate tincidunt, urna nunc rutrum mi, vel interdum lectus justo eget ante. Sed quis enim tristique, consectetur sem in, vulputate ipsum. Suspendisse imperdiet libero in quam pellentesque porta. Quisque hendrerit massa in mi eleifend, vehicula laoreet mauris aliquet.' />
            </TextSide>
            <CardSide></CardSide>
          </Content>
          <Footer>
            <FooterSmallBox />
            <FooterBigBox>
              <MainButton
                type='cancel'
                width='45%'
                onClick={() => {
                  console.log('cancel');
                }}
                children='Cancelar'
                height='50%'
                fontSize='22px'
              />
              <MainButton
                type='confirm'
                width='45%'
                onClick={() => {
                  console.log('confirm');
                }}
                children='Confirmar'
                height='50%'
                fontSize='22px'
              />
            </FooterBigBox>
            <FooterSmallBox onClick={() => {
              console.log('deletar');
            }}>
              <Icon size={'32px'} icon={'delete'} color={colors.denied} />
              <Text
                size='16px'
                weight='semibold'
                color={colors.grey}>
                {'deletar'}
              </Text>
            </FooterSmallBox>
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