import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { SectorData, sectorName } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'

type ParksProps = {
  sectorData: SectorData
  sectorName: sectorName
}

export const Parks: FC<ParksProps> = observer(({ sectorData, sectorName }) => {
  const store = useContext(StoreContext)
  const { parkAbsorption } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <>
      {sectorName}
      <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="currentColor">
        <path d="M156.3-489.74q-18.43 0-32.15-13.84-13.72-13.83-13.72-32.03 0-18.19 13.72-31.91 13.72-13.72 32.15-13.72 18.02 0 31.83 13.66 13.8 13.66 13.8 31.97 0 18.2-13.74 32.03-13.75 13.84-31.89 13.84ZM110.75-71.87V-267.2H69v-164.28q0-13.54 10.88-22.3 10.88-8.76 26.64-8.76h99.67q15.79 0 26.48 8.76 10.7 8.76 10.7 22.3v164.28h-40.44V-140h373.03v-244.67h-76.94q-67.5 0-115.24-45.71-47.74-45.71-47.74-111.27 0-47.2 27.5-90.15 27.5-42.96 78.22-61.16 7.96-70.95 57.33-115.93 49.36-44.98 114.43-44.98 65.17 0 113.99 44.98 48.82 44.98 57.77 115.93 50.48 18.2 78.1 61.16Q891-588.85 891-541.65q0 65.56-48.32 111.27-48.32 45.71-115.66 45.71h-82.93V-140h211v68.13H110.75ZM499.02-452.8h228q37.28 0 66.45-25.41 29.16-25.4 29.16-63.38 0-31.25-20.6-56.06-20.6-24.81-49.6-37.05l-34.32-14.51.24-29.81q.19-45.62-31.16-76.05-31.36-30.43-73.88-30.43-42.52 0-73.68 30.6-31.15 30.61-30.93 76.12l.18 29.59-34.99 14.26q-29.24 11.76-49.48 36.94-20.24 25.19-20.24 56.4 0 37.98 28.79 63.38 28.78 25.41 66.06 25.41Zm115-166.85Z" />
      </svg>
      {`${parkAbsorption} ${sectorData.closestAbsorptionPark.name}`}
    </>
  )
})
