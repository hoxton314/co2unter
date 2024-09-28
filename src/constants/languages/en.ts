import { ITranslations } from '../../interfaces/languages'
export const translations: ITranslations = {
  HomeScreen: {
    welcome: 'Welcome screen (temp)',
    testEmission: 'What is my impact on CO2 emission?',
    sectorsBreakdown: 'What impact do different sectors of life have on CO2 emissions?',
    environmentVsEmission: 'Environment vs. CO2 emissions',
  },
  FormScreen: {
    houseSize: {
      title: 'How big is your house?',
      options: [
        {
          label: 'Studio',
          name: 'studio',
        },
        {
          label: 'One-bedroom',
          name: 'oneBedroom',
        },
        {
          label: 'Two-bedroom',
          name: 'twoBedroom',
        },
        {
          label: 'Three-bedroom',
          name: 'threeBedroom',
        },
      ],
    },
    inhabitants: {
      title: 'How many people live in your house?',
      name: 'inhabitantsNumber',
    },
    electricityUsage: {
      title: 'How big is your electricity usage on the daily basis in your household?',
      options: [
        {
          label: 'Very low (10 kWh)',
          name: 'veryLow',
        },
        {
          label: 'Low (15 kWh)',
          name: 'low',
        },
        {
          label: 'Moderate (20 kWh)',
          name: 'moderate',
        },
        {
          label: 'Big (30 kWh)',
          name: 'big',
        },
        {
          label: 'Very big (50 kWh)',
          name: 'veryBig',
        },
        {
          label: 'I know the exact amount (in kWh): ',
          name: 'electricityUsageNumber',
        },
      ],
    },
    diet: {
      title: 'What is your day-to-day diet?',
      options: [
        {
          label: 'Vegan',
          name: 'vegan',
        },
        {
          label: 'Mediterranean',
          name: 'mediterranean',
        },
        {
          label: 'Low meat',
          name: 'lowMeat',
        },
        {
          label: 'I eat everything',
          name: 'everything',
        },
      ],
    },
    shopping: {
      title: 'How often do you go shopping?',
      options: [
        {
          label: 'Almost never',
          name: 'never',
        },
        {
          label: 'Rarely',
          name: 'rarely',
        },
        {
          label: 'Occasionally',
          name: 'occasionally',
        },
        {
          label: 'Regularly',
          name: 'regularly',
        },
      ],
    },
    commuteToWork: {
      title: 'How do you commute to school/work?',
      options: [
        {
          label: 'On foot/cycle',
          name: 'footAndCycle',
        },
        {
          label: 'Public transport',
          name: 'publicTransport',
        },
        {
          label: 'Carpooling',
          name: 'carpooling',
        },
        {
          label: 'My own car',
          name: 'car',
        },
      ],
    },
    otherCarUsage: {
      title: 'How much do you use the car (on average) for different reasons in a week?',
      options: [
        {
          label: 'I don’t have/use a car',
          name: 'noCar',
        },
        {
          label: 'Rarely (20 km)',
          name: 'rarelyCarUsage',
        },
        {
          label: 'Occasionally (100 km)',
          name: 'occasionallyCarUsage',
        },
        {
          label: 'Regularly (250 km)',
          name: 'regularlyCarUsage',
        },
        {
          label: 'I know the distance (in km): ',
          name: 'carDistanceNumber',
        },
      ],
    },
    carType: {
      title: 'What type of vehicle do you drive?',
      options: [
        {
          label: 'Electric',
          name: 'electric',
        },
        {
          label: 'Gas',
          name: 'gas',
        },
        {
          label: 'Diesel',
          name: 'diesel',
        },
        {
          label: 'Fuel',
          name: 'fuel',
        },
      ],
    },
    flyingHabit: {
      title: 'How does your flying habits looks like?',
      options: [
        {
          label: 'Rarely (up to one two-way flight yearly)',
          name: 'rarelyFlying',
        },
        {
          label: 'Occasionally (2-3 flights yearly)',
          name: 'occasionallyFlying',
        },
        {
          label: 'Regularly (more flights, intercontinental flights)',
          name: 'regularlyFlying',
        },
        {
          label: 'Custom amount',
          name: 'customFlightNumber',
        },
      ],
    },
    flyingHabitCustom: {
      title: 'Enter amounts for each type of flights you take in a year:',
      options: [
        {
          label: 'Short-range (up to 3 hours)',
          name: 'shortRange',
        },
        {
          label: 'Mid-range (4 to 7 hours) ',
          name: 'midRange',
        },
        {
          label: 'Long-range (over 8 hours)',
          name: 'longRange',
        },
      ],
    },
  },
}
