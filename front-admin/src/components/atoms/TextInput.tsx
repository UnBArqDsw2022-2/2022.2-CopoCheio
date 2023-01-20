import GenericTextArea from "./GenericTextArea";
import Text from "./Text";
import { colors } from "../../styles/colors";
import styled from "styled-components";

interface TextInputInterface {
    title: string;
    size: string;
    width?: string;
    height?: string;
    placeHolder?: string;
    value?: string;
    onChange?: VoidFunction;
    textSize: string;
}

const TextInputContainer = styled.div<Pick<TextInputInterface, 'width' | 'height'>>`
    display: flex;
    flex-flow: column;
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
`;

const TextInput = ({
    title,
    size,
    width,
    height,
    placeHolder,
    value,
    onChange,
    textSize
}: TextInputInterface) => (
    <TextInputContainer width={width} height={height}>
        <Text
            size={size}
            weight={'bold'}
            color={colors.grey}>
            {title}
        </Text>
        <GenericTextArea type='text-area' value={value} onChange={onChange} placeHolder={placeHolder} fontSize={textSize} />
    </TextInputContainer>
);

export default TextInput;