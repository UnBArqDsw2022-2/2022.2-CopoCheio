import styled, { ThemeProvider } from 'styled-components';
import { colors } from './styles/colors';
import GlobalStyle from './globalStyles';
import TextInput from './components/organisms/TextInput';
import BoxContainer from './components/atoms/BoxContainer';
import Icon from './components/atoms/Icon/Icon';
import Text from './components/atoms/Text';
import Dropdown from './components/organisms/Dropdown';
import DataDisplayTemplate from './components/templates/DataDisplay';
import { RouterProvider } from 'react-router-dom';
import Router from './routes';


function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <DataDisplayTemplate>
          <RouterProvider router={Router} />
        </DataDisplayTemplate>
      </ThemeProvider>
    </>
  );
}

export default App;
