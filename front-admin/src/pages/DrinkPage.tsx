import { useModal } from "../components/molecules/GenericModal";
import DrinksModal from "../components/organisms/DrinksModal/DrinksModal";

const DrinkPage = () => {
    const { isShown, toggle } = useModal();
    const drinkMockObject = {
        title: 'Caipirinha de Limão',
        userName: 'Sasuke Uchiha',
        time: 10,
        base: ['Vodka', 'Gin', 'Tequila'],
        dificulty: 'Fácil',
        country: 'Rússia',
        ingredients: '1 dose de cachaça, 3 colheres de açucar, 5ml de sangue de virgem, açucar, tempero e tudo que há de bom, essas são as ferramentas necessárias para sei lá mano.',
        guide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate bibendum nisl ac fringilla. Vestibulum sed hendrerit magna. Nulla vel odio eu ipsum cursus malesuada id ut lorem. Donec viverra, felis eu vulputate tincidunt, urna nunc rutrum mi, vel interdum lectus justo eget ante. Sed quis enim tristique, consectetur sem in, vulputate ipsum. Suspendisse imperdiet libero in quam pellentesque porta. Quisque hendrerit massa in mi eleifend, vehicula laoreet mauris aliquet.'
    }

    return (
        <div>
            <button onClick={() => {
                toggle();
            }}>Confirm Modal</button>
            <button onClick={() => {
                toggle();
            }}>Create Modal</button>
            {/* <DrinksModal
                modalType="genericDrinkModal"
                isShown={isShown}
                toggle={toggle}
                drinkInfoObject={drinkMockObject}
            /> */}
        </div>
    );
};

export default DrinkPage;