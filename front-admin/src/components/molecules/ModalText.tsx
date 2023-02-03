import Text from "../atoms/Text";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ModalTextInterface {
    title?: string;
    text?: string;
}

const ModalTextContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 40%;
    flex-direction: column;
    margin-top: 3%;
    row-gap: 0.4em;
`
const ModalText = ({
    title,
    text
}: ModalTextInterface) => (
    <ModalTextContainer>
        <Text
            size='16px'
            weight='bold'
            color={colors.grey}>
            {title}
        </Text>
        <Text
            size='12px'
            weight='regular'
            color={colors.grey}>
            {text}
        </Text>
    </ModalTextContainer>
);

export default ModalText;