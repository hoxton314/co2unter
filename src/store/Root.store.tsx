import { AppStateStore } from './AppState.store'
import { FormStore } from './Form.store'

export class RootStore {
  AppState: AppStateStore
  Form: FormStore

  constructor() {
    this.AppState = new AppStateStore(this)
    this.Form = new FormStore(this)
  }
}

export const rootStore = new RootStore()
