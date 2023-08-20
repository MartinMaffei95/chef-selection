import { GenericPost } from '.'

interface Ingredient {
  name: string
  quantity: number
  unit: string
  position: number
}

interface RecipeStep {
  stepNumber: number
  image?: string
  description: string
}

export interface Recipe extends GenericPost {
  servings: number
  prepTime: number
  cookTime: number
  ingredients: Ingredient[]
  instructions: RecipeStep[]
  notes?: string
}

export interface RecipeFromAPI extends Omit<GenericPost, 'id'> {
  _id: string
  servings: number
  prepTime: number
  cookTime: number
  ingredients: Ingredient[]
  instructions: RecipeStep[]
  notes?: string
}
