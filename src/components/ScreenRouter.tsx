import { observer } from 'mobx-react'
import { FC, FunctionComponent, useContext, useEffect, useState } from 'react'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { FormScreen } from '../screens/FormScreen/FormScreen'
import { WelcomeScreen } from '../screens/WelcomeScreen/WelcomeScreen'
import { SectorsBreakdownScreen } from '../screens/SectorsBreakdownScreen/SectorsBreakdownScreen'
import { EnvironmentVsEmissionScreen } from '../screens/EnvironmentVsEmissionScreen/EnvironmentVsEmissionScreen'
import { StoreContext } from '../App'
import styled from 'styled-components'
import { dimensions } from '../theme/dimensions'
import { usePwa } from '../hooks/usePWA'
import { HeatMapScreen } from "../screens/HeatMapScreen/HeatMapScreen"

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
  home: HomeScreen,
  form: FormScreen,
  welcome: WelcomeScreen,
  sectorsBreakdown: SectorsBreakdownScreen,
  environmentVsEmission: EnvironmentVsEmissionScreen,
  heatMap: HeatMapScreen,
}

export const ScreenRouter: FC = observer(() => {
  const store = useContext(StoreContext)
  const { isPwa } = usePwa()
  const { currentScreen } = store.AppState
  const [CurrentScreen, setCurrentScreen] = useState<FunctionComponent<{}>>(HomeScreen)

  useEffect(() => {
    setCurrentScreen(SCREENS[currentScreen])
  }, [currentScreen])

  return (
    <RouterContainer $isPwa={isPwa}>
      <CurrentScreen />
    </RouterContainer>
  )
})
