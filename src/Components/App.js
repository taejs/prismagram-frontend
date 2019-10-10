import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
import Theme from '../Styles/Theme';
import AppRouter from '../Routes/AppRouter';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

function App() {
  const {data : {
    isLoggedIn
  }} = useQuery(QUERY);
  console.log(isLoggedIn);
  return (
    <ThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn}/>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
