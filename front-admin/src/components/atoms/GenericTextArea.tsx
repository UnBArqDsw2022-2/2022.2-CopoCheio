import styled from "styled-components";
import { colors } from "../../styles/colors";

interface GenericTextAreaInterface {
    type: 'input' | 'text-area';
    width?: string;
    height?: string;
    placeHolder?: string;
    value?: string;
    fontSize: string | undefined;
    weight?: 'regular' | 'bold' | 'semi-bold';
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const TextAreaComponent = styled.textarea<Pick<GenericTextAreaInterface, 'width' | 'height' | 'fontSize'>>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    border-radius: 4px;
    border-color: ${colors.grey};
    text-indent: 3px;
    background-color: ${colors.white};
    margin-top: 1%;
    margin-bottom: 2%;
    resize: none;
    font-size: ${props => props.fontSize};
    color: ${colors.grey};
    border-width: 1px;
    padding: 0.5em;
`;

const InputComponent = styled.input<Pick<GenericTextAreaInterface, 'width' | 'height' | 'fontSize' | 'weight'>>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    border-radius: 4px;
    font-weight: ${props => props.weight || 'regular'};
    font-size:  ${prpos => prpos.fontSize};
    color: ${colors.grey};
    margin-bottom: 2%;
    border-color: ${colors.grey};
    background-color: ${colors.white};
    border-width: 1px;
    padding: 0.5em;
`;

const GenericTextArea = ({
    type,
    width,
    height,
    placeHolder,
    value,
    fontSize,
    weight,
    onChange
}: GenericTextAreaInterface) => {
    return (
        <>
            {
                type === 'text-area' &&
                <TextAreaComponent value={value} onChange={onChange} placeholder={placeHolder} width={width} height={height} fontSize={fontSize} />
            }
            {
                type === 'input' &&
                <InputComponent value={value} onChange={onChange} placeholder={placeHolder} width={width} height={height} weight={weight} fontSize={fontSize} />
            }
        </>
    )
};

export default GenericTextArea;