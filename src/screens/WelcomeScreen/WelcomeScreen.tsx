import { observer } from 'mobx-react'
import { FC } from 'react'
import { ActionWrapper, ScreenContainer } from './WelcomeScreen.styles'
import { Button } from '../../styles/generic.styles'

export const WelcomeScreen: FC = observer(() => {
  return (
    <ScreenContainer>
      <h1>Welcome to CO2TROL app!</h1>
      <h2> Do you wish to take a quick questionnaire to help you understand your carbon footprint?</h2>

      <ActionWrapper>
        <Button type="secondary">Cancel</Button>
        <Button type="primary">Yes</Button>
      </ActionWrapper>
    </ScreenContainer>
  )
})
