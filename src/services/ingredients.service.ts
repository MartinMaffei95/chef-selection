import DataBaseSingleton from '../db/db.singleton';
import { Ingredient } from '../interfaces/Ingredients.interface';

const db = DataBaseSingleton.getInstance();
export const getIngredients = (): Promise<Ingredient[]> => {
  const ingredients = db.getAllIngredients();
  const data = new Promise<Ingredient[]>((resolve) => resolve(ingredients));
  return data;
};

export const getOneIngredient = (id: string): Promise<Ingredient | null> => {
  const ingredients = db.getIngredientById(id);
  const data = new Promise<Ingredient | null>((resolve) =>
    resolve(ingredients)
  );
  return data;
};
// export const getIngredientByTag = (tags: string[]): Promise<Ingredient[]> => {
//   const ingredients = db.getByTag(tags);
//   const data = new Promise<Ingredient[]>((resolve) => resolve(ingredients));
//   return data;
// };
