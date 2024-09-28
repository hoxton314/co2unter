import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FormStepContainer, RadioListContainer, RadioListItem, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { commuteSvgs } from '../icons'

export const Commute: FC = observer(() => {
  const store = useContext(StoreContext)
  const { dailyCommute } = store.FormState.form
  const { commuteToWork: trans } = store.TranslationsState.translations.FormScreen

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          const SVG = commuteSvgs[option.name]

          return (
            <RadioListItem
              key={index}
              onClick={() => store.FormState.setDailyCommute(option.name)}
              $selected={option.name === dailyCommute}
            >
              <SVG />
              <label> {option.label}</label>
            </RadioListItem>
          )
        })}
      </RadioListContainer>
    </FormStepContainer>
  )
})
