import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from "../IconButton";

const customRender = (onClick: VoidFunction) => render(
    <IconButton icon={'search'} onClick={onClick} />
);

describe("#IconButton", () => {
    const functionMock = jest.fn();
    test("renders icon button with correct icon", () => {
        customRender(() => { });
        const textIconButton = screen.getByText("search");
        expect(textIconButton).toBeVisible();
    });
    test("on click calls right function", () => {
        customRender(functionMock);
        const textIconButton = screen.getByTestId("icon button");
        userEvent.click(textIconButton);
        expect(functionMock).toHaveBeenCalled();
    });
});