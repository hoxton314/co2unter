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
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-content: space-evenly;
  text-align: center;

  svg {
    ${({ theme }) => `
    color: ${theme.primary};
    padding: 10px 0;
    height: 200px;
    width: auto;
  `}
  }

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    svg {
      height: inherit;
      width: auto;
    }
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
export const Text = styled.p`
  font-size: 20px;
  @media (min-width: 500px) {
    font-size: 14px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`
