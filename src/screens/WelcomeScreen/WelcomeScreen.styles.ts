import { styled } from 'styled-components'

export const ScreenContainer = styled.div`
  height: 100%;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 24px;
    margin: 0px;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    width: 100%;
    text-align: center;
  }

  svg {
    margin: 16px 0;
    color: ${({ theme }) => theme.secondary};
    width: 60%;
  }
`

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
`
