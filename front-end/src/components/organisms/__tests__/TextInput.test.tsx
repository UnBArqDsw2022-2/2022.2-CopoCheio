import { render, screen } from "@testing-library/react";
import TextInput from "../TextInput";

describe("#TextInput", () => {
    test("renders correct component and shows correct text", () => {
        render(
            <TextInput placeholder="Nome"/>
        );
        const textInput = screen.getByPlaceholderText("Nome");
        expect(textInput).toBeVisible();
    });
});