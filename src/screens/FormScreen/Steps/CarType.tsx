import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FormStepContainer, RadioListContainer, RadioListItem, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { carTypeSvgs } from '../icons'

export const CarType: FC = observer(() => {
  const store = useContext(StoreContext)
  const { carType } = store.FormState.form
  const { carType: trans } = store.TranslationsState.translations.FormScreen

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          const SVG = carTypeSvgs[option.name]

          return (
            <RadioListItem
              key={index}
              onClick={() => store.FormState.setCarType(option.name)}
              $selected={option.name === carType}
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
