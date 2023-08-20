import { Image } from '@chakra-ui/react'
import { LuTimer } from 'react-icons/lu'
import { BiCircleQuarter, BiSolidBowlHot } from 'react-icons/bi'
import { FC } from 'react'
import { Recipe } from '../../interfaces'
import { useNavigate } from 'react-router-dom'

type Props = {
  recipe: Recipe
}
const RecipeCard: FC<Props> = ({ recipe }) => {
  const navigate = useNavigate()
  return (
    <article
      onClick={() => navigate(`/recipes/${recipe?.id}`)}
      className="bg-neutral-100 shadow-md rounded-md overflow-hidden flex flex-col h-[70vh] "
    >
      <div className="w-full basis-3/4 overflow-hidden relative">
        <Image
          className="h-full w-full"
          objectFit={'cover'}
          objectPosition={'0 45%'}
          src={recipe?.imageUrl}
          alt={recipe?.title}
        />
      </div>
      <section className="px-4 basis-1/4 flex flex-col justify-around">
        <h4 className="font-semibold text-lg underline">{recipe?.title}</h4>
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

          <div>
            <LuTimer />
            <p>{recipe?.prepTime + recipe?.cookTime}</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default RecipeCard
