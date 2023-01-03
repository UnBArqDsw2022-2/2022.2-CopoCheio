import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainButton from "../MainButton";

describe("#MainButton", () => {
    test("renders buttons with correct text", () => {
        render(
            <MainButton onClick={() => { }}>Batata</MainButton>
        );
        const textButton = screen.getByText("Batata");
        expect(textButton).toBeVisible();
    });
    test("on click calls right function", () => {
        const functionMock = jest.fn();
        render(
            <MainButton onClick={functionMock}>Batata</MainButton>
        );
        const textButton = screen.getByText("Batata");
        userEvent.click(textButton);
        expect(functionMock).toHaveBeenCalled();
    });
    // test("button renders right icon when passing correct props");
});