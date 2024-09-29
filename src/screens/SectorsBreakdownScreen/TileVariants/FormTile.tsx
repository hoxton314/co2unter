import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { TileSwapperProps } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'
import { Button } from '../../../styles/generic.styles'
import { Title } from '../../FormScreen/FormScreen.styles'
import { TextCenter } from '../SectorsBreakdownScreen.styles'

export const FormTile: FC<TileSwapperProps> = observer(({ sectorName }) => {
  const store = useContext(StoreContext)
  const { user, formButton, formAgain, formFirstTime } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <>
      <Title>{user}</Title>

      {Object.entries(store.AppState.calculatedEmission).length ? (
        <>
          <TextCenter>{formAgain}</TextCenter>
          <Button onClick={() => store.AppState.setCurrentScreen('form')} type="primary">
            {formButton}
          </Button>
        </>
      ) : (
        <>
          <TextCenter>{formFirstTime}</TextCenter>
          <Button onClick={() => store.AppState.setCurrentScreen('form')} type="primary">
            {formButton}
          </Button>
        </>
      )}
    </>
  )
})
