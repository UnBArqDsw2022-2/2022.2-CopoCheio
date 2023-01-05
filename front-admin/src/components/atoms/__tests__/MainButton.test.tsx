import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/colors";
import MainButton from "../MainButton";

const customRender = (onClick: VoidFunction, type?: any) => render(
    <ThemeProvider theme={colors}>
        <MainButton onClick={onClick} type={type}>Narutin</MainButton>
    </ThemeProvider>
);

describe("#MainButton", () => {
    const functionMock = jest.fn();
    test("renders buttons with correct text", () => {
        customRender(() => { });
        const textButton = screen.getByTestId("main button");
        expect(textButton).toBeVisible();
    });
    test("on click calls right function", () => {
        customRender(functionMock);
        const textButton = screen.getByText("Narutin");
        userEvent.click(textButton);
        expect(functionMock).toHaveBeenCalled();
    });
    test("button renders right icon when passing correct props", () => {
        render(
            <MainButton onClick={() => { }} iconRight="block">Sasuke</MainButton>
        )

        const mainButtonIcon = screen.getByText('block');
        expect(mainButtonIcon).toBeVisible();
    });

    test("button renders left icon when passing correct props", () => {
        render(
            <MainButton onClick={() => { }} iconLeft="block">Sasuke</MainButton>
        )

        const mainButtonIcon = screen.getByText('block');
        expect(mainButtonIcon).toBeVisible();
    });

    describe('buttons types', () => {
        test('primary button type has to have background #FEA444 and text #fefefe', () => {
            customRender(() => { });
            const mainButton = screen.getByTestId("main button");
            expect(mainButton).toHaveStyle('background-color: #FEA444');
            expect(mainButton).toHaveStyle('color: #fefefe');
        });

        test('confirm button type has to have background #8CE563 and text #4a4a4a', () => {
            customRender(() => { }, 'confirm');
            const mainButton = screen.getByTestId("main button");
            expect(mainButton).toHaveStyle('background-color: #8CE563');
            expect(mainButton).toHaveStyle('color: #4a4a4a');
        });

        test('decline button type has to have background #FF5F5F and text #fefefe', () => {
            customRender(() => { }, 'decline');
            const mainButton = screen.getByTestId("main button");
            expect(mainButton).toHaveStyle('background-color: #FF5F5F');
            expect(mainButton).toHaveStyle('color: #fefefe');
        });

        test('cancel button type has to have background rgba(153, 153, 153, 0.3) and text #4a4a4a', () => {
            customRender(() => { }, 'cancel');
            const mainButton = screen.getByTestId("main button");
            expect(mainButton).toHaveStyle('background-color: rgba(153, 153, 153, 0.3)');
            expect(mainButton).toHaveStyle('color: #4a4a4a');
        });

        test('no-background button type has to have background none and text #4a4a4a', () => {
            customRender(() => { }, 'no-background');
            const mainButton = screen.getByTestId("main button");
            expect(mainButton).toHaveStyle('background-color: transparent');
            expect(mainButton).toHaveStyle('color: #4a4a4a');
        });
    });
});