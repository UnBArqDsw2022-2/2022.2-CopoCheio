import styled from "styled-components";
import IconText from "../atoms/IconText";
import MainButton from "../atoms/MainButton";
import { colors } from "../../styles/colors";

interface DrinksModalFooterInterface {
    type: 'confirm' | 'create';
    leftButtonClick?: VoidFunction;
    rightButtonClick?: VoidFunction;
    adtionalButtonClick?: VoidFunction;
}

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
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

const DrinksModalFooter = ({
    type,
    leftButtonClick,
    rightButtonClick,
    adtionalButtonClick
}: DrinksModalFooterInterface) => {
    switch (type) {
        case 'confirm':
            return (
                <FooterContainer>
                    <FooterSmallBox />
                    <FooterBigBox>
                        <MainButton
                            type='cancel'
                            width='45%'
                            onClick={leftButtonClick}
                            children={'Cancelar'}
                            height='50%'
                            fontSize='14px'
                        />
                        <MainButton
                            type='confirm'
                            width='45%'
                            onClick={rightButtonClick}
                            children={'Confirmar'}
                            height='50%'
                            fontSize='14px'
                        />
                    </FooterBigBox>
                    <FooterSmallBox>
                        <IconText iconColor={colors.denied} iconLeft='delete' iconSize='24px' fontColor={colors.grey} fontSize='16px' children={'Deletar'} onClick={adtionalButtonClick} />
                    </FooterSmallBox>
                </FooterContainer>
            )
        case 'create':
            return (
                <FooterContainer>
                    <FooterSmallBox />
                    <FooterBigBox>
                        <MainButton
                            type='decline'
                            width='45%'
                            onClick={leftButtonClick}
                            children={'Recusar bebida'}
                            height='50%'
                            fontSize='14px'
                        />
                        <MainButton
                            type='confirm'
                            width='45%'
                            onClick={rightButtonClick}
                            children={'Adicionar bebida'}
                            height='50%'
                            fontSize='14px'
                        />
                    </FooterBigBox>
                    <FooterSmallBox />
                </FooterContainer>
            )
    }
}

export default DrinksModalFooter;