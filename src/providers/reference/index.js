import { createContext, useContext } from 'react'
import { useRef } from 'react'

const ReferenceContext = createContext()

export const ReferenceProvider = ({ children }) => {
  const ref = useRef(null)

  const handleClickRef = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ReferenceContext.Provider
      value={{
        ref,
        handleClickRef
      }}
    >
      {children}
    </ReferenceContext.Provider>
  )
}

export const useReference = () => useContext(ReferenceContext)
