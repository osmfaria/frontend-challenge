import { createContext, useContext, useState } from 'react'
import { simuleApi } from '../../services/api'
import { useLoading } from '../loading'
import { treatResults, getChartData } from '../../utils'

const CalculateContext = createContext()

export const CalculateProvider = ({ children }) => {
  const [result, setResults] = useState(null)
  const [chartData, setChartData] = useState([])
  const [errorCode, setErrorCode] = useState(null)
  const { setLoading } = useLoading()

  const getResults = (data) => {
    simuleApi
      .post('', data)
      .then((response) => {
        setResults(treatResults(response.data))
        setChartData(getChartData(response.data))
        setLoading(false)
      })
      .catch((err) => {
        setErrorCode(err.response.status)
      })
  }

  return (
    <CalculateContext.Provider
      value={{
        getResults,
        setErrorCode,
        setChartData,
        result,
        errorCode,
        chartData,
      }}
    >
      {children}
    </CalculateContext.Provider>
  )
}

export const useCalculate = () => useContext(CalculateContext)
