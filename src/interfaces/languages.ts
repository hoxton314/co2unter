export interface ITranslations {
  HomeScreen: {
    testEmission: string
    sectorsBreakdown: string
    environmentVsEmission: string
  }
  FormScreen: {
    houseSize: {
      title: string
      options: [
        {
          label: string
          name: 'studio'
        },
        {
          label: string
          name: 'oneBedroom'
        },
        {
          label: string
          name: 'twoBedroom'
        },
        {
          label: string
          name: 'threeBedroom'
        },
      ]
    }
    inhabitants: {
      title: string
      name: 'inhabitantsNumber'
    }
    electricityUsage: {
      title: string
      options: [
        {
          label: string
          name: 'veryLow'
        },
        {
          label: string
          name: 'low'
        },
        {
          label: string
          name: 'moderate'
        },
        {
          label: string
          name: 'big'
        },
        {
          label: string
          name: 'veryBig'
        },
        {
          label: string
          name: 'electricityUsageNumber'
        },
      ]
    }
    diet: {
      title: string
      options: [
        {
          label: string
          name: 'vegan'
        },
        {
          label: string
          name: 'mediterranean'
        },
        {
          label: string
          name: 'lowMeat'
        },
        {
          label: string
          name: 'everything'
        },
      ]
    }
    shopping: {
      title: string
      options: [
        {
          label: string
          name: 'neverShopping'
        },
        {
          label: string
          name: 'rarelyShopping'
        },
        {
          label: string
          name: 'occasionallyShopping'
        },
        {
          label: string
          name: 'regularlyShopping'
        },
      ]
    }
    commuteToWork: {
      title: string
      options: [
        {
          label: string
          name: 'footAndCycle'
        },
        {
          label: string
          name: 'publicTransport'
        },
        {
          label: string
          name: 'carpooling'
        },
        {
          label: string
          name: 'car'
        },
      ]
    }
    otherCarUsage: {
      title: string
      options: [
        {
          label: string
          name: 'noCar'
        },
        {
          label: string
          name: 'rarelyCarUsage'
        },
        {
          label: string
          name: 'occasionallyCarUsage'
        },
        {
          label: string
          name: 'regularlyCarUsage'
        },
        {
          label: string
          name: 'carDistanceNumber'
        },
      ]
    }
    carType: {
      title: string
      options: [
        {
          label: string
          name: 'electric'
        },
        {
          label: string
          name: 'gas'
        },
        {
          label: string
          name: 'diesel'
        },
        {
          label: string
          name: 'fuel'
        },
      ]
    }
    flyingHabit: {
      title: string
      options: [
        {
          label: string
          name: 'rarelyFlying'
        },
        {
          label: string
          name: 'occasionallyFlying'
        },
        {
          label: string
          name: 'regularlyFlying'
        },
        {
          label: string
          name: 'customFlightNumber'
        },
      ]
    }
    flyingHabitCustom: {
      title: string
      options: [
        {
          label: string
          name: 'shortRange'
        },
        {
          label: string
          name: 'midRange'
        },
        {
          label: string
          name: 'longRange'
        },
      ]
    }
  }
}
