import { observer } from 'mobx-react'
import { FC } from 'react'
import { ScreenContainer, TileContainer } from './SectorsBreakdownScreen.styles'
import { TileSwapper } from '../../components/TileSwapper'
import { SectorData } from '../../types/TileSwapper'

const totalEmissions: SectorData = {
  oldTreesAbsorption: 384156.8181818182,
  mediumTreeAbsorption: 939050,
  seedlingAbsorption: 16902900,
  totalEmissions: 8451.45,
  closestAbsorptionPark: {
    name: 'Kwietny Ogród Krakowian',
    area: 0.1844,
    co2_absorbed_tons: 1.5120799999999999,
  },
}

export const SectorsBreakdownScreen: FC = observer(() => {
  return (
    <ScreenContainer>
      <TileContainer>
        <TileSwapper sectorName="transport" sectorData={totalEmissions} />
        <TileSwapper sectorName="services" sectorData={totalEmissions} />
        <TileSwapper sectorName="events" sectorData={totalEmissions} />
        <TileSwapper sectorName="user" sectorData={totalEmissions} />
      </TileContainer>
    </ScreenContainer>
  )
})
