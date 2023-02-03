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
        time: number,
        dificulty: string,
        base: string[],
        country: string,
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
        onClick: () => console.log('Left Button Click')
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
                rightButtonClick={() => console.log('Left Button Click')}
                aditionalButtonClick={aditionalButtonClick}
            />}
        />
    )
};

export default DrinksModal;