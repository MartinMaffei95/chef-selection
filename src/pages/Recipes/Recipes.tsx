import { useEffect, useState } from 'react';
import CategoryCard from '../../components/Cards/CategoryCard';

import RecipeCard from '../../components/Cards/RecipeCard';
import { Category, Recipe } from '../../interfaces';
import { getRecipes } from '../../services/recipes.service';
import { getCategoriesOfRecipes } from '../../services/categories.service';
import BackSection from '../../components/Generics/ToBackSection/BackSection';
const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const getAllRecipes = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };
  const getAllCategories = async () => {
    const data = await getCategoriesOfRecipes();
    setCategories(data);
  };

  useEffect(() => {
    getAllRecipes();
    getAllCategories();
  }, []);

  return (
    <div>
      <BackSection redirectTo="/" text="Recipes" />
      <div>
        <h3 className="my-4 font-bold text-xl">Categories</h3>

        <div className="flex gap-2 [&>div]:flex-shrink-0 overflow-auto py-4">
          {categories?.map((cat) => (
            <CategoryCard category={cat} key={cat.tag} />
          ))}
        </div>
      </div>
      <section className="flex flex-col gap-4">
        <h3 className="my-4 font-bold text-xl">Newest Recipes</h3>
        <div className="flex flex-col gap-4">
          {recipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recipes;
