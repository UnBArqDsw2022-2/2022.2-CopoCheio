import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "../Dropdown";

const customRender = (onClick: VoidFunction) => render(
    <Dropdown icon={'search'} label={"Categorias"} options={[1, 2, 3]} onSelect={onClick} />
);

describe("#Dropdown", () => {
    test("renders custom icon", () => {
        customRender(() => { });
        const customIcon = screen.getByText("search");
        expect(customIcon).toBeVisible();
    });

    test("renders custom icon", () => {
        customRender(() => { });
        const arrowIcon = screen.getByText("expand_more");
        expect(arrowIcon).toBeVisible();
    });

    test("renders dropdown text", () => {
        customRender(() => { });
        const text = screen.getByText("Categorias");
        expect(text).toBeVisible();
    });

    test("on click opens options", () => {
        customRender(() => { });
        const dropdown = screen.getByTestId("dropdown");
        userEvent.click(dropdown);

        const firstOption = screen.getByText("1");
        expect(firstOption).toBeVisible();
        const secondOption = screen.getByText("2");
        expect(secondOption).toBeVisible();
        const thirdOption = screen.getByText("3");
        expect(thirdOption).toBeVisible();
    });
});