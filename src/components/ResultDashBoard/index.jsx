import { MainContainer, Container, Title } from './styles'
import { useCalculate } from '../../providers/calculate'
import chart from '../../assets/bar-chart.svg'
import ResultCard from '../ResultCard'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'
import { useLoading } from '../../providers/loading'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { motion } from 'framer-motion'
import 'react-loading-skeleton/dist/skeleton.css'
import { useReference } from '../../providers/reference'
import { useDidUpdate } from 'rooks'
import ReturnButton from '../ReturnButton'

const ResultDashBoard = () => {
  const { result } = useCalculate()
  const { setShowResults, setShowChart, showResults, loading, countResults } =
    useLoading()
  const { handleClickRef } = useReference()

  const handleClick = () => {
    setShowResults(false)
    setShowChart(false)
  }

  useDidUpdate(() => {
    if (showResults) {
      setTimeout(() => {
        setShowChart(true)
      }, 800)
    }
  }, [loading])

  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <SkeletonTheme
            baseColor='#ADABAB'
            duration={1.5}
            highlightColor='#ebebeb'
          >
            <IconContext.Provider value={{ color: '#F2C4CE', size: '1.3rem' }}>
              <ReturnButton handleClick={handleClick} loading={loading}/>
              {!loading && (
                <div className='icon-box__nextpage' onClick={handleClickRef}>
                  <HiOutlineChevronDoubleDown size={40} />
                </div>
              )}
            </IconContext.Provider>
            <Title>
              {loading ? (
                <Skeleton height={29} width={124} />
              ) : (
                <>
                  <img src={chart} alt='results graphic' className='card-img' />
                  <h3 className='card-title'>Resultados</h3>
                </>
              )}
            </Title>
            {loading ? (
              <Skeleton count={countResults} height={36} />
            ) : (
              Object.keys(result).map((key) => (
                <ResultCard key={key} result={result} itemKey={key} />
              ))
            )}
          </SkeletonTheme>
        </Container>
      </motion.div>
    </MainContainer>
  )
}

export default ResultDashBoard
