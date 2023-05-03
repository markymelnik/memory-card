import styled from 'styled-components';

const Card = ({ image, handleCardClick }) => {
  return (
  <CardWrapper 
    onClick={handleCardClick} 
    style={{ backgroundImage: `url(${image})`}}>
  </CardWrapper>
  )
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 325px;
  border: 2px solid black;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 80%;
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Card;