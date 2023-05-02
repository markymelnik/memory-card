import React from 'react';
import styled from 'styled-components';

const Card = ({ num, handleCardClick }) => {

  return (
    <CardWrapper onClick={handleCardClick}>
      Card {num}
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 325px;
  margin: 20px;
  border: 1px solid black;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`

export default Card;