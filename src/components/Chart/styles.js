import styled from "styled-components";


export const MainContainer = styled.div`
  max-width: 400px;
  flex-grow: 1;
`

export const Container = styled.div`
  padding: 25px 20px 20px 19px;
  border: 1px solid var(--pink);
  border-radius: 5px;
  min-height: 548px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--black);
  box-sizing: border-box;

  p {
    color: var(--pink);
    margin-top: 20px;
  }
`

export const Title = styled.h2`
  color: var(--silver);
  font-size: 1.2rem;
  margin: 10px auto 30px;
`