import { screen, render } from '@testing-library/react';
import DrinksPage from '../DrinksPage';

jest.mock('react-router-dom');

describe('#DrinksPage', () => {
  test('render component correctly', () => {
    render(<DrinksPage />);

    const headerTitle = screen.getByText('Copo Cheio Admin');
    expect(headerTitle).toBeVisible();
    const logout = screen.getByText('Sair');
    expect(logout).toBeVisible();
    const categoryDropdown = screen.getByText('Categorias');
    expect(categoryDropdown).toBeVisible();
    const filterDropdown = screen.getByText('Filtrar');
    expect(filterDropdown).toBeVisible();
  });
});
