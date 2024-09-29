import { css, styled } from "styled-components"
import { dimensions } from "../../theme/dimensions"

export const ScreenContainer = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`

export const FlexItem = styled.div<{ $selected?: boolean }>`
  aspect-ratio: 2.3;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  margin: 12px;
  gap: 10px;

  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.secondary};

  ${({ theme }) => `
    border: 4px solid ${theme.secondary};
  `}

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${theme.secondary};
      color: ${theme.tertiary};
      -webkit-box-shadow: inset 0px 8px 24px 0px rgba(30, 30, 30, 0.6);
      -moz-box-shadow: inset 0px 8px 24px 0px rgba(30, 30, 30, 0.6);
      box-shadow: inset 0px 8px 24px 0px rgba(30, 30, 30, 0.6);
      border: 0px solid transparent;
    `}

  cursor: pointer;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: inherit;
  }

  svg {
    color: inherit;
    width: 20%;
    aspect-ratio: 1;
  }
`

