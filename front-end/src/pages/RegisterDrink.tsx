import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #191C24;
    justify-content: center;
    align-items: center;
`;

const FormContainer =styled.div`
    display: flex;
    width: 33.3%;
    min-width: 400px;
    height: 90%;
    flex-flow: column;
    align-items: center;
    background-color: white;
`

const RegisterDrink = () => {

    const [drinkName, setDrinkName] = useState<string>('');
    const [dificulty, setDificulty] = useState<'Fácil' | 'Médio' | 'Difícil'>('Fácil');
    const [time, setTime] = useState<number>();
    const [country, setCountry] = useState<string>('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [guide, setguide] = useState<string>('');

    return (
        <Container>
            <FormContainer>

            </FormContainer>
        </Container>
    );
}

export default RegisterDrink;