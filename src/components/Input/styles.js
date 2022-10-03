import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px 0px;
  width: 100%;
`

export const StyledSpan = styled.span`
  color: ${(props) => (props.yuperror ? '#F58F7C' : 'transparent')};
`

export const StyledLabel = styled.label`
  color: var(--silver);
  font-size: 1rem;
`
