import { MainContainer, Container, Title } from './styles'
import { useCalculate } from '../../providers/calculate'
import { motion } from 'framer-motion'
import { useDidMount } from 'rooks'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useState } from 'react'
import { useReference } from '../../providers/reference'

const Chart = () => {
  const [delayedData, setDelayedData] = useState(false)
  const [maxData, setMaxData] = useState(false)
  const { chartData } = useCalculate()
  const { ref } = useReference()

  function getDataMax() {
    setMaxData(Number(chartData[chartData.length - 1].R$))
  }

  useDidMount(() => {
    getDataMax()
    setTimeout(() => {
      setDelayedData(chartData)
    }, 400)
    console.log('montou')
  })

  return (
    <MainContainer ref={ref}>
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {!!maxData && (
          <Container>
            <Title>Diferença liquida (R$) entre datas</Title>
            <BarChart
              width={300}
              height={300}
              data={delayedData}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis type='number' domain={[0, maxData]} />
              <Tooltip
                itemStyle={{ color: '#2C2B30' }}
              />
              <Legend />
              <Bar dataKey='R$' fill='#F2C4CE' />
            </BarChart>
            <p>data inicial é utilizada como base</p>
          </Container>
        )}
      </motion.div>
    </MainContainer>
  )
}

export default Chart
