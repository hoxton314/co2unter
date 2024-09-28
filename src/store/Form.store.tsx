import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import { SCREENS } from '../components/ScreenRouter'
import { DEV_MODE } from '../constants/envs'

export type flightCount = {
  shortRange: number
  midRange: number
  longRange: number
}

export type form = {
  houseHold: 'studio' | 'oneBedroom' | 'twoBedroom' | 'threeBedroom'
  electricityUsage: number
  inhabitants: number
  diet: 'vegan' | 'mediterranean' | 'lowMeat' | 'everything'
  shopping: 'never' | 'rarely' | 'occasionally' | 'regularly'
  dailyCommute: 'footAndCycle' | 'publicTransport' | 'carpooling' | 'car'
  otherCarUsage: number
  carType?: 'electric' | 'gas' | 'diesel' | 'fuel'
  flyingHabit: 'rarely' | 'occasionally' | 'regularly' | flightCount
}

export class FormStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  currentScreen: keyof typeof SCREENS = 'welcome'

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.rootStore = rootStore
  }

  // @action.bound setTheme(theme: Theme) {
  //   this.theme = theme
  // }

  // @action.bound toggleTheme() {
  //   this.theme = this.theme === 'light' ? 'dark' : 'light'
  // }

  @action.bound setCurrentScreen(screen: keyof typeof SCREENS) {
    this.currentScreen = screen
  }
}
