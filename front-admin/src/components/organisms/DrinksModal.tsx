import { GenericModal } from "../molecules/GenericModal";
import CloseButton from "../atoms/CloseButton";
import ModalBody from "../molecules/ModalBody";
import ModalFooter from "../molecules/ModalFooter";

interface DrinksModalInterface {
    isShown: boolean;
    toggle: VoidFunction;
    type: 'confirm' | 'create';
    title?: string;
    userName?: string;
    userImage?: string;
    ingredients?: string;
    guide?: string;
    image?: string;
    time?: number;
    dificulty?: string;
    base?: string;
    country?: string;
    leftButtonType?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    rightButtonType?: 'primary' | 'confirm' | 'decline' | 'cancel' | 'no-background';
    leftButtonClick?: VoidFunction;
    rightButtonClick?: VoidFunction;
    leftButtonText?: string;
    rightButtonText?: string;
    adtionalButtonClick?: VoidFunction;
}

const DrinksModal = ({
    isShown,
    toggle,
    type,
    title,
    userName,
    userImage,
    ingredients,
    guide,
    image,
    time,
    dificulty,
    base,
    country,
    leftButtonType,
    leftButtonText,
    leftButtonClick,
    rightButtonType,
    rightButtonText,
    rightButtonClick,
    adtionalButtonClick
}: DrinksModalInterface) => (
    <GenericModal
        isShown={isShown}
        hide={toggle}
        modalHeader={<CloseButton onClick={toggle} />}
        modalBody={<ModalBody
            type={type}
            title={title}
            userImage={userImage}
            userName={userName}
            ingredients={ingredients}
            guide={guide}
            image={image}
            time={time}
            base={base}
            dificulty={dificulty}
            country={country} />
        }
        modalFooter={<ModalFooter
            type={type}
            leftButtonType={leftButtonType}
            leftButtonText={leftButtonText}
            leftButtonClick={leftButtonClick}
            rightButtonType={rightButtonType}
            rightButtonText={rightButtonText}
            rightButtonClick={rightButtonClick}
            adtionalButtonClick={adtionalButtonClick}
        />}
    />
);

export default DrinksModal;