import styled from 'styled-components';
import Main from './components/Main';

function App() {
  return (
    <AppWrapper>
      <Main />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
