import { action, computed, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import { DEV_MODE } from '../constants/envs'
import { Form, Household, Diet, Shopping, DailyCommute, CarType, FlyingHabit } from '../types/formStore'
import { FormMap } from '../screens/FormScreen/FormScreen'

export const FormOrder = [
  'household',
  'inhabitants',
  'electricityUsage',
  'diet',
  'shopping',
  'dailyCommute',
  'otherCarUsage',
  'carType',
  'flyingHabit',
]

export class FormStateStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  form: Form = {
    household: undefined,
    electricityUsage: undefined,
    inhabitants: 1,
    diet: undefined,
    shopping: undefined,
    dailyCommute: undefined,
    otherCarUsage: undefined,
    carType: undefined,
    flyingHabit: undefined,
  }
  currentFormStep: keyof typeof FormMap = 'household'

  get stepIndex() {
    return FormOrder.indexOf(this.currentFormStep)
  }

  get isLastStep() {
    return this.stepIndex === FormOrder.length - 1
  }

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      stepIndex: computed,
      isLastStep: computed,
    })
    this.rootStore = rootStore
  }

  @action.bound nextStep() {
    const currentIndex = FormOrder.indexOf(this.currentFormStep)
    if (currentIndex < FormOrder.length - 1) {
      this.currentFormStep = FormOrder[currentIndex + 1] as keyof typeof FormMap
    }
  }

  @action.bound prevStep() {
    const currentIndex = FormOrder.indexOf(this.currentFormStep)
    if (currentIndex > 0) {
      this.currentFormStep = FormOrder[currentIndex - 1] as keyof typeof FormMap
    }
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
