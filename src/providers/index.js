import { CalculateProvider } from './calculate'
import { LoadingProvider } from './loading'
import { ReferenceProvider } from './reference'

const Providers = ({ children }) => {
  return (
    <LoadingProvider>
      <ReferenceProvider>
        <CalculateProvider>{children}</CalculateProvider>
      </ReferenceProvider>
    </LoadingProvider>
  )
}

export default Providers