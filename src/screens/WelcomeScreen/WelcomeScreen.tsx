import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { ActionWrapper, ScreenContainer } from './WelcomeScreen.styles'
import { Button } from '../../styles/generic.styles'
import { StoreContext } from '../../App'

export const WelcomeScreen: FC = observer(() => {
  const store = useContext(StoreContext)

  return (
    <ScreenContainer>
      <h1>Welcome to CO2TROL app!</h1>
      <h2> Do you wish to take a quick questionnaire to help you understand your carbon footprint?</h2>

      <ActionWrapper>
        <Button type="primary" width="120px" onClick={() => store.AppState.setCurrentScreen('home')}>
          Later
        </Button>
        <Button type="secondary" width="120px" onClick={() => store.AppState.setCurrentScreen('form')}>
          Yes
        </Button>
      </ActionWrapper>
    </ScreenContainer>
  )
})
