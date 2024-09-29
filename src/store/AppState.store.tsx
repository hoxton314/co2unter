import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import { SCREENS } from '../components/ScreenRouter'
import { DEV_MODE } from '../constants/envs'
import { ICalculatedEmission } from '../types/calculatedEmission'

export type Theme = 'light' | 'dark'

export class AppStateStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  theme = 'light' as Theme
  currentScreen: keyof typeof SCREENS = 'welcome'

  calculatedEmission: ICalculatedEmission | undefined = undefined

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action.bound setTheme(theme: Theme) {
    this.theme = theme
  }

  @action.bound toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
  }

  @action.bound setCurrentScreen(screen: keyof typeof SCREENS) {
    this.currentScreen = screen
  }

  @action.bound setCalculatedEmission(emission: ICalculatedEmission) {
    this.calculatedEmission = emission
  }
}
