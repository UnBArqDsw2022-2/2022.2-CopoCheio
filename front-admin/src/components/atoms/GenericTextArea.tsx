import styled from "styled-components";
import { colors } from "../../styles/colors";

interface GenericTextAreaInterface {
    width?: string;
    height?: string;
    placeHolder?: string;
    value: string;
}

const TextAreaComponent = styled.textarea<Pick<GenericTextAreaInterface, 'width' | 'height'>>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    border-radius: 4px;
    border-color: ${colors.grey};
    text-indent: 3px;
    background-color: ${colors.white};
    margin-top: 1%;
    margin-bottom: 2%;
    resize: none;
`;

const GenericTextArea = ({
    width,
    height,
    placeHolder,
    value
}: GenericTextAreaInterface) => (
    <TextAreaComponent value={value} placeholder={placeHolder} width={width} height={height} />
);

export default GenericTextArea;