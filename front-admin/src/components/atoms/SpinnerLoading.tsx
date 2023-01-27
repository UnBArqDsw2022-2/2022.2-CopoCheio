import styled from "styled-components";

interface SpinnerLoadingInterfce { }

const GenericSpinner = styled.span<SpinnerLoadingInterfce>`
    margin: auto;
    border: 5px solid;
    border-radius: 50%;
    border-top: 5px solid ${({ theme }) => theme.primary};
    width: 30px;
    height: 30px;
    animation: spinner 1s linear infinite;
    @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

`

const SpinnerLoading = () => {
    return <GenericSpinner />

}

export default SpinnerLoading;