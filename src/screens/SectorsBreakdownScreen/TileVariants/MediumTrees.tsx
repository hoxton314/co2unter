import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { SectorData, sectorName } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'

type MediumTreesProps = {
  sectorData: SectorData
  sectorName: sectorName
}

export const MediumTrees: FC<MediumTreesProps> = observer(({ sectorData, sectorName }) => {
  const store = useContext(StoreContext)
  const { mediumTreeAbsorption } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <>
      {sectorName}
      <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="currentColor">
        <path d="M541.11-74.02H419.89v-149H108.76l189-274h-95.24L480-890.52l277.48 393.5h-94.24l188 274H541.11v149ZM240.07-291.15h189-90 281.86-89 189-480.86Zm0 0h480.86l-189-274h89L480-765.17 339.07-565.15h90l-189 274Z" />
      </svg>
      {`${mediumTreeAbsorption} ${sectorData.mediumTreeAbsorption}`}
    </>
  )
})
