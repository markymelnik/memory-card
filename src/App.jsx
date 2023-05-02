import Header from './components/Header';
import CardGrid from './components/CardGrid';
import styled from 'styled-components';

function App() {

  return (
    <AppWrapper>
      <Header/>
      <CardGrid/>
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