interface TotalEmissions {
  oldTreesAbsorption: number
  mediumTreeAbsorption: number
  seedlingAbsorption: number
  totalEmissions: number
}

interface EmissionsByMean {
  method: string
  sharePercent: number
  emissions: number
}

interface EmissionsByService {
  service?: string // `service` is sometimes used
  method?: string // `method` is used instead of `service` in some entries
  averageFrequency: string
  emissions: number
}

interface Park {
  name: string
  area: string // You could change this to `number` if you prefer to handle area as a number
  co2_absorbed_tons: number
}

interface Event {
  name: string
  date: string
  location: string
  co2_emissions: number
  park: Park
}

interface Transport {
  totalEmissions: TotalEmissions
  emissionsByMean: EmissionsByMean[]
}

interface Services {
  totalEmissions: TotalEmissions
  emissionsByService: EmissionsByService[]
}

interface Events {
  totalEmissions: TotalEmissions
  events: Event[]
}

export interface ISectors {
  transport?: Transport
  services?: Services
  events?: Events
}
