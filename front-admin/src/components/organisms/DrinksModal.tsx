import { Dispatch, SetStateAction } from "react";
import { GenericModal } from "../molecules/GenericModal";
import CloseButton from "../atoms/CloseButton";
import DrinksModalBody from "../molecules/DrinksModalBody";
import DrinksModalFooter from "../molecules/DrinksModalFooter";
import { buttonTypes } from "../atoms/MainButton";

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
    setDrinkInfoObject: Dispatch<SetStateAction<{ title: string; userName: string; time: number; base: string[]; dificulty: string; country: string; ingredients: string; guide: string; }>>;
    leftButtonClick: VoidFunction;
    rightButtonClick: VoidFunction;
    aditionalButtonClick?: VoidFunction;
}

const DrinksModal = ({
    modalType,
    setDrinkInfoObject,
    isShown,
    toggle,
    drinkInfoObject,
    leftButtonClick,
    rightButtonClick,
    aditionalButtonClick
}: DrinksModalInterface) => {

    const leftButtonObject = {
        type: modalType === 'genericDrinkModal' ? 'cancel' : 'decline' as buttonTypes,
        label: modalType === 'genericDrinkModal' ? 'Cancelar' : 'Recusar bebida',
        onClick: leftButtonClick
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
                    drinkInfoObject={drinkInfoObject}
                    setDrinkInfoObject={setDrinkInfoObject}
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