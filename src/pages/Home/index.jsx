import Header from '../../components/Header'
import Form from '../../components/Form'
import ResultDashBoard from '../../components/ResultDashBoard'
import { useLoading } from '../../providers/loading'
import OhNoCard from '../../components/OhNoCard'
import { useCalculate } from '../../providers/calculate'
import Chart from '../../components/Chart'
import { Container, MainContainer } from './styles'

const Home = () => {
  const { showResults, showChart } = useLoading()
  const { errorCode } = useCalculate()

  return (
    <MainContainer>
      <Header />
      <Container>
        {errorCode ? (
          <OhNoCard />
        ) : showResults ? (
          <>
            <ResultDashBoard />
            {showChart && <Chart />}
          </>
        ) : (
          <Form />
        )}
      </Container>
    </MainContainer>
  )
}

export default Home
