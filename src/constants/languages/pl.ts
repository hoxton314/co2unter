import { ITranslations } from '../../interfaces/languages'
export const translations: ITranslations = {
  HomeScreen: {
    welcome: 'Ekran powitalny (temp)',
    testEmission: 'Jak moje życie wpływa na emisję CO2?',
    sectorsBreakdown: 'Jaki wpływ na emisję CO2 mają różne sektory życia?',
    environmentVsEmission: 'Środowisko vs. emisja CO2',
    heatMap: 'Heatmapa of emisji CO2',
  },
  FormScreen: {
    houseSize: {
      title: 'Jak duży jest Twój dom?',
      options: [
        {
          label: 'Studio',
          name: 'studio',
        },
        {
          label: 'Mieszkanie/dom z jedną sypialnią',
          name: 'oneBedroom',
        },
        {
          label: 'Mieszkanie/dom z dwoma sypialniami',
          name: 'twoBedroom',
        },
        {
          label: 'Mieszkanie/dom z trzema sypialniam',
          name: 'threeBedroom',
        },
      ],
    },
    inhabitants: {
      title: 'Ile osób mieszka w Twoim domu?',
      name: 'inhabitantsNumber',
    },
    electricityUsage: {
      title: 'Jak duże jest dzienne zużycie energii elektrycznej w Twoim gospodarstwie domowym?',
      options: [
        {
          label: 'Bardzo niskie (10 kWh)',
          name: 'veryLow',
        },
        {
          label: 'Niskie (15 kWh)',
          name: 'low',
        },
        {
          label: 'Umiarkowane (20 kWh)',
          name: 'moderate',
        },
        {
          label: 'Duże (30 kWh)',
          name: 'big',
        },
        {
          label: 'Bardzo duże (50 kWh)',
          name: 'veryBig',
        },
        {
          label: 'Znam dokładną ilość (w kWh): ',
          name: 'electricityUsageNumber',
        },
      ],
    },
    diet: {
      title: 'Jaka jest Twoja dieta na codzień?',
      options: [
        {
          label: 'Wegańska',
          name: 'vegan',
        },
        {
          label: 'Śródziemnomorska',
          name: 'mediterranean',
        },
        {
          label: 'Z niskim spożyciem mięsa ',
          name: 'lowMeat',
        },
        {
          label: 'Jem wszystko',
          name: 'everything',
        },
      ],
    },
    shopping: {
      title: 'Jak często robisz zakupy?',
      options: [
        {
          label: 'Prawie wcale',
          name: 'never',
        },
        {
          label: 'Rzadko',
          name: 'rarely',
        },
        {
          label: 'Od czasu do czasu',
          name: 'occasionally',
        },
        {
          label: 'Regularnie',
          name: 'regularly',
        },
      ],
    },
    commuteToWork: {
      title: 'Jak dojeżdżasz do szkoły/pracy?',
      options: [
        {
          label: 'Pieszo/rowerem',
          name: 'footAndCycle',
        },
        {
          label: 'Transport publiczny',
          name: 'publicTransport',
        },
        {
          label: 'Carpooling',
          name: 'carpooling',
        },
        {
          label: 'Własnym samochodem',
          name: 'car',
        },
      ],
    },
    otherCarUsage: {
      title: 'Jak często korzystasz z samochodu (średnio) z różnych powodów w ciągu tygodnia?',
      options: [
        {
          label: 'Nie mam/używam samochodu',
          name: 'never',
        },
        {
          label: 'Rzadko (20 km)',
          name: 'rarely',
        },
        {
          label: 'Sporadycznie (100 km)',
          name: 'occasionally',
        },
        {
          label: 'Regularnie (250 km)',
          name: 'regularly',
        },
        {
          label: 'Znam odległość (w km): ',
          name: 'carDistanceNumber',
        },
      ],
    },
    carType: {
      title: 'Jakim typem pojazdu jeździsz?',
      options: [
        {
          label: 'Elektryczny',
          name: 'electric',
        },
        {
          label: 'Gazowy',
          name: 'gas',
        },
        {
          label: 'Olej napędowy',
          name: 'diesel',
        },
        {
          label: 'Paliwo',
          name: 'fuel',
        },
      ],
    },
    flyingHabit: {
      title: 'Jak wyglądają Twoje nawyki związane z lataniem?',
      options: [
        {
          label: 'Rzadko (do jednego lotu w dwie strony rocznie)',
          name: 'rarely',
        },
        {
          label: 'Sporadycznie (2-3 loty rocznie)',
          name: 'occasionally',
        },
        {
          label: 'Regularnie (więcej lotów, loty międzykontynentalne)',
          name: 'regularly',
        },
      ],
    },
  },
  CalculatedEmissions: {
    oldTreesAbsorption: 'Ilość starych drzew potrzebnych do pochłonięcia emisji CO2',
    mediumTreeAbsorption: 'Ilość średnich drzew potrzebnych do pochłonięcia emisji CO2',
    seedlingAbsorption: 'Ilość małych drzew potrzebnych do pochłonięcia emisji CO2',
    totalEmissions: 'Całkowita emisja CO2',
  },
}
