import { styled } from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 24px;
    margin: 0px;
  }

  h2 {
    font-size: 20px;
    margin: 0px;
    width: 100%;
    text-align: center;
  }
`

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
`
