import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Text from './components/atoms/Text';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Text color='gold'>criar conta</Text>
      </ThemeProvider>
    </>
  );
}

export default App;
