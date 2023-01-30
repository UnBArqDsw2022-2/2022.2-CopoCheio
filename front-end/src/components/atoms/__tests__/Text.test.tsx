import { render, screen } from "@testing-library/react";
import Text from "../Text";

describe("#Text", () => {
    test("renders correct component and shows correct text", () => {
        render(
            <Text>Narutin</Text>
        );
        const text = screen.getByText("Narutin");
        expect(text).toBeVisible();
    });
});