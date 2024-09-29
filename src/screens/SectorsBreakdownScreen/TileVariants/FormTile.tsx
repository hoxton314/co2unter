import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { TileSwapperProps } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'
import { Button } from '../../../styles/generic.styles'

export const FormTile: FC<TileSwapperProps> = observer(({ sectorName }) => {
  const store = useContext(StoreContext)
  const { user } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <>
      {Object.entries(store.AppState.calculatedEmission).length ? (
        <Button onClick={() => store.AppState.setCurrentScreen('form')} type="primary">
          Do form again
        </Button>
      ) : (
        <>
          {user}
          <Button onClick={() => store.AppState.setCurrentScreen('form')} type="primary">
            Get your data
          </Button>
        </>
      )}
    </>
  )
})
