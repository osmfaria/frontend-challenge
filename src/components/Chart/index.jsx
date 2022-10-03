import { MainContainer, Container, Title } from './styles'
import { useCalculate } from '../../providers/calculate'
import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useState, useEffect } from 'react'
import { useReference } from '../../providers/reference'

const Chart = () => {
  const [delayedData, setDelayedData] = useState(false)
  const { chartData } = useCalculate()
  const { ref } = useReference()

  useEffect(() => {
     setTimeout(() => {
       setDelayedData(chartData)
     }, 400)
  },)

  return (
    <MainContainer ref={ref}>
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
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
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='R$' fill='#F2C4CE' />
          </BarChart>
          <p>data inicial é utilizada como base</p>
        </Container>
      </motion.div>
    </MainContainer>
  )
}

export default Chart
