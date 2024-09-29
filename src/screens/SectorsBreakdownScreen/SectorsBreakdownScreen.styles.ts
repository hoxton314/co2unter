import { styled } from 'styled-components'

export const ScreenContainer = styled.div`
  min-height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 30px 0;
`
export const TileContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  align-content: space-evenly;
  text-align: center;

  svg {
    ${({ theme }) => `
    color: ${theme.primary};
    padding: 10px 0;
  `}
  }
`
export const TextCenter = styled.div`
  display: flex;
  text-align: center;
  margin: 20px 0;
`

export const TileBox = styled.div`
  display: flex;
  align-items: center;
`
