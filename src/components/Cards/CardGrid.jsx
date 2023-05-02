import React from 'react';
import styled from 'styled-components';

const CardGrid = ({ cards }) => {

  return (
    <CardGridWrapper>
      {cards}
    </CardGridWrapper>
  )
}

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`

export default CardGrid;