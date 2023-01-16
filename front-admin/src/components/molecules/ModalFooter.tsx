import styled from "styled-components";
import IconText from "../atoms/IconText";
import MainButton from "../atoms/MainButton";
import { colors } from "../../styles/colors";

interface ModalFooterInterface {
    type: 'confirm' | 'create';
    leftButtonType?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    rightButtonType?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    leftButtonClick?: VoidFunction;
    rightButtonClick?: VoidFunction;
    leftButtonText?: string;
    rightButtonText?: string;
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

const ModalFooter = ({
    type,
    leftButtonType,
    leftButtonText,
    leftButtonClick,
    rightButtonType,
    rightButtonText,
    rightButtonClick,
    adtionalButtonClick
}: ModalFooterInterface) => {
    switch (type) {
        case 'confirm':
            return (
                <FooterContainer>
                    <FooterSmallBox />
                    <FooterBigBox>
                        <MainButton
                            type={leftButtonType}
                            width='45%'
                            onClick={leftButtonClick}
                            children={leftButtonText}
                            height='50%'
                            fontSize='14px'
                        />
                        <MainButton
                            type={rightButtonType}
                            width='45%'
                            onClick={rightButtonClick}
                            children={rightButtonText}
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
                <></>
            )
    }
}

export default ModalFooter;