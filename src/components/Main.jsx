import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import CardGrid from './Cards/CardGrid';

const Main = () => {

  const [cardIDs, setCardIDs] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    generateShuffledCards();
  }, []);
  
  const handleCardClick = (cardID) => {

    if (!clickedCards.includes(cardID)) {
      setClickedCards([...clickedCards, cardID]);
      setCurrentScore(currentScore + 1);
    } else {
      setClickedCards([]);
      setCurrentScore(0);
    }
    generateShuffledCards();
  }

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore])

  const generateShuffledCards = () => {
    const newCardIDs = [];
    for (let i = 0; i < 8; i++) {
      newCardIDs.push(i);
    }
    shuffleArray(newCardIDs);
    setCardIDs(newCardIDs);
  }

  return (
    <MainWrapper>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cardIDs={cardIDs} handleCardClick={handleCardClick} />
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
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export default Main;