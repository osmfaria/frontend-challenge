import styled from 'styled-components'

export const Container = styled.div`
  .divider {
    border: 1px solid var(--pink);
  }
  width: 100%;
`

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: var(--silver);
  width: 100%;
  flex-grow: 1;

  .item-key {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h2 {
      margin-left: 6px;
    }
  }
  p {
    margin-left: 10px;
  }
`