import styled from "styled-components";

interface SizedBoxInterface {
    width?: string;
    height?: string;
}

const SizedBoxStyle = styled.div<SizedBoxInterface>`
    width: ${({ width }) => width || '0px'};
    height: ${({ height }) => height || '0px'};

`
const SizedBox = ({
    width,
    height,
}: SizedBoxInterface) => {
    return (<SizedBoxStyle width={width} height={height} />);
}

export default SizedBox;