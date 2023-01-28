import Router from "../routes";
import { RouterProvider } from "react-router-dom";
import { render, screen } from '@testing-library/react';

describe('#Router', () => {
  test('render homePage', () => {
    render(<RouterProvider router={Router} />);
    const pageHome = screen.getByText('Lista de usuários');
    expect(pageHome).toBeVisible();
  });
});
