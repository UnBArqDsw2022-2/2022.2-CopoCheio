import styled from "styled-components";
import IconText from "../../../atoms/IconText";
import MainButton, { buttonTypes } from "../../../atoms/MainButton";
import { colors } from "../../../../styles/colors";

interface DrinksModalFooterInterface {
    leftButtonObject?: {
        type: buttonTypes,
        label: string,
        onClick: VoidFunction
    };
    aditionalButtonClick?: VoidFunction;
    rightButtonClick?: VoidFunction;
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
    leftButtonObject,
    rightButtonClick,
    aditionalButtonClick
}: DrinksModalFooterInterface) => (
    <FooterContainer>
        <FooterSmallBox />
        <FooterBigBox>
            <MainButton
                type={leftButtonObject?.type}
                width='45%'
                onClick={leftButtonObject?.onClick}
                children={leftButtonObject?.label}
                height='50%'
                fontSize='14px'
            />
            <MainButton
                type='confirm'
                width='45%'
                onClick={rightButtonClick}
                children='Confirmar'
                height='50%'
                fontSize='14px'
            />
        </FooterBigBox>
        {
            aditionalButtonClick &&
            <FooterSmallBox>
                <IconText iconColor={colors.denied} iconLeft='delete' iconSize='24px' fontColor={colors.grey} fontSize='16px' children={'Deletar'} onClick={aditionalButtonClick} />
            </FooterSmallBox>
        }
    </FooterContainer>
)

export default DrinksModalFooter;