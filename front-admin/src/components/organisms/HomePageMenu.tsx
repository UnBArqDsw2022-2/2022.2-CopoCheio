import { useNavigate } from "react-router-dom";
import GenericContainer from "../atoms/GenericContainer";
import HomePageCard from "../molecules/HomePageCard";

const display = `
    display: grid;
    grid-row-gap: 56px;
    grid-column-gap: 72px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const HomePageMenu = () => {
    const navigate = useNavigate();
    return (
        <GenericContainer
            otherProps={display}
        >
            <HomePageCard
                label="Lista de usuários"
                onClick={() => navigate('/userlist')}
            />
            <HomePageCard
                label="Lista de drinks"
                onClick={() => navigate('/drinklist')}
            />
            <HomePageCard
                label="Indicar drinks"
                onClick={() => navigate('/sharedrink')}
            />
            <HomePageCard
                label="Bebidas recomendadas"
                onClick={() => navigate('/recommendeddrinks')}
            />
        </GenericContainer>
    )
};

export default HomePageMenu;