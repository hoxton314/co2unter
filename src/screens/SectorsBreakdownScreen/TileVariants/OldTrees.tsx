import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { SectorData, sectorName } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'

type OldTreesProps = {
  sectorData: SectorData
  sectorName: sectorName
}

export const OldTrees: FC<OldTreesProps> = observer(({ sectorData, sectorName }) => {
  const store = useContext(StoreContext)
  const { oldTrees } = store.TranslationsState.translations.SectorBreakdown
  return (
    <>
      {sectorName}
      <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="currentColor">
        <path d="M297.5-74.02v-149H-13.87l189.72-274h-96.2l277.72-393.5L480-716.7l122.63-173.82 277.72 393.5h-94.96l188.72 274H663.5v149H543v-149H418v149H297.5Zm385.13-217.13h160.46l-189.72-274h90.2L602.63-765.17l-77.61 111.65 109.83 156.5h-95.2l142.98 205.87Zm-564.72 0h479.68l-189.72-274h90.43L357.37-765.17 216.43-565.15h91.2l-189.72 274Zm0 0h189.72-91.2H498.3h-90.43 189.72-479.68Zm564.72 0H539.65h95.2-109.83 218.55-90.2 189.72-160.46ZM543-223.02h120.5H543Zm186.61 0Z" />
      </svg>
      {`${oldTrees} ${sectorData.oldTreesAbsorption}`}
    </>
  )
})
