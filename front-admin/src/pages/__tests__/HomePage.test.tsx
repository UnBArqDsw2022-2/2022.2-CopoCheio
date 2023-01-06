import { screen, render } from '@testing-library/react';
import HomePage from '../HomePage';

jest.mock('react-router-dom');

describe('#HomePage', () => {
  test('render correctly component', () => {
    render(<HomePage />);
    const headerTitle = screen.getByText('Copo Cheio Admin');
    expect(headerTitle).toBeVisible();
  });
});

