import { useState } from "react";
import { useModal } from "../components/molecules/GenericModal";
import DrinksModal from "../components/organisms/DrinksModal";

const DrinkPage = () => {
    const { isShown, toggle } = useModal();
    const [type, setType] = useState<'confirm' | 'create'>('confirm');

    const print = () => {
        console.log('funcona');
    }

    return (
        <div>
            <button onClick={() => {
                setType('confirm');
                toggle();
            }}>Confirm Modal</button>
            <button onClick={() => {
                setType('create');
                toggle();
            }}>Create Modal</button>
            <DrinksModal
                isShown={isShown}
                toggle={toggle}
                type={type}
                title='Caipirinha de Limão'
                userName='Sasuke Uchiha'
                ingredients='1 dose de cachaça, 3 colheres de açucar, 5ml de sangue de virgem, açucar, tempero e tudo que há de bom, essas são as ferramentas necessárias para sei lá mano.'
                guide='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate bibendum nisl ac fringilla. Vestibulum sed hendrerit magna. Nulla vel odio eu ipsum cursus malesuada id ut lorem. Donec viverra, felis eu vulputate tincidunt, urna nunc rutrum mi, vel interdum lectus justo eget ante. Sed quis enim tristique, consectetur sem in, vulputate ipsum. Suspendisse imperdiet libero in quam pellentesque porta. Quisque hendrerit massa in mi eleifend, vehicula laoreet mauris aliquet.'
                time={10}
                base='Vodka, Gin, Tekila'
                dificulty='Fácil'
                country='Rússia'
                leftButtonType='cancel'
                leftButtonText='Cancelar'
                leftButtonClick={toggle}
                rightButtonType='confirm'
                rightButtonText='Confirmar'
                rightButtonClick={print}
                adtionalButtonClick={print}
            />
        </div>
    );
};

export default DrinkPage;