import { screen, render } from '@testing-library/react';
import DataDisplayTemplate from '../DataDisplayTemplate';

jest.mock('react-router-dom');

describe('#DataDisplayTemplate', () => {
  test('render component correctly', () => {
    render(<DataDisplayTemplate type='drink'/>);

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
