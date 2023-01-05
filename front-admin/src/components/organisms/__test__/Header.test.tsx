import Header from "../Header";
import { screen, render } from "@testing-library/react";

describe('#Header', () => {
  test('render header correctly', () => {
    render(
      <Header />
    );
    const header = screen.getByTestId('header test');
    const title = screen.getByText('Copo Cheio Admin');
    expect(header).toBeVisible();
    expect(title).toBeVisible();
  });
})