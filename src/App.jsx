import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';

function App() {

  return (
    <AppWrapper>
      <Header/>
      <Main/>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

export default App;