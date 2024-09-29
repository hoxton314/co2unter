export type SectorData = {
  oldTreesAbsorption: number
  mediumTreeAbsorption: number
  seedlingAbsorption: number
  totalEmissions: number
  closestAbsorptionPark: {
    name: string
    area: number
    co2_absorbed_tons: number
  }
}

export type sectorName = 'transport' | 'events' | 'services' | 'user'

export type TileSwapperProps = {
  sectorName: sectorName
  sectorData: SectorData
}
