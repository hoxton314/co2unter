import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { TileSwapperProps } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'
import { ISectors } from '../../../types/sectors'

export const Saplings: FC<TileSwapperProps> = observer(({ sectorName, sectorType }) => {
  const store = useContext(StoreContext)
  const { seedlingAbsorption } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <>
      {sectorName}
      <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="currentColor">
        <path d="M224.5-74.5v-68.13h221.43v-172.83H360q-85.66 0-145.82-60.16t-60.16-145.84q0-60.92 33-112.38 33-51.46 89.48-75.66 10.2-76.2 68.18-127.05 57.98-50.86 135.32-50.86t135.32 50.86Q673.3-785.7 683.5-709.5q56.48 24.2 89.6 75.66 33.12 51.46 33.12 112.38 0 85.68-60.32 145.84T600-315.46h-85.93v172.83H745.5v68.13h-521ZM360-383.59h240q57.44 0 97.64-40.19 40.21-40.19 40.21-97.6 0-41.34-23.67-75.35-23.67-34.02-61.14-50.79l-32.95-14.24-4.24-36.44q-7-52.04-45.59-86.44-38.58-34.4-90.26-34.4-51.68 0-90.26 34.4-38.59 34.4-45.59 86.44l-4.24 36.44-32.95 14.24q-37.47 16.75-61.14 50.94-23.67 34.18-23.67 75.21 0 56.98 40.21 97.38 40.2 40.4 97.64 40.4Zm120-217.84Z" />
      </svg>
      {`${seedlingAbsorption} ${sectorType !== 'user' && store.AppState.sectors[sectorType]?.totalEmissions.seedlingAbsorption}`}
    </>
  )
})
