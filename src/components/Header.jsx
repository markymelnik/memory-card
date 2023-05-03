import styled from 'styled-components';
import ScoreBoard from './Score/ScoreBoard';

const Header = ({ currentScore, bestScore }) => {
  return (
    <HeaderWrapper>
      <Title>Memory Card Game</Title>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
  width: 100%;
  border: 1px solid black;
  font-size: 40px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-left: 40px;

  @media (max-width: 640px) {
    margin-left: 20px;
    font-size: 35px;
  }
`;

export default Header;
