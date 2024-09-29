export interface ITranslations {
  HomeScreen: {
    welcome: string
    testEmission: string
    sectorsBreakdown: string
    environmentVsEmission: string
    heatMap: string
  }
  WelcomeScreen: {
    title: string
    description: string
    later: string
    yes: string
  }
  Navigation: {
    returnText: string
    form: string
    home: string
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
          name: 'never'
        },
        {
          label: string
          name: 'rarely'
        },
        {
          label: string
          name: 'occasionally'
        },
        {
          label: string
          name: 'regularly'
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
          name: 'never'
        },
        {
          label: string
          name: 'rarely'
        },
        {
          label: string
          name: 'occasionally'
        },
        {
          label: string
          name: 'regularly'
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
          name: 'rarely'
        },
        {
          label: string
          name: 'occasionally'
        },
        {
          label: string
          name: 'regularly'
        },
      ]
    }
  }
  CalculatedEmissions: {
    oldTreesAbsorption: string
    mediumTreeAbsorption: string
    seedlingAbsorption: string
    totalEmissions: string
    parkAbsorption: string
  }
}
