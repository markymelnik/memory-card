import styled from 'styled-components';
import Card from './Card';

const CardGrid = ({ cardIDs, handleCardClick }) => {
  return (
    <MainBodyWrapper>
      <CardGridWrapper>
        {cardIDs.map((cardID) => (
          <Card
            key={cardID}
            cardNum={cardID}
            handleCardClick={() => handleCardClick(cardID)}
          />
        ))}
      </CardGridWrapper>
    </MainBodyWrapper>
  );
};

const MainBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 72%;
  gap: 40px;
  margin: 40px 0;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr
  }
`;

export default CardGrid;