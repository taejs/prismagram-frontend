import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import { ApolloProvider } from 'react-apollo-hooks';
import {ThemeProvider} from 'styled-components';
import Theme from '../Styles/Theme';
import AppRouter from '../Routes/Router';
import Client from '../Apollo/Client';

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={false}/>
    </>
    </ThemeProvider>
  );
}

export default App;
