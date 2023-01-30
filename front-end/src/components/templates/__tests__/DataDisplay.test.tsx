import { screen, render } from '@testing-library/react';
import DataDisplay from '../DataDisplay';

jest.mock('react-router-dom');

describe('#DataDisplay', () => {
  test('render component correctly', () => {
    render(
      <DataDisplay>
        Hello World
      </DataDisplay>
    );
    const headerTitle = screen.getByText('CopoCheio');
    expect(headerTitle).toBeVisible();
    const input = screen.getByPlaceholderText('Pesquisar...');
    expect(input).toBeVisible();
    const filter = screen.getByText('Filtrar');
    expect(filter).toBeVisible();
    const categories = screen.getByText('Categorias');
    expect(categories).toBeVisible();
    const content = screen.getByText('Hello World');
    expect(content).toBeVisible();
  });
});
