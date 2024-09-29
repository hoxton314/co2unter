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

export type sectorType = 'transport' | 'events' | 'services' | 'user'

export type TileSwapperProps = {
  sectorType: sectorType
  sectorName: string
}
