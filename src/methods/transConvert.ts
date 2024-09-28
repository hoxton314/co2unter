// Define the structure of each option in the array
interface Option {
  label: string
  name: string
}

// Define the structure of the resulting object
type OptionsObject = {
  [key in Option['name']]: string
}

export function convertOptionsToObject(options: Option[]): OptionsObject {
  return options.reduce<OptionsObject>((accumulator, currentOption) => {
    accumulator[currentOption.name] = currentOption.label
    return accumulator
  }, {} as OptionsObject)
}
