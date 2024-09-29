import { observer } from 'mobx-react'
import { FC, useContext, useState } from 'react'
import { CarUseRadioListItem, FormStepContainer, RadioListContainer, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { NumberInput } from '../../../components/NumberInput/NumberInput'

const isActive = (name: string, value: string | number | undefined) => {
  if (!value) return false

  if (typeof value === 'string') {
    return name === value
  } else {
    return name === 'carDistanceNumber'
  }
}

export const CarUse: FC = observer(() => {
  const store = useContext(StoreContext)
  const { otherCarUsage } = store.FormState.form
  const { otherCarUsage: trans } = store.TranslationsState.translations.FormScreen

  const [customValue, setCustomValue] = useState<number>(1)

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          // const SVG = electricitySvgs[index]

          return (
            <CarUseRadioListItem
              key={index}
              onClick={() =>
                store.FormState.setOtherCarUsage(option.name === 'carDistanceNumber' ? customValue : option.name)
              }
              $selected={isActive(option.name, otherCarUsage)}
            >
              {/* <SVG /> */}
              <label> {option.label}</label>

              {option.name === 'carDistanceNumber' && (
                <NumberInput value={customValue} onChange={(value) => setCustomValue(value)} />
              )}
            </CarUseRadioListItem>
          )
        })}
      </RadioListContainer>
    </FormStepContainer>
  )
})
