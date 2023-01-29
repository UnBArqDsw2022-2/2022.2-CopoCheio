import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Button from './components/atoms/Button';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Button onClick={() => { }}>criar conta</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
