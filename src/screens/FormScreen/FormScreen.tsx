import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { HouseSize } from './Steps/HouseSize'
import { HousePeopleCount } from './Steps/HousePeopleCount'
import { ElectricUsage } from './Steps/ElectricityUsage'
import { Diet } from './Steps/Diet'
import { Shopping } from './Steps/Shopping'
import { Commute } from './Steps/Commute'
import { CarUse } from './Steps/CarUse'
import { CarType } from './Steps/CarType'
import { FlyingHabits } from './Steps/FlyingHabits'
import { StoreContext } from '../../App'
import { FormControls, ScreenContainer } from './FormScreen.styles'
import { Button } from '../../styles/generic.styles'

export const FormMap = {
  household: HouseSize,
  electricityUsage: ElectricUsage,
  inhabitants: HousePeopleCount,
  diet: Diet,
  shopping: Shopping,
  dailyCommute: Commute,
  otherCarUsage: CarUse,
  carType: CarType,
  flyingHabit: FlyingHabits,
}

export const FormScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { currentFormStep, stepIndex, form } = store.FormState

  const Step = FormMap[currentFormStep]
  return (
    <ScreenContainer>
      <Step />
      <FormControls>
        {stepIndex === 0 ? (
          <div />
        ) : (
          <Button onClick={() => store.FormState.prevStep()} type="gray">
            Back
          </Button>
        )}
        <Button onClick={() => store.FormState.nextStep()} disabled={!form[currentFormStep]}>
          Next
        </Button>
      </FormControls>
    </ScreenContainer>
  )
})
