import { MainContainer, Container } from './styles'
import 'react-loading-skeleton/dist/skeleton.css'
import astronaut from '../../assets/astronaut.svg'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import { useCalculate } from '../../providers/calculate'
import { useLoading } from '../../providers/loading'
import Button from '../Button'
import { motion } from 'framer-motion'

const OhNoCard = () => {
  const { setErrorCode, errorCode } = useCalculate()
  const { setShowResults } = useLoading()

  const handleClick = () => {
    setErrorCode(false)
    setShowResults(false)
  }

  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <h3 className='card-title'>Oh no!!</h3>
          <h1>{errorCode || 400}</h1>
          <img src={astronaut} alt='astronaut' className='astrounaut' />
          <IconContext.Provider value={{ color: '#F2C4CE', size: '1.3rem' }}>
            <div className='icon-box' onClick={handleClick}>
              <RiArrowGoBackLine className='icon-right' />
            </div>
          </IconContext.Provider>
          <Button onClick={handleClick}>Voltar</Button>
        </Container>
      </motion.div>
    </MainContainer>
  )
}

export default OhNoCard
