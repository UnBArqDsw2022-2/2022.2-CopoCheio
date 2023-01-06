import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { colors } from '../../../styles/colors';
import GenericContainer from '../GenericContainer';

describe('#ColoredBar', () => {
  test('render component correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <GenericContainer data-testid='generic_container_test' />
      </ThemeProvider>
    );

    const genericContainer = screen.getByTestId('generic_container_test');
    expect(genericContainer).toBeVisible();
    expect(genericContainer).toHaveStyle('background-color: #fefefe');
  })
});