import { Checkbox, Image } from '@chakra-ui/react';
import Section from '../../components/Generics/Section/Section';
import { useParams } from 'react-router-dom';
import BackSection from '../../components/Generics/ToBackSection/BackSection';
import { Recipe } from '../../interfaces';
import { getOneRecipe } from '../../services/recipes.service';
import { useEffect, useState } from 'react';
import { BiCircleQuarter, BiSolidBowlHot } from 'react-icons/bi';
import { LuTimer } from 'react-icons/lu';
import { GiDoughRoller } from 'react-icons/gi';
import { TbCooker } from 'react-icons/tb';

const Recipe = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const getAllRecipes = async () => {
    const data = await getOneRecipe(id || '');
    setRecipe(data);
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div>
      <BackSection text={recipe?.title || ''} />
      <Section className="p-0 overflow-hidden">
        <Image src={recipe?.imageUrl} />
        <div>
          <h1 className="text-3xl text-center font-bold my-2">
            {recipe?.title}
          </h1>
        </div>
        <div className="flex flex-col 100 ">
          <h3 className="text-2xl px-4 font-semibold ">Shop list</h3>
          <div
            className="
              flex gap-4 justify-around items-center py-2
              [&>div]:flex [&>div]:items-center [&>div]:gap-2"
          >
            <div>
              <BiSolidBowlHot />
              <p>Pasta</p>
            </div>
            <div>
              <BiCircleQuarter />
              <p>{recipe?.servings}</p>
            </div>
          </div>
          <div
            className="
              flex gap-4 justify-around items-center py-2
              [&>div]:flex [&>div]:items-center [&>div]:gap-2"
          >
            <div>
              <TbCooker />
              <p>{recipe?.cookTime}'</p>
            </div>
            <div>
              <GiDoughRoller />
              <p>{recipe?.prepTime}'</p>
            </div>
            <div>
              <LuTimer />
              <p>{(recipe?.prepTime || 0) + (recipe?.cookTime || 0)}'</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <p>{recipe?.description}</p>
          </div>
          <ol className="bg-yellow-100 m-4 rounded py-4 [&>li]:border-b-2 [&>li]:border-b-neutral-600 [&>li]:py-1 [&>li]:px-4 [&>li]:flex [&>li]:gap-2 [&>li]:items-baseline">
            {recipe?.ingredients.map((ingredient) => (
              <li>
                <Checkbox
                  size="lg"
                  className="border-yellow-600"
                  colorScheme="yellow"
                >
                  {ingredient.name}
                </Checkbox>
              </li>
            ))}
          </ol>
        </div>

        <div className="">
          <h3 className="text-2xl  my-4 px-4">Step by step</h3>
          <ol className=" [&>li]:overflow-hidden [&>li]:gap-4 [&>li]:rounded-md [&>li]:shadow-lg [&>li]:flex p-2 flex flex-col gap-4 [&>li]:bg-neutral-50">
            {recipe?.instructions?.map((step) => (
              <li>
                <span className="bg-neutral-50 font-bold absolute rounded-br shadow-sm text-lg  flex items-center justify-center p-1">
                  {step.stepNumber}
                </span>
                <Image
                  className="h-24 aspect-square object-cover"
                  src={step.image}
                />
                <p className=" w-full py-2">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </div>
  );
};

export default Recipe;
