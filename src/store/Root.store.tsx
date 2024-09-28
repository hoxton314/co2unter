import { AppStateStore } from './AppState.store'
import { FormStore } from './Form.store'
import { TranslationsStore } from './Translations.store'

export class RootStore {
  AppState: AppStateStore
  Form: FormStore
  Translations: TranslationsStore

  constructor() {
    this.AppState = new AppStateStore(this)
    this.Form = new FormStore(this)
    this.Translations = new TranslationsStore(this)
  }
}

export const rootStore = new RootStore()
