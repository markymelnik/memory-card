import styled from 'styled-components';
import ScoreBoard from './Score/ScoreBoard';

const Header = ({ currentScore, bestScore }) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>Memory Card Game</Title>
        <SubTitle>Don't click the same cat twice!</SubTitle>
      </TitleWrapper>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
  width: 100%;
  border-bottom: 2px solid black;
  background-color: lavender;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  @media (max-width: 720px) {
    margin-left: 10px;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
  

  @media (max-width: 720px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;

  @media (max-width: 720px) {
    font-size: 15px;
  }
`

export default Header;
