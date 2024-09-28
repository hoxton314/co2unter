import { css, styled } from 'styled-components'

export const ScreenContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
`

export const FormControls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
`

export const FormStepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`

export const RadioContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 32px;
`

export const RadioItem = styled.div<{ $selected?: boolean }>`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  gap: 10px;

  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.secondary};

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${theme.secondary};
      color: ${theme.tertiary};
      -webkit-box-shadow: inset 0px 8px 24px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: inset 0px 8px 24px 0px rgba(66, 68, 90, 1);
      box-shadow: inset 0px 8px 24px 0px rgba(66, 68, 90, 1);
    `}

  cursor: pointer;
  ${({ theme }) => `
    border: 1px solid ${theme.gray};
  `}

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
