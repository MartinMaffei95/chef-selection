import { Ingredient } from '.'

type SeasonName = 'SPRING' | 'WINTER' | 'AUTUMN' | 'SUMMER'
export interface Season {
  name: string
  ingredients: Ingredient[]
}

export type Seasons = {
  [season in SeasonName]: Season
}
