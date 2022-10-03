import { createContext, useContext, useState } from 'react'

const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showChart, setShowChart] = useState(false)
  const [countResults, setCountResults] = useState(4)

  return (
    <LoadingContext.Provider
      value={{
        loading,
        showResults,
        countResults,
        showChart,
        setShowChart,
        setShowResults,
        setLoading,
        setCountResults,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
