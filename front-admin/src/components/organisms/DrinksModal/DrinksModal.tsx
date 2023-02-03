import DrinksService from "../../../services/DrinkService";
import { GenericModal } from "../../molecules/GenericModal";
import CloseButton from "../../atoms/CloseButton";
import DrinksModalBody from "./components/DrinksModalBody";
import DrinksModalFooter from "./components/DrinksModalFooter";
import { buttonTypes } from "../../atoms/MainButton";
import { useState } from "react";

type ModalTypes = 'genericDrinkModal' | 'recomendationDrinkModal';

interface DrinksModalInterface {
    modalType: ModalTypes
    isShown: boolean;
    toggle: VoidFunction;
    drinkInfoObject: {
        title: string;
        userName: string,
        userImage?: string,
        image?: string,
        time?: number,
        dificulty?: string | null,
        base: string[],
        country?: string,
        guide: string
        ingredients: string;
    };
    aditionalButtonClick?: VoidFunction;
}

const DrinksModal = ({
    modalType,
    isShown,
    toggle,
    drinkInfoObject,
    aditionalButtonClick
}: DrinksModalInterface) => {
    const [drinkInfo, setDrinkInfo] = useState(drinkInfoObject);
    const leftButtonObject = {
        type: modalType === 'genericDrinkModal' ? 'cancel' : 'decline' as buttonTypes,
        label: modalType === 'genericDrinkModal' ? 'Cancelar' : 'Recusar bebida',
        onClick: modalType === 'genericDrinkModal' ? toggle : () => console.log()
    }
    const rightButtonClick = () => {
        try {
            if(modalType === 'genericDrinkModal') {
                const body = {
                    name: drinkInfoObject.title,
                    picture: drinkInfoObject.image,
                    time: drinkInfoObject.time,
                    preparation: drinkInfoObject.guide,
                    ingredients: ['Naruto'],
                    difficulty: 'HARD',
                    countries: ['USA']
                }
                DrinksService.updateDrink('01ac7cb3-37ec-4ddc-acb1-f9202331391c' as string, body);
            }
        } catch (error) {
            console.log('DEU RUIM');
            console.log(error);
        }
        console.log('Chamou')
    }
    return (
        <GenericModal
            isShown={isShown}
            hide={toggle}
            width='56.2vw'
            height='65vh'
            headerHeight='5%'
            bodyHeight='80%'
            footerHeight='15%'
            modalHeader={<CloseButton onClick={toggle} />}
            modalBody={
                <DrinksModalBody
                    drinkInfoObject={drinkInfo}
                    setDrinkInfoObject={setDrinkInfo}
                />
            }
            modalFooter={<DrinksModalFooter
                leftButtonObject={leftButtonObject}
                rightButtonClick={rightButtonClick}
                aditionalButtonClick={aditionalButtonClick}
            />}
        />
    )
};

export default DrinksModal;