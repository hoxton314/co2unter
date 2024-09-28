import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import { DEV_MODE } from '../constants/envs'
import { Form, Household, Diet, Shopping, DailyCommute, CarType, FlyingHabit } from '../types/formStore'

export class FormStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  form = {
    household: undefined,
    electricityUsage: undefined,
    inhabitants: undefined,
    diet: undefined,
    shopping: undefined,
    dailyCommute: undefined,
    otherCarUsage: undefined,
    flyingHabit: undefined,
  } as Form

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action.bound setHousehold(household: Household) {
    this.form.household = household
  }

  @action.bound setElectricityUsage(electricityUsage: number) {
    this.form.electricityUsage = electricityUsage
  }

  @action.bound setInhabitants(inhabitants: number) {
    this.form.inhabitants = inhabitants
  }

  @action.bound setDiet(diet: Diet) {
    this.form.diet = diet
  }

  @action.bound setShopping(shopping: Shopping) {
    this.form.shopping = shopping
  }

  @action.bound setDailyCommute(dailyCommute: DailyCommute) {
    this.form.dailyCommute = dailyCommute
  }

  @action.bound setOtherCarUsage(otherCarUsage: number) {
    this.form.otherCarUsage = otherCarUsage
  }

  @action.bound setCarType(carType: CarType) {
    this.form.carType = carType
  }

  @action.bound setFlyingHabit(flyingHabit: FlyingHabit) {
    this.form.flyingHabit = flyingHabit
  }
}
