import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ValueButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.tertiary};
  border: none;
  border-radius: 50%;
  padding: 10px;
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`

export const Input = styled.input`
  width: 80px;
  font-size: 36px;
  aspect-ratio: 1;
  border: none;
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`
