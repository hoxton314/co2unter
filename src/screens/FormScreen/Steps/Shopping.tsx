import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FormStepContainer, RadioListContainer, ShoppingRadioListItem, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'

export const Shopping: FC = observer(() => {
  const store = useContext(StoreContext)
  const { shopping } = store.FormState.form
  const { shopping: trans } = store.TranslationsState.translations.FormScreen

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          return (
            <ShoppingRadioListItem
              key={index}
              onClick={() => store.FormState.setShopping(option.name)}
              $selected={option.name === shopping}
            >
              <label> {option.label}</label>
            </ShoppingRadioListItem>
          )
        })}
      </RadioListContainer>
    </FormStepContainer>
  )
})
