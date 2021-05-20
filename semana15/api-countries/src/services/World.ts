import { Country } from '@src/model/countries'

export type State = {
  id: number
  name: string
  region: string
  country: Country
}

export type City = {
  id: number
  name: string
  state: State
}

type WorldProps = {
  countries?: Country[]
  states?: State[]
  cities?: City[]
}

export default class World {
  countries: Country[]
  states: State[]
  cities: City[]

  constructor({ countries, states, cities }: WorldProps) {
    this.countries = countries || []
    this.states = states || []
    this.cities = cities || []
  }

  getStateByName = (name: string): State | undefined =>
    this.states.find((state) => state.name === name)

  findCountry(query: string | number): Country | undefined {
    if (Number(query)) {
      return this.countries.find((country) => country.id === Number(query))
    } else {
      return this.countries.find((country) =>
        RegExp(`^${query}$`, 'i').test(country.name)
      )
    }
  }
}
