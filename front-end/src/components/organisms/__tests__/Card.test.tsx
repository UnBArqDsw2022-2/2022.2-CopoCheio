import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../Card";

describe("#Card", () => {
    test("renders correct card name", () => {
        render(
            <Card
                name={'Caipirinha'}
                time={'10 min'}
                difficulty={'Fácil'}
                country={'Brasil'}
                alcohol={'Cachaça'}
                picture={'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'}
            />
        );

        const name = screen.getByText("Caipirinha");
        expect(name).toBeVisible();
    });

    test("displays card info on hover", () => {
        render(
            <Card
                name={'Caipirinha'}
                time={'10 min'}
                difficulty={'Fácil'}
                country={'Brasil'}
                alcohol={'Cachaça'}
                picture={'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'}
            />
        );

        const innerContainer = screen.getByTestId("inner container");
        userEvent.hover(innerContainer);

        const time = screen.getByText("10 min");
        expect(time).toBeDefined();
        const difficulty = screen.getByText("Fácil");
        expect(difficulty).toBeDefined();
        const country = screen.getByText("Brasil");
        expect(country).toBeDefined();
        const alcohol = screen.getByText("Cachaça");
        expect(alcohol).toBeDefined();
    });
});