import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import DataDisplayTemplate from './components/templates/DataDisplay';
import { RouterProvider } from 'react-router-dom';
import { Router, NoAuthRouter } from './routes';


function App() {
  return (
    sessionStorage.getItem('userToken') ?
      <>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <DataDisplayTemplate>
            <RouterProvider router={Router} />
          </DataDisplayTemplate>

        </ThemeProvider>
      </> :
      <>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <RouterProvider router={NoAuthRouter} />
        </ThemeProvider>
      </>);
}

export default App;
