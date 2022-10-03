import styled from 'styled-components'

export const Container = styled.button`
  position: absolute;
  right: 20px;
  top: 15px;
  border-radius: 50%;
  padding: 3px;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  :hover {
    background-color: var(--grey);
  }
`
