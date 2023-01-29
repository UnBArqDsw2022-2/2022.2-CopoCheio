import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/colors";
import Button from "../../molecules/Button";

const customRender = (onClick: VoidFunction, variant?: any) => render(
    <ThemeProvider theme={colors}>
        <Button onClick={onClick} variant={variant}>Narutin</Button>
    </ThemeProvider>
);

describe("#Button", () => {
    const functionMock = jest.fn();
    test("renders buttons with correct text", () => {
        customRender(() => { });
        const textButton = screen.getByTestId("main button");
        expect(textButton).toBeVisible();
    });
    test("on click calls right function", () => {
        customRender(functionMock);
        const textButton = screen.getByTestId("main button");
        userEvent.click(textButton);
        expect(functionMock).toHaveBeenCalled();
    });

    describe('buttons variants', () => {
        test('primary button variant has to have background #DAB783 and text #191C24', () => {
            customRender(() => { });
            const Button = screen.getByTestId("main button");
            expect(Button).toHaveStyle('background-color: #DAB783');
            expect(Button).toHaveStyle('color: #191C24');
        });

        test('secondary button variant has to have border #DAB783 and text #DAB783', () => {
            customRender(() => { }, 'secondary');
            const Button = screen.getByTestId("main button");
            expect(Button).toHaveStyle('background-color: transparent');
            expect(Button).toHaveStyle('border: 2px solid #DAB783');
            expect(Button).toHaveStyle('color: #DAB783');
        });
    });
});