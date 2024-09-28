import { css, styled } from 'styled-components'

export const ScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export const FormControls = styled.div`
  /* border-top: 2px solid ${({ theme }) => theme.secondary}; */
  filter: drop-shadow(0px 8px 24px rgba(30, 30, 30, 0.6));
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: absolute;
  bottom: 0;

  background-color: ${({ theme }) => theme.tertiary};
`

export const FormStepContainer = styled.div`
  padding: 32px 16px;
  width: 100%;
  height: 100%;
  max-height: calc(100svh - 180px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  overflow-y: auto;
`
export const Title = styled.h1<{ $marginTop?: string }>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0px;

  ${({ $marginTop }) =>
    $marginTop &&
    css`
      margin-top: ${$marginTop};
    `}
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
  border-radius: 12px;
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
    width: 70%;
    aspect-ratio: 1;
  }
`

export const RadioListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

export const RadioListItem = styled.div<{ $selected?: boolean }>`
  height: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 32px 160px auto;
  padding: 12px;
  border-radius: 5px;
  gap: 16px;

  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.secondary};

  ${({ $selected, theme }) =>
    $selected &&
    `
      background-color: ${theme.secondary};
      color: ${theme.tertiary};

            -webkit-box-shadow: inset 0px 8px 24px 0px rgba(30, 30, 30, 0.6);
      -moz-box-shadow: inset 0px 8px 24px 0px rgba(30, 30, 30, 0.6);
      box-shadow: inset 0px 8px 24px 0px rgba(30, 30, 30, 0.6);
      border: 0px solid transparent;
    `}

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }

  label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    align-self: center;
    justify-self: start;
  }

  svg {
    align-self: center;
    justify-self: center;
    width: 32px;
    aspect-ratio: 1;
  }

  input[type='number'] {
    aspect-ratio: unset;
    height: 50px;
    width: 100%;
    margin: -12px 0;
    text-align: right;
    padding-right: 8px;
    background-color: ${({ theme }) => theme.secondary};

    ${({ $selected, theme }) =>
      $selected &&
      `
      background-color: ${theme.tertiary};
      color: ${theme.secondary};


    `}
  }
`

export const Spacer = styled.div<{ $size?: number }>`
  display: block;
  height: 1px;
  width: 100%;
  margin-top: ${({ $size }) => ($size ? $size - 1 : 16)}px;
`
