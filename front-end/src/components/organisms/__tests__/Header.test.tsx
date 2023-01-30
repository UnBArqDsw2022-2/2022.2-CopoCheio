import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";


describe("#Header", () => {
    test("renders logo icon", () => {
        render(
            <Header />
        );
        const logoIcon = screen.getByText("sports_bar");
        expect(logoIcon).toBeVisible();
    });


    test("renders Header text", () => {
        render(
            <Header />
        );
        const text = screen.getByText("CopoCheio");
        expect(text).toBeVisible();
    });

    test("renders options icon", () => {
        render(
            <Header />
        );
        const optionsIcon = screen.getByText("reorder");
        expect(optionsIcon).toBeVisible();
    });

    test("on click opens options", () => {
        render(
            <Header />
        );
        const header = screen.getByText("reorder");
        userEvent.click(header);

        const firstOption = screen.getByText("Minha conta");
        expect(firstOption).toBeVisible();
        const secondOption = screen.getByText("Drinks favoritos");
        expect(secondOption).toBeVisible();
        const thirdOption = screen.getByText("Minhas bebidas");
        expect(thirdOption).toBeVisible();
        const fourthOption = screen.getByText("Sair");
        expect(fourthOption).toBeVisible();
    });
});