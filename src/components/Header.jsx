import ScoreBoard from './Score/ScoreBoard';
import styled from 'styled-components';

const Header = () => {

  return (
    <HeaderWrapper>
      <Title>Memory Card Game</Title>
      <ScoreBoard/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  width: 100%;
  border: 1px solid black;
  font-size: 40px;
`

const Title = styled.h1`
font-size: 40px;
font-weight: 600;
margin-left: 40px;
`

export default Header;