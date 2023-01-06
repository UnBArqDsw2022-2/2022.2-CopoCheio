import { render, screen } from '@testing-library/react';
import Icon from '../Icon/Icon';

describe('#Icon', () => {
  test('render right icon', () => {
    render(<Icon icon={'block'}/>);
    const icon = screen.getByTestId('icon test');
    expect(icon).toBeVisible();
  });
});
 