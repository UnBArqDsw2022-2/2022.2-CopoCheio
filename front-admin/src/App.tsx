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
        <LoginContainer height='45rem' width='40rem' title='Acesse sua conta' />
      </ThemeProvider>
    </>
  );
}

// class Welcome1 extends React.Component {
//   props: any;

//   render() {
//     return <ul>
//       <h1>Hello, {this.props.children}</h1>
//       <h1>Hello, {this.props.name}</h1>
//     </ul>
//   }
// }

// function Welcome2(props: any) {
//   return <ul>
//     <h1>Hello, {props.children}</h1>
//     <h1>Hello, {props.name}</h1>
//   </ul>;
// }

export default App;
