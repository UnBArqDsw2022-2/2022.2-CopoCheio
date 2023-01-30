import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import TextInput from './components/organisms/TextInput';
import BoxContainer from './components/atoms/BoxContainer';
import Dropdown from './components/organisms/Dropdown';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Dropdown label={'Categorias'} icon={'block'} options={[1,2,3]} onSelect={()=>{}} />
      </ThemeProvider>
    </>
  );
}

export default App;
