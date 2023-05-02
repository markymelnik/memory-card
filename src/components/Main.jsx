import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardGrid from './Cards/CardGrid';
import Card from './Cards/Card';

const Main = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    generateShuffledCards();
  }, []);
  
  const generateShuffledCards = () => {
    const newCards = [];
    for (let i = 0; i < 8; i++) {
      newCards.push(<Card key={i} num={i} handleCardClick={handleCardClick} />);
    }
    shuffleArray(newCards);
    setCards(newCards);
  }

  const handleCardClick = () => {
    generateShuffledCards();
  }

  return (
    <MainWrapper>
      <CardGrid cards={cards} />
    </MainWrapper>
  )

}

// Fisher-Yates shuffle algorithm
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 85%;
  width: 100%;
`

export default Main;