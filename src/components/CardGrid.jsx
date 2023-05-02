import styled from 'styled-components';
import Card from './Card';

const CardGrid = () => {

  return (
    <CardGridWrapper>
      <Card/>
    </CardGridWrapper>
  )
}

const CardGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 85%;
  width: 100%;
`

export default CardGrid;