export interface ICalculatedEmission {
  oldTreesAbsorption?: number
  mediumTreeAbsorption?: number
  seedlingAbsorption?: number
  totalEmissions?: number
  closestPark?: {
    name: string
    co2_absorbed_tons: number
  }
}
