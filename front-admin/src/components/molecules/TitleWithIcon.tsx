import styled from "styled-components";
import Text from "../atoms/Text";
import { colors } from "../../styles/colors";
import Image from "../atoms/Image";
import Icon from "../atoms/Icon/Icon";

interface TitleWithIconInterface {
    title?: string;
    image?: string;
    label?: string;
}

const TitleWithIconContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    align-items: center;
`
const TitleWithIcon = ({
    title,
    image,
    label
}: TitleWithIconInterface) => (
    <TitleWithIconContainer>
        <Text
            size='24px'
            weight='semibold'
            color={colors.black}>
            {title}
        </Text>
        {image ? <Image src={image} height={'20px'} width={'20px'} borderRadius={'20px'} marginLeft='4px' marginRight='4px' /> : <Icon marginLeft='4px' marginRight='4px' size={'20px'} icon={'account_circle'} color={colors.grey} />}
        <Text
            size='10px'
            weight='regular'
            color={colors.grey}>
            {label}
        </Text>
    </TitleWithIconContainer>
);

export default TitleWithIcon;
