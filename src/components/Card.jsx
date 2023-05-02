import styled from 'styled-components';

const Card = () => {

  return (
    <CardWrapper>
      Card
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 325px;
  border: 1px solid black;
`

export default Card;