import { makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'

export class MapState {
  rootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

}
