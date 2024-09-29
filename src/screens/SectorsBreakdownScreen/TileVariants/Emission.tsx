import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { TileSwapperProps } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'
import { Title } from '../../FormScreen/FormScreen.styles'
import { TileBox, Text } from '../SectorsBreakdownScreen.styles'

export const Emission: FC<TileSwapperProps> = observer(({ sectorName, sectorType }) => {
  const store = useContext(StoreContext)
  const { totalEmissions } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <TileBox>
      <Title>{sectorName}</Title>

      <svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" fill="#4b4b4b">
        <path d="M724.18-198.07q-15.67 0-27.19-11.39-11.51-11.4-11.51-27.07 0-15.68 11.53-27.19 11.53-11.52 27.06-11.52 15.79 0 27.19 11.53 11.39 11.53 11.39 27.06 0 15.79-11.39 27.19-11.4 11.39-27.08 11.39ZM278.1-68.28q-15.69 0-27.14-11.4-11.46-11.4-11.46-27.07t11.4-27.19q11.39-11.52 27.07-11.52 15.57 0 27.02 11.53 11.44 11.54 11.44 27.06 0 15.79-11.45 27.19-11.46 11.4-26.88 11.4ZM240-198.07q-15.79 0-27.19-11.39-11.4-11.4-11.4-27.07 0-15.68 11.4-27.19 11.4-11.52 27.19-11.52h360q15.79 0 27.19 11.53 11.4 11.53 11.4 27.06 0 15.79-11.4 27.19-11.4 11.39-27.19 11.39H240ZM402.15-68.28q-15.79 0-27.19-11.4-11.39-11.4-11.39-27.07t11.39-27.19q11.4-11.52 27.19-11.52h280q15.69 0 27.02 11.53 11.33 11.54 11.33 27.06 0 15.79-11.33 27.19-11.33 11.4-27.02 11.4h-280ZM290-338.57q-88.42 0-151.24-62.83-62.83-62.84-62.83-151.07 0-80.36 56.86-143.31 56.86-62.96 141.58-69.68 32.8-56 85.99-88.74 53.19-32.73 120.01-32.73 91.11 0 153.45 57.61 62.33 57.62 77.53 142.86 79.72 4.96 126.22 55.41 46.5 50.45 46.5 117.93 0 72.16-50.77 123.36-50.77 51.19-123.3 51.19H290Zm0-68.36h420q44.49 0 75.21-31.13 30.72-31.13 30.72-75.01 0-43.89-30.72-74.69-30.72-30.81-75.21-30.81h-64.07v-34.06q0-69.32-48.3-117.63t-117.4-48.31q-50.22 0-91.59 26.86-41.37 26.86-60.81 72.51l-9.03 20.63h-30.56q-60.42 1.95-102.3 44.14-41.87 42.19-41.87 101.58 0 60.32 42.67 103.12 42.68 42.8 103.26 42.8Zm190-205.7Z" />
      </svg>
      <Text>{`${totalEmissions}: ${Math.floor((sectorType !== 'user' ? store.AppState.sectors[sectorType]?.totalEmissions.totalEmissions : store.AppState.calculatedEmission.totalEmissions) as number)}`}</Text>
    </TileBox>
  )
})
