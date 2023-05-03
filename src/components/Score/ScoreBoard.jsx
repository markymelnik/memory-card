import styled from 'styled-components';

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <ScoreBoardWrapper>
      <CurrentScore>Current Score: {currentScore}</CurrentScore>
      <BestScore>Best Score: {bestScore}</BestScore>
    </ScoreBoardWrapper>
  );
};

const ScoreBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 80px;

  @media (max-width: 640px) {
    margin-right: 20px;
  }
`;

const CurrentScore = styled.div`
  font-size: 20px;
  white-space: nowrap;
`;

const BestScore = styled.div`
  font-size: 20px;
  white-space: nowrap;
`;

export default ScoreBoard;
