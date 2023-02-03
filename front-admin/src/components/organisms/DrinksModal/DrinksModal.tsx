import DrinksService from "../../../services/DrinkService";
import { GenericModal } from "../../molecules/GenericModal";
import CloseButton from "../../atoms/CloseButton";
import DrinksModalBody from "./components/DrinksModalBody";
import DrinksModalFooter from "./components/DrinksModalFooter";
import { buttonTypes } from "../../atoms/MainButton";
import { useState } from "react";

type ModalTypes = 'genericDrinkModal' | 'recomendationDrinkModal';

interface DrinksModalInterface {
    modalType?: ModalTypes
    isShown: boolean;
    toggle: VoidFunction;
    drinkInfoObject: {
        id: string;
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

    const deleteDrink = async () => {
        await DrinksService.deleteDrink(drinkInfoObject.id);
        toggle();
    }

    const leftButtonObject = {
        type: modalType === 'genericDrinkModal' ? 'cancel' : 'decline' as buttonTypes,
        label: modalType === 'genericDrinkModal' ? 'Cancelar' : 'Recusar bebida',
        onClick: modalType === 'genericDrinkModal' ? toggle : deleteDrink
    }

    const rightButtonClick = async () => {
        try {
            if (modalType === 'genericDrinkModal') {
                const body = {
                    name: drinkInfo.title.trim(),
                    picture: drinkInfo.image,
                    time: drinkInfo.time,
                    preparation: drinkInfo.guide.trim(),
                    ingredients: [drinkInfo.ingredients.trim()],
                    difficulty: drinkInfo.dificulty,
                    countries: [drinkInfo.country]
                }
                await DrinksService.updateDrink(drinkInfo.id as string, body);
            } else {
                const body = {
                    name: drinkInfo.title.trim(),
                    picture: drinkInfo.image,
                    time: drinkInfo.time,
                    preparation: drinkInfo.guide.trim(),
                    ingredients: [drinkInfo.ingredients.trim()],
                    difficulty: drinkInfo.dificulty,
                    countries: [drinkInfo.country],
                    isVerfied: true
                }
                await DrinksService.updateDrink(drinkInfo.id as string, body);
            }
            window.location.reload();
        } catch (error) {
            window.alert('Ocorreu um erro na edição do modal');
        }
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