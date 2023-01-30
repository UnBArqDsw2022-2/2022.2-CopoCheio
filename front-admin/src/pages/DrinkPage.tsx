import { useState, BaseSyntheticEvent } from "react";
import { useModal } from "../components/molecules/GenericModal";
import DrinksModal from "../components/organisms/DrinksModal";

const DrinkPage = () => {
    const { isShown, toggle } = useModal();
    const [ingredients, setIngredients] = useState('1 dose de cachaça, 3 colheres de açucar, 5ml de sangue de virgem, açucar, tempero e tudo que há de bom, essas são as ferramentas necessárias para sei lá mano.');
    const [guide, setGuide] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate bibendum nisl ac fringilla. Vestibulum sed hendrerit magna. Nulla vel odio eu ipsum cursus malesuada id ut lorem. Donec viverra, felis eu vulputate tincidunt, urna nunc rutrum mi, vel interdum lectus justo eget ante. Sed quis enim tristique, consectetur sem in, vulputate ipsum. Suspendisse imperdiet libero in quam pellentesque porta. Quisque hendrerit massa in mi eleifend, vehicula laoreet mauris aliquet.')
    const [title, setTitle] = useState('Caipirinha de limão');

    const print = () => {
        console.log('funcona');
    }

    const drinkInfoObject = {
        title: 'Caipirinha de Limão',
        userName: 'Sasuke Uchiha',
        time: 10,
        base: 'Vodka, Gin, Tequila',
        dificulty: 'Fácil',
        country: 'Rússia',
        ingredientsObject: {
            label: ingredients,
            setIngredients: (e: BaseSyntheticEvent) => setIngredients(e.target.value)
        },
        guideObject: {
            label: guide,
            setGuide: (e: BaseSyntheticEvent) => setGuide(e.target.value)
        },
        titleObject: {
            label: title,
            setTitle: (e: BaseSyntheticEvent) => setTitle(e.target.value)
        }
    }

    return (
        <div>
            <button onClick={() => {
                toggle();
            }}>Confirm Modal</button>
            <button onClick={() => {
                toggle();
            }}>Create Modal</button>
            <DrinksModal
                modalType="recomendationDrinkModal"
                isShown={isShown}
                toggle={toggle}
                drinkInfoObject={drinkInfoObject}
                leftButtonClick={print}
                rightButtonClick={print}
            />
        </div>
    );
};

export default DrinkPage;