import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { colors } from '../../../styles/colors';
import UndrawImage from '../UndrawImage';
import {ReactComponent as ListUndraw} from '../../../assets/undrawImages/listUndraw.svg';

describe('#UndrawImage', () => {
  test('render component correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <UndrawImage imageElement={<ListUndraw data-testid="svg_test"/>} />
      </ThemeProvider>
    );
    const undrawImage = screen.getByTestId('svg_test');
    expect(undrawImage).toBeVisible();
  })
});