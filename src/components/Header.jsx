import styled from 'styled-components';

const Header = () => {

  return (
    <HeaderWrapper>
      Memory Game
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  height: 15%;
  width: 100%;
  border: 1px solid black;

`

export default Header;