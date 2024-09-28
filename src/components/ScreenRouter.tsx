import { observer } from 'mobx-react'
import { FC, FunctionComponent, useContext, useEffect, useState } from 'react'
import { MapScreen } from '../screens/HomeScreen/MapScreen'
import { FormScreen } from '../screens/FormScreen/FormScreen'
import { WelcomeScreen } from '../screens/WelcomeScreen/WelcomeScreen'
import { StoreContext } from '../App'
import styled from 'styled-components'
import { dimensions } from '../theme/dimensions'
import { usePwa } from '../hooks/usePWA'

const RouterContainer = styled.div<{ $isPwa?: boolean }>`
  padding: 32px 16px;
  width: 100%;
  height: ${({ $isPwa }) =>
    `calc(100svh  - ${dimensions.barHeight} - ${dimensions.barHeight} - ${$isPwa ? '20px' : '0'})`};
  max-height: ${({ $isPwa }) =>
    `calc(100svh  - ${dimensions.barHeight} - ${dimensions.barHeight} - ${$isPwa ? '20px' : '0'})`};
  max-width: 600px;

  overflow-y: auto;
  overflow-x: hidden;
`

export const SCREENS = {
  home: MapScreen,
  form: FormScreen,
  welcome: WelcomeScreen,
  map: MapScreen,
}

export const ScreenRouter: FC = observer(() => {
  const store = useContext(StoreContext)
  const { isPwa } = usePwa()
  const { currentScreen } = store.AppState
  const [CurrentScreen, setCurrentScreen] = useState<FunctionComponent<{}>>(MapScreen)

  useEffect(() => {
    setCurrentScreen(SCREENS[currentScreen])
  }, [currentScreen])

  return (
    <RouterContainer $isPwa={isPwa}>
      <CurrentScreen />
    </RouterContainer>
  )
})
