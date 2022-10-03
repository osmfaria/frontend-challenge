import { StyledLabel, StyledSpan, Container } from './styles'
import SwitchInput from '../SwitchInput'

const Input = ({
  type,
  description,
  placeholder,
  register,
  name,
  error,
  setValue,
  mode,
}) => {
  return (
    <Container>
      <StyledLabel>{description}</StyledLabel>
      <SwitchInput
        error={error}
        type={type}
        placeholder={placeholder}
        name={name}
        mode={mode}
        setValue={setValue}
        register={register}
      />
      {!!error ? (
        <StyledSpan yuperror={error}>{error}</StyledSpan>
      ) : (
        <StyledSpan yuperror={error}>.</StyledSpan>
      )}
    </Container>
  )
}

export default Input
