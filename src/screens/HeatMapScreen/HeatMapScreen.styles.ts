import { styled } from 'styled-components'
import { dimensions } from '../../theme/dimensions'

export const ScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  iframe {
    border: 0;
    position: relative;
    width: 100%;
    height: ${`calc(100% + ${dimensions.barHeight} + 17px)`};
    border-radius: 8px;
    margin-top: ${`calc(-${dimensions.barHeight} - 17px)`};
    * {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`
