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
  border: 1px solid black;
  background-size: cover;
  background-position: center;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

export default Card;
