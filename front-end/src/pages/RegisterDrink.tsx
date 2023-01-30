import { useState } from "react";
import styled from "styled-components";



const RegisterDrink = () => {

    const [drinkName, setDrinkName] = useState<string>('');
    const [dificulty, setDificulty] = useState<'Fácil' | 'Médio' | 'Difícil'>('Fácil');
    const [time, setTime] = useState<number>();
    const [country, setCountry] = useState<string>('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [guide, setguide] = useState<string>('');

    return (
        <></>
    );
}

export default RegisterDrink;