import { render, screen } from "@testing-library/react";
import Options from "../../molecules/Options";

const customRender = (onClick: VoidFunction) => render(
    <Options options={[1, 2, 3]} onSelect={onClick} />
);

describe("#Options", () => {
    test("renders options", () => {
        customRender(() => { });

        const firstOption = screen.getByText("1");
        expect(firstOption).toBeVisible();
        const secondOption = screen.getByText("2");
        expect(secondOption).toBeVisible();
        const thirdOption = screen.getByText("3");
        expect(thirdOption).toBeVisible();
    });
});