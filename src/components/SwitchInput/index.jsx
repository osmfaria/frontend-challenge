import CurrencyInput from 'react-currency-input-field'
import { Container } from './styles'

const SwitchInput = ({
  error,
  type,
  placeholder,
  name,
  mode,
  setValue,
  register,
}) => {
  switch (mode) {
    case 'currency':
      return (
        <Container yuperror={error}>
          <CurrencyInput
            data-testid="amount"
            placeholder={placeholder}
            className='customContainer'
            allowNegativeValue={false}
            decimalScale={2}
            prefix='R$'
            groupSeparator='.'
            decimalSeparator=','
            maxLength={10}
            minLength={6}
            onValueChange={(value) => setValue(name, value)}
          />
        </Container>
      )

    default:
      return (
        <Container yuperror={error}>
          <input type={type} placeholder={placeholder} {...register(name)} />
        </Container>
      )
  }
}

export default SwitchInput
