import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardGrid = () => {

  const cards = [];

  for (let i = 0; i < 8; i++) {
    cards.push(<Card/>);
  }

  return (
    <CardGridWrapper>
      {cards}
    </CardGridWrapper>
  )
}

const CardGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 85%;
  width: 100%;
`

export default CardGrid;