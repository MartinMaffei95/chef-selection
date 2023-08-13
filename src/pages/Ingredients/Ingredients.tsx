import useGetPageData from '../../hooks/useGetPageData';
import { Ingredient } from '../../interfaces/Ingredients.interface';
import { getIngredients } from '../../services/ingredients.service';
import { getCategoriesOfIngredients } from '../../services/categories.service';
import BackSection from '../../components/Generics/ToBackSection/BackSection';
import CategoryCard from '../../components/Cards/CategoryCard';
import IngredientCard from '../../components/Cards/IngredientCard';

const Ingredients = () => {
  const { data, categories } = useGetPageData<Ingredient[]>(
    getIngredients,
    getCategoriesOfIngredients
  );
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
          {data?.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ingredients;
