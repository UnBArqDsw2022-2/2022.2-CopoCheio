import { render, screen } from '@testing-library/react';
import App from '../App';

describe('#App', () => {
  test('render App correclty', () => {
    render(<App />);
    const app = screen.getByText('Lista de usuários');
    expect(app).toBeVisible();
  });
});
