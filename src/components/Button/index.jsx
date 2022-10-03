import { StyledButton } from './styles'

const MainButton = ({ children, src = false, alt=null, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {!!src && <img src={src} alt='button icon' />}
      {children}
    </StyledButton>
  )
}

export default MainButton
