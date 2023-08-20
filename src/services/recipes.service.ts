import {
  adaptRecipeFromAPI,
  adaptRecipesFromAPI,
} from '../adapters/recipe.adapter'
import DataBaseSingleton from '../db/db.singleton'
import { Recipe } from '../interfaces'

const db = DataBaseSingleton.getInstance()
export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    const recipes = await fetch(`${import.meta.env.VITE_API_URI}/recipes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await recipes.json()
    return adaptRecipesFromAPI(data)
  } catch (error) {
    console.log(error)
    throw new Error('error')
  }
}

export const getOneRecipe = async (id: string): Promise<Recipe | null> => {
  try {
    const recipe = await fetch(
      `${import.meta.env.VITE_API_URI}/recipes/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await recipe.json()
    return adaptRecipeFromAPI(data)
  } catch (error) {
    console.log(error)
    throw new Error('error')
  }
}
export const getRecipesByTag = (tags: string[]): Promise<Recipe[]> => {
  const recipe = db.getByTag(tags)
  const data = new Promise<Recipe[]>((resolve) => resolve(recipe))
  return data
}
