import styled from 'styled-components'

export const Container = styled.div`
  .customContainer,
  input {
    padding: 8px 10px;
    width: 100%;
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 1rem;
    box-sizing: border-box;
    background: var(--white);

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    :focus {
      outline: ${(props) =>
        props.yuperror ? '3px solid #FF7900' : '3px solid #A000C8'};
    }
  }
`


