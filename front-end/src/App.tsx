import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Card from './components/organisms/Card';
import Header from './components/organisms/Header';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
