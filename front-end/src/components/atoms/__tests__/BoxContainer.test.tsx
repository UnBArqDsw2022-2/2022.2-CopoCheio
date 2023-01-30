import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/colors";
import Text from "../Text";
import BoxContainer from "../BoxContainer";

describe("#BoxContainer", () => {
    render(
        <ThemeProvider theme={colors}>
            <BoxContainer>
                <Text>Narutin</Text>
            </BoxContainer>
        </ThemeProvider>
    );

    test("has correct styling", () => {
        const boxContainer = screen.getByTestId("box container");
        expect(boxContainer).toBeVisible();
        expect(boxContainer).toHaveStyle('background-color: #272F38');
        expect(boxContainer).toHaveStyle('border: 2px solid #DAB783');
        expect(boxContainer).toHaveStyle('padding: 1rem');
    });
});