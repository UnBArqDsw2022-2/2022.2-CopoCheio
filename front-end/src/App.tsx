import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import IconButton from './components/molecules/IconButton';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <IconButton icon={'add'} onClick={()=>{}} />
      </ThemeProvider>
    </>
  );
}

export default App;
