import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardGrid = ({ cards, handleCardClick }) => {

  return (
    <CardGridWrapper>
      {cards.map((card) => (
        <Card key={card} num={card} handleCardClick={(() => handleCardClick(card))} />
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