import { Recipe, RecipeFromAPI } from '../interfaces'

export const adaptRecipeFromAPI = (recipe: RecipeFromAPI): Recipe => {
  const adaptedRecipe: Recipe = {
    servings: recipe.servings,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    notes: recipe.notes,
    id: recipe._id,
    title: recipe.title,
    description: recipe.description,
    tags: recipe.tags,
    imageUrl: recipe.imageUrl,
  }

  return adaptedRecipe
}

export const adaptRecipesFromAPI = (recipes: RecipeFromAPI[]): Recipe[] => {
  const adaptedRecipes: Recipe[] = []

  recipes.forEach((recipe) => {
    const adaptedRecipe = adaptRecipeFromAPI(recipe)
    adaptedRecipes.push(adaptedRecipe)
  })

  return adaptedRecipes
}
