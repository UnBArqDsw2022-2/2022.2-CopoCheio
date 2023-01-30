import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Card from './components/organisms/Card';
import Router from './routes';
import { RouterProvider } from 'react-router-dom';


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
