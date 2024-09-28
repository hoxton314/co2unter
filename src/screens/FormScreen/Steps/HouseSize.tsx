import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { FormStepContainer, RadioContainer, RadioItem, Title } from '../FormScreen.styles'
import { StoreContext } from '../../../App'
import { convertOptionsToObject } from '../../../methods/transConvert'

export const HouseSize: FC = observer(() => {
  const store = useContext(StoreContext)
  const { household } = store.FormState.form
  const { houseSize: trans } = store.TranslationsState.translations.FormScreen

  // convert {label, name} to {name: label}
  const options = convertOptionsToObject(trans.options)

  return (
    <FormStepContainer>
      <Title> {trans.title} </Title>
      <RadioContainer>
        <RadioItem $selected={household === 'studio'} onClick={() => store.FormState.setHousehold('studio')}>
          <h3> {options.studio} </h3>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"
            />
          </svg>
        </RadioItem>

        <RadioItem $selected={household === 'oneBedroom'} onClick={() => store.FormState.setHousehold('oneBedroom')}>
          <h3>{options.oneBedroom}</h3>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13 23l-9.983-.014v-9.979l8.974-7.995c1.124.999 2.25 1.998 3.378 2.998l2.255 1.999c1.127.999 2.252 1.992 3.376 2.991v10l-5.993-.014-.007-4.986h-2v5zm6-2l.019-7.121-7.028-6.193-6.991 6.218v7.096h6v-5h6v5h2zm-10-5v3h-2v-3h2zm3-15l12 10.654-1.328 1.494-10.672-9.488-10.672 9.488-1.328-1.494 12-10.654z"
            />
          </svg>
        </RadioItem>

        <RadioItem $selected={household === 'twoBedroom'} onClick={() => store.FormState.setHousehold('twoBedroom')}>
          <h3>{options.twoBedroom}</h3>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7 23h-5v-8.766l5.698-4.921 1.711 1.384 6.591-5.697 6 5.236v12.764h-5v-3h-2v3h-6v-3h-2v3zm13-2v-9.855l-4.006-3.496-6.542 5.655-1.712-1.385-3.74 3.231v5.85h1v-3h6v3h2v-3h6v3h1zm-7-6h2v2h-2v-2zm-8 0h2v2h-2v-2zm12 0h2v2h-2v-2zm-6 0v2h-2v-2h2zm2-3h2v2h-2v-2zm4 0h2v2h-2v-2zm-7.642-5.253l6.642-5.747 8 7-1.329 1.495-6.671-5.819-6.624 5.738-1.678-1.414-6.369 5.495-1.329-1.495 7.698-6.676 1.66 1.423z"
            />
          </svg>
        </RadioItem>

        <RadioItem
          $selected={household === 'threeBedroom'}
          onClick={() => store.FormState.setHousehold('threeBedroom')}
        >
          <h3>{options.threeBedroom}</h3>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16 7h8v17h-24v-24h16v7zm-9 12h-2v4h2v-4zm4 0h-2v4h2v-4zm7 0h-2v4h2v-4zm4-10h-6v8h4v5h2v-13zm-8-7h-12v20h1v-5h10v5h1v-20zm-8 13h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm8-2v2h-2v-2h2zm-14-1h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm6-2h2v2h-2v-2zm-12-1h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm-6-3h-2v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2z"
            />
          </svg>
        </RadioItem>
      </RadioContainer>
    </FormStepContainer>
  )
})
