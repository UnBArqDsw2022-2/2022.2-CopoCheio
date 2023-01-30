import { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import Card from './components/organisms/Card';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Card
          name={'Caipirinha'}
          time={'10 min'}
          difficulty={'Fácil'}
          country={'Brasil'}
          alcohol={'Cachaça'}
          picture={'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
