import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FormStepContainer, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { NumberInput } from '../../../components/NumberInput/NumberInput'

export const HousePeopleCount: FC = observer(() => {
  const store = useContext(StoreContext)
  const { inhabitants } = store.FormState.form
  const { inhabitants: trans } = store.TranslationsState.translations.FormScreen

  return (
    <FormStepContainer>
      <Title>{trans.title}</Title>
      <NumberInput
        value={inhabitants}
        onChange={(value) => store.FormState.setInhabitants(value)}
        min={1}
        max={99}
        controls
      />
    </FormStepContainer>
  )
})
