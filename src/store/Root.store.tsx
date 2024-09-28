import { AppStateStore } from './AppState.store'
import { FormStateStore } from './FormState.store'
import { TranslationsStore } from './TranslationsState.store'

export class RootStore {
  AppState: AppStateStore
  FormState: FormStateStore
  TranslationsState: TranslationsStore

  constructor() {
    this.AppState = new AppStateStore(this)
    this.FormState = new FormStateStore(this)
    this.TranslationsState = new TranslationsStore(this)
  }
}

export const rootStore = new RootStore()
