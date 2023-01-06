import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { colors } from '../../../styles/colors';
import ColoredBar from '../ColoredBar';

describe('#ColoredBar', () => {
  test('render component correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <ColoredBar data-testid='colored_bar_test' />
      </ThemeProvider>
    );

    const coloredBar = screen.getByTestId('colored_bar_test');
    expect(coloredBar).toBeVisible();
    expect(coloredBar).toHaveStyle('background-color: #FEA444');
  })
});