import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 20px;
  min-height: 100svh;
  width: 100vw;
  background-color: ${({ theme }) => theme.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`
