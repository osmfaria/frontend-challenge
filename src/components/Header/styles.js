import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
`

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  padding: 24px;

  img {
    max-height: 34px;
    margin-right: 7px;
  }

  h1 {
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      color-stop(0%, var(--pink)),
      color-stop(100%, var(--orange))
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
    font-weight: var(--regular);
  }
  
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`
