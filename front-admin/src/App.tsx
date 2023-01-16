import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Router from './routes';



function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  );
}

export default App;
