import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FlyingHabitsRadioListItem, FormStepContainer, RadioListContainer, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'

export const FlyingHabits: FC = observer(() => {
  const store = useContext(StoreContext)
  const { flyingHabit } = store.FormState.form
  const { flyingHabit: trans } = store.TranslationsState.translations.FormScreen

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          return (
            <FlyingHabitsRadioListItem
              key={index}
              onClick={() => store.FormState.setFlyingHabit(option.name)}
              $selected={option.name === flyingHabit}
            >
              <label> {option.label}</label>
            </FlyingHabitsRadioListItem>
          )
        })}
      </RadioListContainer>
    </FormStepContainer>
  )
})
