import styled from 'styled-components'

export const StyledButton = styled.button`
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid var(--pink);
  border-radius: 5px;
  padding: 10px;
  color: var(--pink);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  img {
    max-height: 30px;
    margin-right: 4px;
  }

  &:hover {
    background-color: var(--grey);
  }
`
