import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import TextInput from './components/organisms/TextInput';
import BoxContainer from './components/atoms/BoxContainer';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <TextInput placeholder='Nome' />
      </ThemeProvider>
    </>
  );
}

export default App;
