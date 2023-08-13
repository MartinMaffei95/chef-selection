import { useEffect, useState } from 'react';
import { Recipe } from '../../interfaces';
import { getRecipesByTag } from '../../services/recipes.service';
import RecipeCard from '../../components/Cards/RecipeCard';
import BackSection from '../../components/Generics/ToBackSection/BackSection';

const Search = () => {
  const searchParams = new URLSearchParams(location.search);
  const [results, setResults] = useState<Recipe[]>([]);

  const tags = searchParams.get('tags')?.split(',');

  const findResults = async () => {
    if (!tags) return;
    const data = await getRecipesByTag(tags);
    setResults(data);
  };

  useEffect(() => {
    findResults();
    // console.log(tags);
  }, []);
  return (
    <>
      <BackSection text={`Results (${results?.length || 0})`} />
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-xl">Results ({results?.length || 0})</h3>
        <div className="flex flex-col gap-4">
          {results?.map((recipes) => (
            <RecipeCard key={recipes.id} recipe={recipes} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
