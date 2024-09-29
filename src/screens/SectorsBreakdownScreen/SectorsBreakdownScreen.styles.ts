import { styled } from 'styled-components'

export const ScreenContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
`
export const TileContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 32px;

  svg {
    ${({ theme }) => `
    color: ${theme.primary};
  `}
  }
`
