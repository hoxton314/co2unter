import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { Button } from '../../styles/generic.styles'
import { StoreContext } from '../../App'
import { ScreenContainer } from './HomeScreen.styles'

export const HomeScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { welcome, testEmission, sectorsBreakdown, environmentVsEmission, heatMap } =
    store.TranslationsState.translations.HomeScreen
  return (
    <ScreenContainer>
      <Button onClick={() => store.AppState.setCurrentScreen('home')} type="primary">
        {welcome}
      </Button>
      <Button onClick={() => store.AppState.setCurrentScreen('form')} type="primary">
        {testEmission}
      </Button>
      <Button onClick={() => store.AppState.setCurrentScreen('sectorsBreakdown')} type="primary">
        {sectorsBreakdown}
      </Button>
      <Button onClick={() => store.AppState.setCurrentScreen('environmentVsEmission')} type="primary">
        {environmentVsEmission}
      </Button>
      <Button onClick={() => store.AppState.setCurrentScreen('heatMap')} type="primary">
        {heatMap}
      </Button>
    </ScreenContainer>
  )
})
