import { observer } from 'mobx-react'
import { FC, useContext, useState } from 'react'
import { FormStepContainer, RadioListContainer, ElectricityRadioListItem, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { NumberInput } from '../../../components/NumberInput/NumberInput'
import { electricitySvgs } from '../icons'

const isActive = (name: string, value: string | number | undefined) => {
  if (!value) return false

  if (typeof value === 'string') {
    return name === value
  } else {
    return name === 'electricityUsageNumber'
  }
}

export const ElectricUsage: FC = observer(() => {
  const store = useContext(StoreContext)
  const { electricityUsage } = store.FormState.form
  const { electricityUsage: trans } = store.TranslationsState.translations.FormScreen

  const [customValue, setCustomValue] = useState<number>(1)

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>

      <RadioListContainer>
        {trans.options.map((option, index) => {
          const SVG = electricitySvgs[index]

          return (
            <ElectricityRadioListItem
              key={index}
              onClick={() =>
                store.FormState.setElectricityUsage(
                  option.name === 'electricityUsageNumber' ? customValue : option.name,
                )
              }
              $selected={isActive(option.name, electricityUsage)}
            >
              <SVG />
              <label> {option.label}</label>

              {option.name === 'electricityUsageNumber' && (
                <NumberInput value={customValue} onChange={(value) => setCustomValue(value)} />
              )}
            </ElectricityRadioListItem>
          )
        })}
      </RadioListContainer>
    </FormStepContainer>
  )
})
