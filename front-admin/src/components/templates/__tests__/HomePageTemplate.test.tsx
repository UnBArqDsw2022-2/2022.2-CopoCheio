import { screen, render } from '@testing-library/react';
import HomePageTemplate from '../HomePageTemplate';

jest.mock('react-router-dom');

describe('#HomePageTemplate', () => {
  test('render component correctly', () => {
    render(<HomePageTemplate />);
    const headerTitle = screen.getByText('Copo Cheio Admin');
    expect(headerTitle).toBeVisible();
    const logout = screen.getByText('Sair');
    expect(logout).toBeVisible();
    const userList = screen.getByText('Lista de usuários');
    expect(userList).toBeVisible();
    const drinkList = screen.getByText('Lista de drinks');
    expect(drinkList).toBeVisible();
  });
});
