import { action, makeAutoObservable } from 'mobx'
import { translations as en } from '../constants/languages/en'
import { translations as pl } from '../constants/languages/pl'
import { ITranslations } from '../interfaces/languages'
import { RootStore } from './Root.store'

export const languagesOptions = ['en', 'pl'] as const
type languages = (typeof languagesOptions)[number]
const languagesList: { [key in languages]: ITranslations } = { en, pl }

export class TranslationsStore {
  rootStore: RootStore
  translations: ITranslations = en
  language: languages = 'en'

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action.bound setLanguage(language: languages): void {
    this.language = language
    this.translations = {
      ...languagesList['en'],
      ...languagesList[language],
    }
  }
}
