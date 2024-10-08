export type flightCount = {
  shortRange: number
  midRange: number
  longRange: number
}

export type ElectricityPresets = 'veryLow' | 'low' | 'moderate' | 'big' | 'veryBig'
export type CarUsage = 'never' | 'rarely' | 'occasionally' | 'regularly'

export type Household = 'studio' | 'oneBedroom' | 'twoBedroom' | 'threeBedroom'
export type Diet = 'vegan' | 'mediterranean' | 'lowMeat' | 'everything'
export type Shopping = 'never' | 'rarely' | 'occasionally' | 'regularly'
export type DailyCommute = 'footAndCycle' | 'publicTransport' | 'carpooling' | 'car'
export type CarType = 'electric' | 'gas' | 'diesel' | 'fuel'
export type FlyingHabit = 'rarely' | 'occasionally' | 'regularly'

export type Form = {
  household: Household | undefined
  electricityUsage: number | ElectricityPresets | undefined
  inhabitants: number
  diet: Diet | undefined
  shopping: Shopping | undefined
  dailyCommute: DailyCommute | undefined
  otherCarUsage: number | CarUsage | undefined
  carType?: CarType | undefined
  flyingHabit: FlyingHabit | undefined
}
