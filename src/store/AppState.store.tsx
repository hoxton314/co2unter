import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import { SCREENS } from '../components/ScreenRouter'
import { DEV_MODE } from '../constants/envs'
import { ICalculatedEmission } from '../types/calculatedEmission'
import { ISectors } from '../types/sectors'

export type Theme = 'light' | 'dark'

export class AppStateStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  theme = 'light' as Theme
  currentScreen: keyof typeof SCREENS = 'welcome'
  prevScreen: keyof typeof SCREENS = 'welcome'

  calculatedEmission: ICalculatedEmission = {}
  sectors: ISectors = {}

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.loadCalculatedEmissionFromLocalStorage()
  }

  @action.bound setTheme(theme: Theme) {
    this.theme = theme
  }

  @action.bound toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
  }

  @action.bound setCurrentScreen(screen: keyof typeof SCREENS) {
    this.prevScreen = this.currentScreen
    this.currentScreen = screen
  }

  @action.bound setCalculatedEmission(emission: ICalculatedEmission) {
    this.calculatedEmission = emission

    this.cacheCalculatedEmission()
  }

  @action.bound cacheCalculatedEmission() {
    localStorage.setItem('calculatedEmission', JSON.stringify(this.calculatedEmission))
  }

  @action.bound loadCalculatedEmissionFromLocalStorage() {
    const emission = localStorage.getItem('calculatedEmission')
    if (emission) {
      this.calculatedEmission = JSON.parse(emission)
    }
  }

  @action.bound setSectors(sectors: ISectors) {
    this.sectors = sectors
  }
}
