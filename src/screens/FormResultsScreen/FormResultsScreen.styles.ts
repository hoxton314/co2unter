import styled from 'styled-components'
import { dimensions } from '../../theme/dimensions'

export const Container = styled.div`
  /* margin-top: ${dimensions.barHeight}; */
  padding: 32px;
  height: 100%;
  max-height: calc(100svh - ${dimensions.barHeight} - ${dimensions.barHeight});
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  overflow-y: auto;

  h1 {
    width: 100%;
    text-align: center;
  }
`

export const ErrorMessageBox = styled.div``

export const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

export const ResultsItem = styled.div`
  width: 100%;
  display: grid;
  gap: 32px 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 64px;
  grid-template-areas:
    'title title'
    'icon value';
`

export const ResultsItemTitle = styled.div`
  width: 100%;
  font-weight: bold;
  grid-area: title;
`

export const ResultsItemValue = styled.div`
  grid-area: value;

  align-self: center;
  justify-self: center;

  font-size: 42px;

  color: ${({ theme }) => theme.secondary};
`

export const ResultsItemIcon = styled.div`
  height: 100%;
  aspect-ratio: 1;
  grid-area: icon;

  align-self: center;
  justify-self: center;

  color: ${({ theme }) => theme.primary};
  svg {
    height: 100%;
    width: 100%;
  }
`
