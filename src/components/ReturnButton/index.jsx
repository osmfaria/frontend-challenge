import { IconContext } from 'react-icons/lib'
import {Container} from './styles'
import Skeleton from 'react-loading-skeleton'
import { RiArrowGoBackLine } from 'react-icons/ri'

const ReturnButton = ({loading=false, handleClick}) => {
  return (
    <IconContext.Provider value={{ color: '#F2C4CE', size: '1.3rem' }}>
      <Container onClick={handleClick}>
        {loading ? (
          <Skeleton circle height={25} width={25} />
        ) : (
          <RiArrowGoBackLine className='icon-right' />
        )}
      </Container>
    </IconContext.Provider>
  )
}

export default ReturnButton
