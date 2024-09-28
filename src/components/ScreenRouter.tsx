import { observer } from 'mobx-react'
import { FC, FunctionComponent, useContext, useEffect, useState } from 'react'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { FormScreen } from '../screens/FormScreen/FormScreen'
import { WelcomeScreen } from '../screens/WelcomeScreen/WelcomeScreen'
import { StoreContext } from '../App'
import styled from 'styled-components'
import { dimensions } from '../theme/dimensions'

const RouterContainer = styled.div`
  padding: 32px 16px;
  width: 100%;
  height: calc(100svh - ${dimensions.barHeight} - ${dimensions.barHeight});
`

export const SCREENS = {
  home: HomeScreen,
  form: FormScreen,
  welcome: WelcomeScreen,
}

export const ScreenRouter: FC = observer(() => {
  const store = useContext(StoreContext)
  const { currentScreen } = store.AppState
  const [CurrentScreen, setCurrentScreen] = useState<FunctionComponent<{}>>(HomeScreen)

  useEffect(() => {
    setCurrentScreen(SCREENS[currentScreen])
  }, [currentScreen])

  return (
    <RouterContainer>
      <CurrentScreen />
    </RouterContainer>
  )
})
