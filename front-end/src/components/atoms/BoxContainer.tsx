import styled from 'styled-components';

interface BoxContainerInterface {
    children: React.ReactNode,
    onClick?: VoidFunction
}

const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-grow: 1;
    width: 100%;
    padding: 0.5rem 1rem;
    border: ${({ theme }) => `2px solid ${theme.secondary}`};
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.alternative_primary};
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    position: relative;
`

const BoxContainer = ({ children, onClick }: BoxContainerInterface) => {
    return (
        <Container data-testid='box container' onClick={onClick}>
            {children}
        </Container >
    )
}


export default BoxContainer;
