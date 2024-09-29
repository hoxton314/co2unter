import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { TileSwapperProps } from '../../../types/TileSwapper'
import { StoreContext } from '../../../App'
import { ISectors } from '../../../types/sectors'
import { Title } from '../../FormScreen/FormScreen.styles'
import { TileBox, Text } from '../SectorsBreakdownScreen.styles'

export const Saplings: FC<TileSwapperProps> = observer(({ sectorName, sectorType }) => {
  const store = useContext(StoreContext)
  const { seedlingAbsorption } = store.TranslationsState.translations.CalculatedEmissions
  return (
    <TileBox>
      <Title>{sectorName}</Title>
      <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="currentColor">
        <path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z" />
      </svg>
      <Text>{`${seedlingAbsorption}: ${Math.floor((sectorType !== 'user' ? store.AppState.sectors[sectorType]?.totalEmissions.seedlingAbsorption : store.AppState.calculatedEmission.seedlingAbsorption) as number)}`}</Text>
    </TileBox>
  )
})
