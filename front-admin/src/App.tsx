import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Router from './routes';
import LoginContainer from './components/organism/LoginContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <RouterProvider router={Router} />
        <LoginContainer height='45rem' width='40rem' title='Acesse sua conta' fontSizeTitle='24px' subtitle='Para ter acesso a nossa plataforma de controle, entre
                em contato com um dos nossos desenvolvedores.' fontSizeSubtitle='14px'/>
      </ThemeProvider>
    </>
  );
}

export default App;
