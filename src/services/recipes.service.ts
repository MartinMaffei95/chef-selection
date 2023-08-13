import DataBaseSingleton from '../db/db.singleton';
import { Recipe } from '../interfaces';

const db = DataBaseSingleton.getInstance();
export const getRecipes = (): Promise<Recipe[]> => {
  const recipes = db.getAllRecipes();
  const data = new Promise<Recipe[]>((resolve) => resolve(recipes));
  return data;
};

export const getOneRecipe = (id: string): Promise<Recipe | null> => {
  const recipe = db.getRecipeById(id);
  const data = new Promise<Recipe | null>((resolve) => resolve(recipe));
  return data;
};
export const getRecipesByTag = (tags: string[]): Promise<Recipe[]> => {
  const recipe = db.getByTag(tags);
  const data = new Promise<Recipe[]>((resolve) => resolve(recipe));
  return data;
};
