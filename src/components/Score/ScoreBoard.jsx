import styled from 'styled-components';

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <ScoreBoardWrapper>
      <CurrentScore>
        Current Score: <ScoreValue>{currentScore}</ScoreValue>
      </CurrentScore>
      <BestScore>
        Best Score: <ScoreValue>{bestScore}</ScoreValue>
      </BestScore>
    </ScoreBoardWrapper>
  );
};

const ScoreBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  text-align: left;
  gap: 5px;

  @media (max-width: 640px) {
    margin-right: 20px;
  }
`;

const CurrentScore = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  gap: 10px;
  font-size: 20px;
  white-space: nowrap;
`;

const BestScore = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  gap: 10px;
  font-size: 20px;
  white-space: nowrap;
`;

const ScoreValue = styled.div`
  font-size: 30px;
`

export default ScoreBoard;
