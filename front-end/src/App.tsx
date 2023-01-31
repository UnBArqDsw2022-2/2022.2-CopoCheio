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
import { Router, NoAuthRouter } from './routes';


function App() {
  return (
    sessionStorage.getItem('userToken') ?
      <>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <DataDisplayTemplate>
          </DataDisplayTemplate>
          <RouterProvider router={Router} />
        </ThemeProvider>
      </> :
      <>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <RouterProvider router={NoAuthRouter} />
        </ThemeProvider>
      </>);
}

export default App;
