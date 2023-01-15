import { DrinkModal, useModal } from "../components/organisms/DrinkModal";

const DrinkPage = () => {
    const { isShown, toggle } = useModal();

    return (
        <div>
            <button onClick={toggle}>Open modal</button>
            <DrinkModal isShown={isShown} hide={toggle} />
        </div>
    );
};

export default DrinkPage;