import { GenericModal } from "../molecules/GenericModal";
import CloseButton from "../atoms/CloseButton";
import DrinksModalBody from "../molecules/DrinksModalBody";
import DrinksModalFooter from "../molecules/DrinksModalFooter";

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
    leftButtonClick,
    rightButtonClick,
    adtionalButtonClick
}: DrinksModalInterface) => (
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
        modalFooter={<DrinksModalFooter
            type={type}
            leftButtonClick={leftButtonClick}
            rightButtonClick={rightButtonClick}
            adtionalButtonClick={adtionalButtonClick}
        />}
    />
);

export default DrinksModal;