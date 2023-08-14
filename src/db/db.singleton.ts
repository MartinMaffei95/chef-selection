import { AllCategories, Category, Recipe, Seasons, Tip } from '../interfaces'
import { Ingredient } from '../interfaces/Ingredients.interface'
import { allCategories } from './Categories.db'
import { ingredients } from './Ingredients.db'
import { onSeason } from './OnSeason.db'
import { recipes } from './Recipes.db'
import { tips } from './Tips.db'

class DataBaseSingleton {
  private static instance: DataBaseSingleton
  private recipes: Recipe[]
  private tips: Tip[]
  private categories: AllCategories
  private ingredients: Ingredient[]
  private seasons: Seasons

  private constructor() {
    this.recipes = recipes
    this.tips = tips
    this.categories = allCategories
    this.ingredients = ingredients
    this.seasons = onSeason
  }

  public static getInstance(): DataBaseSingleton {
    if (!DataBaseSingleton.instance) {
      DataBaseSingleton.instance = new DataBaseSingleton()
    }

    return DataBaseSingleton.instance
  }

  public getByTag(tags: string[]): Recipe[] {
    const result: Recipe[] = []

    const recipeFinded: Recipe[] | undefined = this.recipes.filter((recipe) =>
      tags.some((tag) => recipe.tags.includes(tag))
    )
    console.log(recipeFinded)
    if (!recipeFinded) return result
    result.push(...recipeFinded)

    return result
  }

  // RECIPES
  public getAllRecipes(): Recipe[] {
    return this.recipes
  }
  public getRecipeById(id: string): Recipe | null {
    const recipeFinded = this.recipes.find((recipe) => recipe.id === id)

    if (!recipeFinded) return null
    return recipeFinded
  }

  // TIPS

  public getAllTips(): Tip[] {
    return this.tips
  }
  public getTipById(id: string): Tip | null {
    const tipsFinded = this.tips.find((tip) => tip.id === id)

    if (!tipsFinded) return null
    return tipsFinded
  }

  // INGREDIENTS

  public getAllIngredients(): Ingredient[] {
    return this.ingredients
  }
  public getIngredientById(id: string): Ingredient | null {
    const ingredientFinded = this.ingredients.find(
      (ingredient) => ingredient.id === id
    )

    if (!ingredientFinded) return null
    return ingredientFinded
  }

  // ON SEASONS

  public getAllSeasons(): Seasons {
    return this.seasons
  }

  // CATEGORIES
  public getAllCategories(): AllCategories {
    return this.categories
  }

  public getRecipesCategories(): Category[] {
    return this?.categories?.recipesCategories
  }
  public getTipsCategories(): Category[] {
    return this?.categories?.tipsCategories
  }
  public getIngredientsCategories(): Category[] {
    return this?.categories?.ingredientsCategories
  }
}

export default DataBaseSingleton
