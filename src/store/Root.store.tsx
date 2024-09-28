import { AppStateStore } from './AppState.store'
import { FormStateStore } from './Form.store'

export class RootStore {
  AppState: AppStateStore
  FormState: FormStateStore

  constructor() {
    this.AppState = new AppStateStore(this)
    this.FormState = new FormStateStore(this)
  }
}

export const rootStore = new RootStore()
