import styled from 'styled-components';

interface BoxContainerInterface {
    children: React.ReactNode
}

const Container = styled.div`
    flex-grow: 1;
    width: 100%;
    padding: 1rem;
    border: ${({ theme }) => `2px solid ${theme.secondary}`};
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.alternative_primary};
`

const BoxContainer = ({ children }: BoxContainerInterface) => {
    return (
        <Container data-testid='box container'>
            {children}
        </Container >
    )
}


export default BoxContainer;
