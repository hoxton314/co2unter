import { styled } from 'styled-components'
import {Map} from '@vis.gl/react-google-maps';

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
    height: 100%;
    border-radius: 8px;
    * {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`
