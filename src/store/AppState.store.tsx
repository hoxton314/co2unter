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
  prevScreen: keyof typeof SCREENS = 'welcome'

  calculatedEmission: ICalculatedEmission = {}

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.loadCalculatedEmissionFromLocalStorage()
    this.restoreThemeFromLocalStorage()
  }

  @action.bound setTheme(theme: Theme) {
    this.theme = theme
    localStorage.setItem('theme', theme)
  }

  @action.bound toggleTheme() {
    const theme = this.theme === 'light' ? 'dark' : 'light'
    this.theme = theme
    localStorage.setItem('theme', theme)
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

  @action.bound restoreThemeFromLocalStorage() {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || theme === 'light') {
      this.theme = theme as Theme
    }
  }
}
