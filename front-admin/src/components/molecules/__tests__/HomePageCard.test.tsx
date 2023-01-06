import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePageCard from "../HomePageCard";

const mockFunction = jest.fn();

describe('#HomePageCard', () => {
  test('render component correclty', () => {
    render(<HomePageCard onClick={mockFunction} label="Narutin" />);

    const labelCard = screen.getByText('Narutin');
    expect(labelCard).toBeVisible();
  });

  describe('when clicks on card', () => {
    test('calls mock fuction', () => {
      render(<HomePageCard onClick={mockFunction} label="Narutin" />);

      const labelCard = screen.getByText('Narutin');
      userEvent.click(labelCard);
      expect(mockFunction).toHaveBeenCalled();
    });

    test('upscale image when hover', async () => {
      render(<HomePageCard onClick={mockFunction} label="Narutin" />);

      const svg_container = screen.getAllByTestId('svg_container_test');
      expect(svg_container[0]).toBeVisible();
      userEvent.hover(svg_container[0]);
      expect(svg_container[0]).toHaveStyle("transform:");
      userEvent.unhover(svg_container[0]);
      expect(svg_container[0]).toHaveStyle("transform:");
    });
  });
});
