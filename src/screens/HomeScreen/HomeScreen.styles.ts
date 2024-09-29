import { css, styled } from "styled-components"
import { dimensions } from "../../theme/dimensions"

export const ScreenContainer = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
`

export const FlexContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const FlexItem = styled.div<{ $selected?: boolean }>`
  box-sizing: border-box;
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 200px;
  margin: 8px;
  border-radius: 12px;


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

  div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: inherit;
  }

  svg {
    color: inherit;
    width: 70%;
    aspect-ratio: 1;
  }
`

