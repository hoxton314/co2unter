import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FormStepContainer, RadioListContainer, RadioListItem, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { dietSvgs } from '../icons'

export const Diet: FC = observer(() => {
  const store = useContext(StoreContext)
  const { diet } = store.FormState.form
  const { diet: trans } = store.TranslationsState.translations.FormScreen

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          const SVG = dietSvgs[option.name]

          return (
            <RadioListItem
              key={index}
              onClick={() => store.FormState.setDiet(option.name)}
              $selected={option.name === diet}
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
