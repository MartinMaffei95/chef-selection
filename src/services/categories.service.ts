import DataBaseSingleton from '../db/db.singleton';
import { Category } from '../interfaces';

const db = DataBaseSingleton.getInstance();

export const getCategoriesOfRecipes = (): Promise<Category[]> => {
  const recipes = db.getRecipesCategories();
  const data = new Promise<Category[]>((resolve) => resolve(recipes));
  return data;
};

export const getCategoriesOfIngredients = (): Promise<Category[]> => {
  const categories = db.getIngredientsCategories();
  const data = new Promise<Category[]>((resolve) => resolve(categories));
  return data;
};
