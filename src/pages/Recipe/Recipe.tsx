import { Checkbox, Grid, GridItem, Image } from '@chakra-ui/react'
import Section from '../../components/Generics/Section/Section'
import { Navigate, useParams } from 'react-router-dom'
import BackSection from '../../components/Generics/ToBackSection/BackSection'
import { Recipe } from '../../interfaces'
import { getOneRecipe } from '../../services/recipes.service'
import { useEffect, useState } from 'react'
import { BiCircleQuarter, BiSolidBowlHot } from 'react-icons/bi'
import { LuTimer } from 'react-icons/lu'
import { GiDoughRoller } from 'react-icons/gi'
import { TbCooker } from 'react-icons/tb'
import { Helmet } from 'react-helmet'

const Recipe = () => {
  const { id, slug } = useParams()

  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const getAllRecipes = async () => {
    const data = await getOneRecipe(id || '')
    setRecipe(data)
  }

  const normalizeTitle = (title: string | undefined): string => {
    if (!title) return ''
    const deleteSpecCharRx = /[^a-zA-Z0-9 ]/g
    const normTitle = title
      .toLowerCase()
      .replace(deleteSpecCharRx, '')
      .replace(/\s+/g, '-')

    return normTitle
  }

  useEffect(() => {
    getAllRecipes()
  }, [])

  return (
    <>
      {slug && slug === normalizeTitle(recipe?.title) ? (
        <div>
          <Helmet>
            <title>{`Recipe | ${recipe?.title || 'The best recipe'}`}</title>
            <link rel="canonical" href={`${window.location.href}`} />
          </Helmet>
          <BackSection redirectTo="/recipes" text={recipe?.title || ''} />
          <Grid templateColumns={{ base: '', md: '2fr .5fr' }} gap={6}>
            <GridItem>
              <Section className="p-0 overflow-hidden ">
                <div className="sm:flex sm:justify-center sm:items-stretch sm:gap-4">
                  <div className="flex flex-col sm:basis-1/2">
                    <Image src={recipe?.imageUrl} />
                    <div>
                      <h1 className="text-3xl text-center font-bold my-2">
                        {recipe?.title}
                      </h1>
                    </div>
                    <div className="flex items-center justify-center p-4">
                      <p>{recipe?.description}</p>
                    </div>
                    <div
                      className="
                      [&>div]:bg-neutral-300 [&>div]:w-full px-8
              flex gap-4 justify-around items-center [&>div]:p-2 [&>div]:rounded mb-2
              [&>div]:shadow [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-2"
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
                      [&>div]:bg-neutral-300 [&>div]:w-full px-8 mb-4
              flex gap-4 justify-around items-center [&>div]:p-2  [&>div]:rounded
              [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-2"
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
                        <p>
                          {(recipe?.prepTime || 0) + (recipe?.cookTime || 0)}'
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col 100 p-4  sm:basis-1/2">
                    <h3 className="text-2xl px-4 font-semibold ">Shop list</h3>

                    <ol className="h-full bg-yellow-200 m-4 rounded py-4 [&>li]:border-b-2 [&>li]:border-b-neutral-600 [&>li]:py-1 [&>li]:px-4 [&>li]:flex [&>li]:gap-2 [&>li]:items-baseline">
                      {recipe?.ingredients.map((ingredient) => (
                        <li>
                          <Checkbox
                            size="lg"
                            className="border-yellow-600"
                            colorScheme="yellow"
                            key={ingredient.name}
                          >
                            {ingredient.name}
                          </Checkbox>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className=" ">
                  <h3 className="text-2xl  my-4 px-4 ">Step by step</h3>
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
            </GridItem>
            <GridItem>
              <aside className="bg-neutral-50 h-full rounded-lg p-4">
                <h3>Follow us</h3>
                <h3>We recommend</h3>
              </aside>
            </GridItem>
          </Grid>
        </div>
      ) : (
        <Navigate to={`/recipes/${id}/${normalizeTitle(recipe?.title)}`} />
      )}
    </>
  )
}

export default Recipe
