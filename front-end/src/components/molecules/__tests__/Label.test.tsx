import { render, screen } from "@testing-library/react";
import Label from "../Label";


describe("#Label", () => {
    render(
        <Label text={'Fácil'} icon={'school'} />
    );
    
    test("renders correct text and icon", () => {
        const text = screen.getByText("Fácil");
        expect(text).toBeVisible();
        const icon = screen.getByText("school");
        expect(icon).toBeVisible();
    });
});