import { ResultItem, Container } from './styles'
import { FcCalendar } from 'react-icons/fc'


const ResultCard = ({ result, itemKey }) => {

  return (
      <Container >
        <ResultItem>
          <div className='item-key'>
            <FcCalendar />
            {itemKey === '1' ? <h2>Amanhã</h2> : <h2>Em {itemKey} dias</h2>}
          </div>
          <p>{result[itemKey]}</p>
        </ResultItem>
        <div className='divider'></div>
      </Container>
  )
}

export default ResultCard
