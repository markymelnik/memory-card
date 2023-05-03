import React from 'react';

import Main from './components/Main';
import styled from 'styled-components';

function App() {

  return (
    <AppWrapper>
      <Main />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export default App;