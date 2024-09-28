import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import { SCREENS } from '../components/ScreenRouter'

export type Theme = 'light' | 'dark'

const DEV_MODE = process.env.DEV_MODE === 'true'

export class AppStateStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  theme = 'dark' as Theme
  currentScreen: keyof typeof SCREENS = 'welcome'

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
}
