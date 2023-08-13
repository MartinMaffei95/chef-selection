import CategoryCard from '../../components/Cards/CategoryCard';
import TipCard from '../../components/Cards/TipCard';
import BackSection from '../../components/Generics/ToBackSection/BackSection';
import useGetPageData from '../../hooks/useGetPageData';
import { Tip } from '../../interfaces';
import { getTips } from '../../services/Tips.service';
import { getCategoriesOfRecipes } from '../../services/categories.service';

const Tips = () => {
  const { data, categories } = useGetPageData<Tip[]>(
    getTips,
    getCategoriesOfRecipes
  );
  return (
    <div>
      <BackSection redirectTo="/" text="Tips & Tricks" />
      <div>
        <h3 className="my-4 font-bold text-xl">Categories</h3>

        <div className="flex gap-2 [&>div]:flex-shrink-0 overflow-auto py-4">
          {categories?.map((cat) => (
            <CategoryCard category={cat} key={cat.tag} />
          ))}
        </div>
      </div>
      <section className="flex flex-col gap-4">
        <h3 className="my-4 font-bold text-xl">Newest Tricks</h3>
        <div className="flex flex-col gap-4">
          {data?.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tips;
