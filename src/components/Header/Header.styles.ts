import styled from 'styled-components'
import { dimensions } from '../../theme/dimensions'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${dimensions.barHeight};
  padding: 0 16px;

  /* border-radius: 0 0 10px 10px; */

  background-color: ${({ theme }) => theme.primary};
`
