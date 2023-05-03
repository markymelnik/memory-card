import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardGrid = ({ cardIDs, handleCardClick }) => {

  return (
    <CardGridWrapper>
      {cardIDs.map((cardID) => (
        <Card key={cardID} cardNum={cardID} handleCardClick={(() => handleCardClick(cardID))} />
      ))}
    </CardGridWrapper>
  )
}

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`

export default CardGrid;