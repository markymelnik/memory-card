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
  margin-right: 100px;
`;

const CurrentScore = styled.div`
  font-size: 20px;
`;

const BestScore = styled.div`
  font-size: 20px;
`;

export default ScoreBoard;
