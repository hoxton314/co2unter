import styled from 'styled-components'
import { dimensions } from '../../theme/dimensions'

export const Container = styled.div<{ $isPwa?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  width: 100%;
  height: ${({ $isPwa }) => `calc(${dimensions.barHeight} + ${$isPwa ? '20px' : '0px'})`};
  /* border-radius: 10px 10px 0 0; */

  background-color: ${({ theme }) => theme.primary};
`
